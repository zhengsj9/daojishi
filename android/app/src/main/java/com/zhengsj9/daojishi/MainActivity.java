package com.zhengsj9.daojishi;

import android.annotation.SuppressLint;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewClientCompat;

import org.json.JSONObject;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class MainActivity extends AppCompatActivity {
  private static final String INDEX_URL = "https://appassets.androidplatform.net/assets/www/index.html";
  private static final String WEBVIEW_STATE_KEY = "webview_state";
  private static final String BACKUP_EVENT_NAME = "android-backup-save";

  @Nullable
  private ValueCallback<Uri[]> filePathCallback;

  @Nullable
  private String pendingBackupFileName;

  @Nullable
  private byte[] pendingBackupBytes;

  private WebView webView;

  private final ActivityResultLauncher<Intent> fileChooserLauncher =
      registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), this::handleFileChooserResult);

  private final ActivityResultLauncher<String> createBackupDocumentLauncher =
      registerForActivityResult(new ActivityResultContracts.CreateDocument("application/json"), this::handleBackupDocumentResult);

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    webView = findViewById(R.id.webView);
    configureWebView();

    getOnBackPressedDispatcher().addCallback(
        this,
        new OnBackPressedCallback(true) {
          @Override
          public void handleOnBackPressed() {
            if (webView.canGoBack()) {
              webView.goBack();
              return;
            }

            finish();
          }
        });

    boolean restored = false;
    if (savedInstanceState != null) {
      Bundle webViewState = savedInstanceState.getBundle(WEBVIEW_STATE_KEY);
      if (webViewState != null) {
        restored = webView.restoreState(webViewState) != null;
      }
    }

    if (!restored) {
      webView.loadUrl(INDEX_URL);
    }
  }

  @Override
  protected void onPause() {
    webView.onPause();
    webView.pauseTimers();
    super.onPause();
  }

  @Override
  protected void onResume() {
    super.onResume();
    webView.onResume();
    webView.resumeTimers();
  }

  @Override
  protected void onSaveInstanceState(@NonNull Bundle outState) {
    Bundle webViewState = new Bundle();
    webView.saveState(webViewState);
    outState.putBundle(WEBVIEW_STATE_KEY, webViewState);
    super.onSaveInstanceState(outState);
  }

  @Override
  protected void onDestroy() {
    if (filePathCallback != null) {
      filePathCallback.onReceiveValue(null);
      filePathCallback = null;
    }

    if (webView != null) {
      webView.removeJavascriptInterface("AndroidApp");
      webView.setWebChromeClient(null);
      webView.setWebViewClient(null);
      webView.destroy();
    }

    super.onDestroy();
  }

  @SuppressLint("SetJavaScriptEnabled")
  private void configureWebView() {
    WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG);
    webView.setBackgroundColor(Color.parseColor("#edf8f3"));
    webView.addJavascriptInterface(new AndroidBridge(), "AndroidApp");

    WebSettings settings = webView.getSettings();
    settings.setJavaScriptEnabled(true);
    settings.setDomStorageEnabled(true);
    settings.setDatabaseEnabled(true);
    settings.setAllowContentAccess(true);
    settings.setAllowFileAccess(false);
    settings.setBuiltInZoomControls(false);
    settings.setDisplayZoomControls(false);
    settings.setLoadWithOverviewMode(true);
    settings.setUseWideViewPort(true);
    settings.setMediaPlaybackRequiresUserGesture(false);

    WebViewAssetLoader assetLoader =
        new WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
            .build();

    webView.setWebViewClient(new LocalContentWebViewClient(assetLoader));
    webView.setWebChromeClient(new AppChromeClient());
    webView.setDownloadListener(
        (url, userAgent, contentDisposition, mimeType, contentLength) -> {
          if (url == null || url.isEmpty() || url.startsWith("blob:")) {
            return;
          }

          openExternalUrl(Uri.parse(url));
        });
  }

  private void handleFileChooserResult(ActivityResult result) {
    if (filePathCallback == null) {
      return;
    }

    Uri[] results = WebChromeClient.FileChooserParams.parseResult(result.getResultCode(), result.getData());
    filePathCallback.onReceiveValue(results);
    filePathCallback = null;
  }

  private void handleBackupDocumentResult(@Nullable Uri uri) {
    final String fileName = pendingBackupFileName;
    final byte[] payload = pendingBackupBytes;
    pendingBackupFileName = null;
    pendingBackupBytes = null;

    if (uri == null || payload == null) {
      dispatchBackupEvent("cancelled", fileName, getString(R.string.export_cancelled));
      return;
    }

    new Thread(
            () -> {
              try (OutputStream outputStream = getContentResolver().openOutputStream(uri)) {
                if (outputStream == null) {
                  throw new IOException("Output stream is null");
                }

                outputStream.write(payload);
                outputStream.flush();
                dispatchBackupEvent("saved", fileName, getString(R.string.export_success));
              } catch (IOException exception) {
                dispatchBackupEvent("error", fileName, getString(R.string.export_failed));
              }
            })
        .start();
  }

  private void dispatchBackupEvent(@NonNull String status, @Nullable String fileName, @Nullable String message) {
    String script =
        "window.dispatchEvent(new CustomEvent("
            + JSONObject.quote(BACKUP_EVENT_NAME)
            + ", { detail: { status: "
            + JSONObject.quote(status)
            + ", fileName: "
            + JSONObject.quote(fileName == null ? "" : fileName)
            + ", message: "
            + JSONObject.quote(message == null ? "" : message)
            + " } }));";

    webView.post(() -> webView.evaluateJavascript(script, null));
  }

  private void openExternalUrl(@NonNull Uri uri) {
    Intent intent = new Intent(Intent.ACTION_VIEW, uri);
    intent.addCategory(Intent.CATEGORY_BROWSABLE);

    try {
      startActivity(intent);
    } catch (ActivityNotFoundException ignored) {
      Toast.makeText(this, R.string.external_link_unavailable, Toast.LENGTH_SHORT).show();
    }
  }

  private String normalizeBackupFileName(@Nullable String fileName) {
    if (fileName == null || fileName.trim().isEmpty()) {
      return "time-menu-backup.json";
    }

    String sanitized = fileName.replace("/", "-").replace("\\", "-").trim();
    if (!sanitized.endsWith(".json")) {
      sanitized += ".json";
    }

    return sanitized;
  }

  private final class AppChromeClient extends WebChromeClient {
    @Override
    public boolean onShowFileChooser(
        WebView view,
        ValueCallback<Uri[]> fileChooserCallback,
        FileChooserParams fileChooserParams) {
      if (filePathCallback != null) {
        filePathCallback.onReceiveValue(null);
      }

      filePathCallback = fileChooserCallback;

      Intent intent;
      try {
        intent = fileChooserParams.createIntent();
      } catch (ActivityNotFoundException exception) {
        filePathCallback = null;
        Toast.makeText(MainActivity.this, R.string.file_chooser_unavailable, Toast.LENGTH_SHORT).show();
        return false;
      }

      try {
        fileChooserLauncher.launch(intent);
        return true;
      } catch (ActivityNotFoundException exception) {
        filePathCallback = null;
        Toast.makeText(MainActivity.this, R.string.file_chooser_unavailable, Toast.LENGTH_SHORT).show();
        return false;
      }
    }
  }

  private final class LocalContentWebViewClient extends WebViewClientCompat {
    private final WebViewAssetLoader assetLoader;

    private LocalContentWebViewClient(WebViewAssetLoader assetLoader) {
      this.assetLoader = assetLoader;
    }

    @Nullable
    @Override
    public WebResourceResponse shouldInterceptRequest(@NonNull WebView view, @NonNull WebResourceRequest request) {
      return assetLoader.shouldInterceptRequest(request.getUrl());
    }

    @Override
    public boolean shouldOverrideUrlLoading(@NonNull WebView view, @NonNull WebResourceRequest request) {
      Uri uri = request.getUrl();
      if ("appassets.androidplatform.net".equals(uri.getHost())) {
        return false;
      }

      openExternalUrl(uri);
      return true;
    }
  }

  private final class AndroidBridge {
    @JavascriptInterface
    public boolean isNativeApp() {
      return true;
    }

    @JavascriptInterface
    public boolean saveBackupFile(String fileName, String content, String mimeType) {
      if (content == null) {
        return false;
      }

      pendingBackupFileName = normalizeBackupFileName(fileName);
      pendingBackupBytes = content.getBytes(StandardCharsets.UTF_8);
      runOnUiThread(() -> createBackupDocumentLauncher.launch(pendingBackupFileName));
      return true;
    }
  }
}
