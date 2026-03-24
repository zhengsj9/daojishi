# 时间菜单

一个可直接发布的静态网页，支持三种模式：

- 下班倒计时
- 纪念日记录
- 点滴生活时间线

## 本地使用

直接打开根目录的 `index.html` 即可。

如果要体验“安装成 App”与离线缓存能力，请使用本地静态服务器访问，例如：

```bash
python3 -m http.server 4173
```

然后打开 `http://localhost:4173`。

## 发布到 GitHub Pages

仓库已经包含 GitHub Pages 自动发布工作流：

- 推送到 `main` 分支后会自动触发部署
- 在 GitHub 仓库中开启 `Settings -> Pages`
- `Build and deployment` 选择 `GitHub Actions`

部署完成后，网站地址通常会是：

`https://zhengsj9.github.io/daojishi/`

发布后，桌面 Chrome / Edge 和安卓浏览器会支持“安装 App”；iPhone / iPad 可以在 Safari 里通过“添加到主屏幕”安装。

## Android App

仓库现在额外包含了一个原生 Android WebView 外壳工程，目录在 `android/`。

1. 每次修改根目录网页文件后，先执行：

```bash
./scripts/sync-android-assets.sh
```

2. 用 Android Studio 打开 `android/`
3. 首次同步 Gradle 后，选择模拟器或真机运行

说明：

- Android 工程会把网页资源打包进 `android/app/src/main/assets/www/`
- App 内已经补了原生文件选择器支持，图片上传、导入 JSON 和导出备份都能走 Android 原生能力
- 这个工作区里没有 Android SDK，所以这里我只能生成工程，不能直接替你打出 APK

## 目录说明

- `index.html`: 页面结构
- `styles.css`: 样式
- `script.js`: 交互逻辑
- `app.webmanifest`: PWA 应用清单
- `sw.js`: 离线缓存与应用壳
- `icons/`: App 图标资源
- `android/`: Android WebView App 工程
- `scripts/sync-android-assets.sh`: 同步网页资源到 Android assets
