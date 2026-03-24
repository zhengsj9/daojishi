const LEGACY_COUNTDOWN_TIME_STORAGE_KEY = "clock-out-countdown-time";
const LEGACY_START_STORAGE_KEY = "clock-in-start-time";
const LEGACY_COUNTDOWN_DRAFT_STORAGE_KEY = "clock-out-countdown-draft";
const LEGACY_ANNIVERSARY_STORAGE_KEY = "anniversary-record";
const COUNTDOWN_STORAGE_KEY = "countdown-records";
const ACTIVE_COUNTDOWN_STORAGE_KEY = "active-countdown-id";
const COUNTDOWN_DRAFT_STORAGE_KEY = "countdown-draft";
const ANNIVERSARY_STORAGE_KEY = "anniversary-records";
const ACTIVE_ANNIVERSARY_STORAGE_KEY = "active-anniversary-id";
const ANNIVERSARY_DRAFT_STORAGE_KEY = "anniversary-draft";
const DISPLAY_PREFERENCES_STORAGE_KEY = "display-preferences";
const EDITOR_SIDEBAR_VISIBILITY_STORAGE_KEY = "editor-sidebar-visible";
const ANDROID_BACKUP_EVENT_NAME = "android-backup-save";

const appShellEl = document.querySelector("#appShell");
const countdownTabEl = document.querySelector("#countdownTab");
const anniversaryTabEl = document.querySelector("#anniversaryTab");
const lifeTabEl = document.querySelector("#lifeTab");
const countdownViewEl = document.querySelector("#countdownView");
const anniversaryViewEl = document.querySelector("#anniversaryView");
const lifeViewEl = document.querySelector("#lifeView");
const countdownEditorEl = document.querySelector("#countdownEditor");
const anniversaryEditorEl = document.querySelector("#anniversaryEditor");
const lifeEditorEl = document.querySelector("#lifeEditor");
const heroEyebrowEl = document.querySelector("#heroEyebrow");
const heroSubtitleEl = document.querySelector("#heroSubtitle");
const editorTagEl = document.querySelector("#editorTag");
const editorTitleEl = document.querySelector("#editorTitle");
const orbitalCoreEl = document.querySelector("#orbitalCore");

const countdownPanelEl = document.querySelector("#countdownPanel");
const countdownNameTextEl = document.querySelector("#countdownNameText");
const countdownTargetTextEl = document.querySelector("#countdownTargetText");
const countdownMetaTargetEl = document.querySelector("#countdownMetaTarget");
const countdownMetaStateEl = document.querySelector("#countdownMetaState");
const countdownListEl = document.querySelector("#countdownList");
const countdownListSummaryEl = document.querySelector("#countdownListSummary");
const countdownNameEl = document.querySelector("#countdownName");
const countdownTargetEl = document.querySelector("#countdownTarget");
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const statusTextEl = document.querySelector("#statusText");
const currentTimeTextEl = document.querySelector("#currentTimeText");
const insightTextEl = document.querySelector("#insightText");
const dailyQuoteEl = document.querySelector("#dailyQuote");
const quoteAuthorEl = document.querySelector("#quoteAuthor");
const quoteCardEl = document.querySelector("#quoteCard");
const editorCardEl = document.querySelector("#editorCard");
const installAppBtnEl = document.querySelector("#installAppBtn");
const hideSidebarBtnEl = document.querySelector("#hideSidebarBtn");
const showSidebarBtnEl = document.querySelector("#showSidebarBtn");
const saveBtnEl = document.querySelector("#saveBtn");
const resetBtnEl = document.querySelector("#resetBtn");
const openEditorBtnEl = document.querySelector("#openEditorBtn");
const timeValueEls = [daysEl, hoursEl, minutesEl, secondsEl];
const insightCardEl = document.querySelector("#insightCard");
const displaySettingsSummaryEl = document.querySelector("#displaySettingsSummary");
const displayToggleEls = Array.from(document.querySelectorAll(".display-toggle-input"));

const anniversaryTypeGroupEl = document.querySelector("#anniversaryTypeGroup");
const anniversaryTypeChipEls = Array.from(document.querySelectorAll(".type-chip"));
const anniversaryListEl = document.querySelector("#anniversaryList");
const anniversaryListSummaryEl = document.querySelector("#anniversaryListSummary");
const anniversaryNameEl = document.querySelector("#anniversaryName");
const anniversaryDateEl = document.querySelector("#anniversaryDate");
const saveAnniversaryBtnEl = document.querySelector("#saveAnniversaryBtn");
const openAnniversaryBtnEl = document.querySelector("#openAnniversaryBtn");
const resetAnniversaryBtnEl = document.querySelector("#resetAnniversaryBtn");
const anniversaryTypeTextEl = document.querySelector("#anniversaryTypeText");
const anniversaryNameTextEl = document.querySelector("#anniversaryNameText");
const anniversaryDateTextEl = document.querySelector("#anniversaryDateText");
const anniversaryDaysEl = document.querySelector("#anniversaryDays");
const anniversaryDaysLabelEl = document.querySelector("#anniversaryDaysLabel");
const anniversaryStatusTextEl = document.querySelector("#anniversaryStatusText");
const anniversaryPanelEl = document.querySelector("#anniversaryPanel");
const anniversaryImageInputEl = document.querySelector("#anniversaryImageInput");
const selectAnniversaryImageBtnEl = document.querySelector("#selectAnniversaryImageBtn");
const clearAnniversaryImageBtnEl = document.querySelector("#clearAnniversaryImageBtn");
const anniversaryImagePreviewEl = document.querySelector("#anniversaryImagePreview");
const anniversaryImagePreviewTextEl = document.querySelector("#anniversaryImagePreviewText");
const anniversaryImageHintEl = document.querySelector("#anniversaryImageHint");

const lifeHeadlineEl = document.querySelector("#lifeHeadline");
const lifeSummaryTextEl = document.querySelector("#lifeSummaryText");
const lifeCountTextEl = document.querySelector("#lifeCountText");
const lifeLatestTextEl = document.querySelector("#lifeLatestText");
const lifeSearchInputEl = document.querySelector("#lifeSearchInput");
const lifeStartDateFilterEl = document.querySelector("#lifeStartDateFilter");
const lifeEndDateFilterEl = document.querySelector("#lifeEndDateFilter");
const clearLifeFiltersBtnEl = document.querySelector("#clearLifeFiltersBtn");
const lifeFilterSummaryTextEl = document.querySelector("#lifeFilterSummaryText");
const lifeTimelineEl = document.querySelector("#lifeTimeline");
const openLifeUploaderBtnEl = document.querySelector("#openLifeUploaderBtn");
const resetLifeBtnEl = document.querySelector("#resetLifeBtn");
const selectLifeImageBtnEl = document.querySelector("#selectLifeImageBtn");
const clearLifeBtnEl = document.querySelector("#clearLifeBtn");
const lifeImageInputEl = document.querySelector("#lifeImageInput");
const lifeUploadHintEl = document.querySelector("#lifeUploadHint");
const lifeUploadPreviewTextEl = document.querySelector("#lifeUploadPreviewText");
const lifeEditorCountEl = document.querySelector("#lifeEditorCount");
const lifeEditorLatestTextEl = document.querySelector("#lifeEditorLatestText");
const lifeDropzoneEl = document.querySelector("#lifeDropzone");
const lifeTitleEl = document.querySelector("#lifeTitle");
const lifeNoteEl = document.querySelector("#lifeNote");
const exportDataBtnEl = document.querySelector("#exportDataBtn");
const importDataBtnEl = document.querySelector("#importDataBtn");
const importDataInputEl = document.querySelector("#importDataInput");
const dataToolsHintEl = document.querySelector("#dataToolsHint");
const dataToolsCardEl = document.querySelector("#dataToolsCard");
const lifeLightboxEl = document.querySelector("#lifeLightbox");
const closeLifeLightboxBtnEl = document.querySelector("#closeLifeLightboxBtn");
const prevLifeLightboxBtnEl = document.querySelector("#prevLifeLightboxBtn");
const nextLifeLightboxBtnEl = document.querySelector("#nextLifeLightboxBtn");
const lifeLightboxImageEl = document.querySelector("#lifeLightboxImage");
const lifeLightboxCounterEl = document.querySelector("#lifeLightboxCounter");
const lifeLightboxTitleEl = document.querySelector("#lifeLightboxTitle");
const lifeLightboxTimeEl = document.querySelector("#lifeLightboxTime");
const lifeLightboxNoteEl = document.querySelector("#lifeLightboxNote");
const lifeLightboxFileEl = document.querySelector("#lifeLightboxFile");

const MEDIA_DB_NAME = "time-menu-media";
const MEDIA_DB_VERSION = 2;
const ANNIVERSARY_IMAGE_STORE_NAME = "images";
const ANNIVERSARY_IMAGE_KEY = "anniversary-background";
const ANNIVERSARY_IMAGE_KEY_PREFIX = "anniversary:";
const LIFE_PHOTO_STORE_NAME = "life-photos";
const MAX_IMAGE_SIZE = 8 * 1024 * 1024;
const BACKUP_KIND = "time-menu-backup";
const BACKUP_VERSION = 1;
const BACKUP_STORAGE_KEYS = [
  COUNTDOWN_STORAGE_KEY,
  ACTIVE_COUNTDOWN_STORAGE_KEY,
  COUNTDOWN_DRAFT_STORAGE_KEY,
  ANNIVERSARY_STORAGE_KEY,
  ACTIVE_ANNIVERSARY_STORAGE_KEY,
  ANNIVERSARY_DRAFT_STORAGE_KEY,
  LEGACY_COUNTDOWN_TIME_STORAGE_KEY,
  LEGACY_START_STORAGE_KEY,
  LEGACY_COUNTDOWN_DRAFT_STORAGE_KEY,
  LEGACY_ANNIVERSARY_STORAGE_KEY,
  DISPLAY_PREFERENCES_STORAGE_KEY,
];
const DAILY_QUOTES = [
  {
    text: "真正的从容，不是赶时间，而是知道自己要去哪里。",
    author: "每日一句哲理，陪你把忙碌的一天过得更有节奏。",
  },
  {
    text: "把今天认真过好，就是给明天最稳的铺垫。",
    author: "节奏不必慌张，重要的是一直向前。",
  },
  {
    text: "成熟不是一瞬间想通，而是在重复里依然保持清醒。",
    author: "愿你在琐碎中，也能守住自己的方向。",
  },
  {
    text: "生活的答案，常常藏在你愿不愿意再坚持一步里。",
    author: "再走一点点，很多事情就会慢慢展开。",
  },
  {
    text: "允许自己普通，却仍然认真发光，这本身就很了不起。",
    author: "今天也值得被温柔地完成。",
  },
];
const DISPLAY_SECTION_LABELS = {
  quote: "每日一句",
  insight: "状态提示",
  dataTools: "数据工具",
};

let currentMode = "countdown";
let countdownRecords = [];
let activeCountdownId = "";
let countdownRecord = null;
let targetTime = null;
let anniversaryRecords = [];
let activeAnniversaryId = "";
let anniversaryRecord = null;
let anniversaryTypeValue = "生日";
let anniversaryImageUrl = "";
let anniversaryDraftImageUrl = "";
let anniversaryDraftImageFile = null;
let lifeRecords = [];
let lifePhotoUrls = [];
let lifeEditingId = "";
let lifePreviewId = "";
let lifePreviewImageUrl = "";
let displayPreferences = getDefaultDisplayPreferences();
let isEditorSidebarVisible = readEditorSidebarVisibility();
let deferredInstallPrompt = null;

function pad(value) {
  return String(value).padStart(2, "0");
}

function normalizeTimeValue(value) {
  if (typeof value !== "string") return "";
  const match = value.match(/^(\d{2}):(\d{2})$/);
  if (!match) return "";

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) return "";
  return `${pad(hours)}:${pad(minutes)}`;
}

function formatTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function formatTimestamp(value) {
  const date = new Date(value);
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function getDateKey(value) {
  const date = new Date(value);
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatDayGroupLabel(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const weekdayText = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][new Date(year, month - 1, day).getDay()];
  return `${year}.${pad(month)}.${pad(day)} ${weekdayText}`;
}

function formatBackupStamp(date = new Date()) {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("Failed to read blob"));
    reader.readAsDataURL(blob);
  });
}

function dataUrlToBlob(dataUrl) {
  if (typeof dataUrl !== "string" || !dataUrl.startsWith("data:")) {
    throw new Error("Invalid data URL");
  }

  const [header, body] = dataUrl.split(",");
  if (!header || body === undefined) {
    throw new Error("Invalid data URL");
  }

  const mimeMatch = header.match(/^data:(.*?)(;base64)?$/);
  const mimeType = mimeMatch?.[1] || "application/octet-stream";

  if (header.includes(";base64")) {
    const binary = atob(body);
    const bytes = new Uint8Array(binary.length);

    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }

    return new Blob([bytes], { type: mimeType });
  }

  return new Blob([decodeURIComponent(body)], { type: mimeType });
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("Failed to read file"));
    reader.readAsText(file);
  });
}

function updateCurrentTime() {
  currentTimeTextEl.textContent = `现在时间：${formatTime(new Date())}`;
}

function setDailyQuote() {
  const now = new Date();
  const daySeed = Number(`${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`);
  const quote = DAILY_QUOTES[daySeed % DAILY_QUOTES.length];
  dailyQuoteEl.textContent = quote.text;
  quoteAuthorEl.textContent = quote.author;
}

function getDefaultDisplayPreferences() {
  return {
    quote: true,
    insight: true,
    dataTools: true,
  };
}

function normalizeDisplayPreferences(preferences) {
  return {
    quote: preferences?.quote !== false,
    insight: preferences?.insight !== false,
    dataTools: preferences?.dataTools !== false,
  };
}

function readDisplayPreferences() {
  const rawValue = localStorage.getItem(DISPLAY_PREFERENCES_STORAGE_KEY);
  if (!rawValue) {
    return getDefaultDisplayPreferences();
  }

  try {
    const parsedValue = JSON.parse(rawValue);

    if (!parsedValue || typeof parsedValue !== "object" || Array.isArray(parsedValue)) {
      throw new Error("invalid display preferences");
    }

    return normalizeDisplayPreferences(parsedValue);
  } catch {
    localStorage.removeItem(DISPLAY_PREFERENCES_STORAGE_KEY);
    return getDefaultDisplayPreferences();
  }
}

function persistDisplayPreferences(preferences = displayPreferences) {
  localStorage.setItem(DISPLAY_PREFERENCES_STORAGE_KEY, JSON.stringify(normalizeDisplayPreferences(preferences)));
}

function readEditorSidebarVisibility() {
  const rawValue = localStorage.getItem(EDITOR_SIDEBAR_VISIBILITY_STORAGE_KEY);

  if (rawValue === null) {
    return true;
  }

  if (rawValue === "true") return true;
  if (rawValue === "false") return false;

  localStorage.removeItem(EDITOR_SIDEBAR_VISIBILITY_STORAGE_KEY);
  return true;
}

function persistEditorSidebarVisibility(isVisible = isEditorSidebarVisible) {
  if (isVisible) {
    localStorage.removeItem(EDITOR_SIDEBAR_VISIBILITY_STORAGE_KEY);
    return;
  }

  localStorage.setItem(EDITOR_SIDEBAR_VISIBILITY_STORAGE_KEY, "false");
}

function isNativeAndroidApp() {
  if (!window.AndroidApp) return false;

  if (typeof window.AndroidApp.isNativeApp === "function") {
    try {
      const result = window.AndroidApp.isNativeApp();
      return result === true || result === "true";
    } catch {
      return true;
    }
  }

  return true;
}

function isStandaloneApp() {
  return window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone === true;
}

function updateInstallAppButton() {
  if (!installAppBtnEl) return;

  const canPromptInstall = Boolean(deferredInstallPrompt) && !isStandaloneApp() && !isNativeAndroidApp();
  installAppBtnEl.hidden = !canPromptInstall;
  installAppBtnEl.disabled = false;
}

async function handleInstallApp() {
  if (!deferredInstallPrompt) return;

  const promptEvent = deferredInstallPrompt;
  deferredInstallPrompt = null;
  installAppBtnEl.disabled = true;
  updateInstallAppButton();

  try {
    await promptEvent.prompt();
    await promptEvent.userChoice;
  } catch {
    installAppBtnEl.disabled = false;
  }

  updateInstallAppButton();
}

async function registerAppServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(window.location.protocol)) return;
  if (isNativeAndroidApp()) return;

  try {
    await navigator.serviceWorker.register("./sw.js", {
      scope: "./",
    });
  } catch {
    // Ignore registration failures so the core app keeps working.
  }
}

function exportBackupWithAndroidBridge(fileName, content) {
  return new Promise((resolve, reject) => {
    if (!isNativeAndroidApp() || typeof window.AndroidApp?.saveBackupFile !== "function") {
      reject(new Error("当前环境不支持 Android 原生导出。"));
      return;
    }

    let timeoutId = 0;

    const cleanup = () => {
      window.removeEventListener(ANDROID_BACKUP_EVENT_NAME, handleResult);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };

    const handleResult = (event) => {
      const detail = event.detail || {};
      cleanup();

      if (detail.status === "saved") {
        resolve(detail);
        return;
      }

      reject(new Error(detail.message || "备份文件导出失败了。"));
    };

    window.addEventListener(ANDROID_BACKUP_EVENT_NAME, handleResult);
    timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error("等待 Android 保存结果超时了，请稍后再试。"));
    }, 60000);

    try {
      const started = window.AndroidApp.saveBackupFile(fileName, content, "application/json");
      if (started === false || started === "false") {
        cleanup();
        reject(new Error("未能打开 Android 保存面板。"));
      }
    } catch {
      cleanup();
      reject(new Error("调用 Android 导出功能失败了。"));
    }
  });
}

function updateDisplaySettingsSummary(preferences = displayPreferences) {
  const hiddenLabels = Object.entries(preferences)
    .filter(([, visible]) => !visible)
    .map(([section]) => DISPLAY_SECTION_LABELS[section] || section);

  if (!hiddenLabels.length) {
    displaySettingsSummaryEl.textContent = "当前全部显示";
    return;
  }

  if (hiddenLabels.length === 1) {
    displaySettingsSummaryEl.textContent = `已隐藏：${hiddenLabels[0]}`;
    return;
  }

  displaySettingsSummaryEl.textContent = `已隐藏 ${hiddenLabels.length} 项`;
}

function applyDisplayPreferences(preferences = displayPreferences) {
  displayPreferences = normalizeDisplayPreferences(preferences);

  const sectionElements = {
    quote: quoteCardEl,
    insight: insightCardEl,
    dataTools: dataToolsCardEl,
  };

  Object.entries(sectionElements).forEach(([section, element]) => {
    const visible = displayPreferences[section] !== false;
    element.classList.toggle("is-hidden-by-choice", !visible);
    element.setAttribute("aria-hidden", String(!visible));
  });

  displayToggleEls.forEach((input) => {
    const checked = displayPreferences[input.dataset.section] !== false;
    input.checked = checked;
    input.closest(".display-toggle")?.classList.toggle("is-off", !checked);
  });

  updateDisplaySettingsSummary(displayPreferences);
}

function applyEditorSidebarVisibility(isVisible = isEditorSidebarVisible) {
  isEditorSidebarVisible = isVisible !== false;

  appShellEl.classList.toggle("is-sidebar-collapsed", !isEditorSidebarVisible);
  editorCardEl.hidden = !isEditorSidebarVisible;
  editorCardEl.setAttribute("aria-hidden", String(!isEditorSidebarVisible));
  hideSidebarBtnEl.setAttribute("aria-expanded", String(isEditorSidebarVisible));
  showSidebarBtnEl.setAttribute("aria-expanded", String(isEditorSidebarVisible));
  showSidebarBtnEl.hidden = isEditorSidebarVisible;
}

function setEditorSidebarVisibility(isVisible, options = {}) {
  const { focusTarget = null, onVisible = null, shouldScroll = false } = options;

  isEditorSidebarVisible = isVisible !== false;
  persistEditorSidebarVisibility(isEditorSidebarVisible);
  applyEditorSidebarVisibility(isEditorSidebarVisible);

  if (!isEditorSidebarVisible) {
    return;
  }

  window.requestAnimationFrame(() => {
    if (shouldScroll) {
      editorCardEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    if (typeof onVisible === "function") {
      onVisible();
    }

    if (focusTarget?.focus) {
      focusTarget.focus();
    }
  });
}

function ensureEditorSidebarVisible(options = {}) {
  if (isEditorSidebarVisible) {
    if (typeof options.onVisible === "function") {
      options.onVisible();
    }

    if (options.focusTarget?.focus) {
      options.focusTarget.focus();
    }

    return;
  }

  setEditorSidebarVisibility(true, {
    ...options,
    shouldScroll: true,
  });
}

function handleDisplayPreferenceChange(event) {
  const input = event.target.closest(".display-toggle-input");
  if (!input) return;

  const section = input.dataset.section;
  if (!section || !(section in DISPLAY_SECTION_LABELS)) return;

  displayPreferences = {
    ...displayPreferences,
    [section]: input.checked,
  };
  persistDisplayPreferences(displayPreferences);
  applyDisplayPreferences(displayPreferences);
}

function normalizeDateTimeValue(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) {
    return "";
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : value;
}

function toInputDateTimeValue(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function createRecordId(prefix) {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

function getAnniversaryImageKey(id) {
  return `${ANNIVERSARY_IMAGE_KEY_PREFIX}${id}`;
}

function formatCounterValue(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function buildTargetDate(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  return target;
}

function normalizeCountdownRecord(record) {
  if (!record?.id || !record?.name) return null;

  const targetAt = Number(record.targetAt);
  const createdAt = Number(record.createdAt) || targetAt;
  const name = String(record.name).trim();

  if (!name || !Number.isFinite(targetAt)) return null;

  return {
    id: String(record.id),
    name,
    targetAt,
    createdAt,
  };
}

function normalizeAnniversaryRecord(record) {
  if (!record?.id || !record?.type || !record?.name) return null;

  const date = normalizeDateInput(record.date);
  const createdAt = Number(record.createdAt) || Date.now();
  const name = String(record.name).trim();

  if (!date || !name) return null;

  return {
    id: String(record.id),
    type: String(record.type),
    name,
    date,
    createdAt,
  };
}

function readRecordsFromStorage(key, normalizer) {
  const rawValue = localStorage.getItem(key);

  if (!rawValue) return [];

  try {
    const parsedValue = JSON.parse(rawValue);
    if (!Array.isArray(parsedValue)) {
      throw new Error("invalid records");
    }

    return parsedValue.map(normalizer).filter(Boolean);
  } catch {
    localStorage.removeItem(key);
    return [];
  }
}

function persistCountdowns(records = countdownRecords) {
  localStorage.setItem(COUNTDOWN_STORAGE_KEY, JSON.stringify(records));
}

function readSavedCountdowns() {
  return readRecordsFromStorage(COUNTDOWN_STORAGE_KEY, normalizeCountdownRecord);
}

function persistActiveCountdownId(id) {
  if (!id) {
    localStorage.removeItem(ACTIVE_COUNTDOWN_STORAGE_KEY);
    return;
  }

  localStorage.setItem(ACTIVE_COUNTDOWN_STORAGE_KEY, id);
}

function readActiveCountdownId() {
  return localStorage.getItem(ACTIVE_COUNTDOWN_STORAGE_KEY) || "";
}

function persistCountdownDraft(name = countdownNameEl.value, target = countdownTargetEl.value) {
  if (!name && !target) {
    localStorage.removeItem(COUNTDOWN_DRAFT_STORAGE_KEY);
    return;
  }

  localStorage.setItem(
    COUNTDOWN_DRAFT_STORAGE_KEY,
    JSON.stringify({
      name,
      target,
    })
  );
}

function readCountdownDraft() {
  const rawDraft = localStorage.getItem(COUNTDOWN_DRAFT_STORAGE_KEY);

  if (rawDraft) {
    try {
      const parsedDraft = JSON.parse(rawDraft);
      return {
        name: typeof parsedDraft.name === "string" ? parsedDraft.name : "",
        target: normalizeDateTimeValue(parsedDraft.target),
      };
    } catch {
      localStorage.removeItem(COUNTDOWN_DRAFT_STORAGE_KEY);
    }
  }

  const rawLegacyDraft = localStorage.getItem(LEGACY_COUNTDOWN_DRAFT_STORAGE_KEY);
  if (!rawLegacyDraft) {
    return {
      name: "",
      target: "",
    };
  }

  try {
    const parsedDraft = JSON.parse(rawLegacyDraft);
    const endTime = normalizeTimeValue(parsedDraft.endTime);

    return {
      name: "",
      target: endTime ? toInputDateTimeValue(buildTargetDate(endTime)) : "",
    };
  } catch {
    localStorage.removeItem(LEGACY_COUNTDOWN_DRAFT_STORAGE_KEY);
    return {
      name: "",
      target: "",
    };
  }
}

function persistAnniversaries(records = anniversaryRecords) {
  localStorage.setItem(ANNIVERSARY_STORAGE_KEY, JSON.stringify(records));
}

function readSavedAnniversaries() {
  return readRecordsFromStorage(ANNIVERSARY_STORAGE_KEY, normalizeAnniversaryRecord);
}

function persistActiveAnniversaryId(id) {
  if (!id) {
    localStorage.removeItem(ACTIVE_ANNIVERSARY_STORAGE_KEY);
    return;
  }

  localStorage.setItem(ACTIVE_ANNIVERSARY_STORAGE_KEY, id);
}

function readActiveAnniversaryId() {
  return localStorage.getItem(ACTIVE_ANNIVERSARY_STORAGE_KEY) || "";
}

function persistAnniversaryDraft(type = anniversaryTypeValue, name = anniversaryNameEl.value, date = anniversaryDateEl.value) {
  if (!type && !name && !date) {
    localStorage.removeItem(ANNIVERSARY_DRAFT_STORAGE_KEY);
    return;
  }

  localStorage.setItem(
    ANNIVERSARY_DRAFT_STORAGE_KEY,
    JSON.stringify({
      type,
      name,
      date,
    })
  );
}

function readAnniversaryDraft() {
  const rawDraft = localStorage.getItem(ANNIVERSARY_DRAFT_STORAGE_KEY);

  if (!rawDraft) {
    return {
      type: "生日",
      name: "",
      date: "",
    };
  }

  try {
    const parsedDraft = JSON.parse(rawDraft);

    return {
      type: typeof parsedDraft.type === "string" ? parsedDraft.type : "生日",
      name: typeof parsedDraft.name === "string" ? parsedDraft.name : "",
      date: normalizeDateInput(parsedDraft.date),
    };
  } catch {
    localStorage.removeItem(ANNIVERSARY_DRAFT_STORAGE_KEY);
    return {
      type: "生日",
      name: "",
      date: "",
    };
  }
}

function setDisplay(days, hours, minutes, seconds) {
  const nextDisplay = [
    formatCounterValue(days),
    formatCounterValue(hours),
    formatCounterValue(minutes),
    formatCounterValue(seconds),
  ];

  timeValueEls.forEach((element, index) => {
    if (element.textContent !== nextDisplay[index]) {
      element.textContent = nextDisplay[index];
      element.classList.remove("tick-pop");
      void element.offsetWidth;
      element.classList.add("tick-pop");
    }
  });
}

function setStatus(message, finished = false) {
  statusTextEl.textContent = message;
  countdownPanelEl.classList.toggle("is-finished", finished);
}

function setCountdownMeta(targetLabel, stateLabel) {
  countdownMetaTargetEl.textContent = targetLabel;
  countdownMetaStateEl.textContent = stateLabel;
}

function getInsightMessage(record = countdownRecord, now = Date.now()) {
  if (!record) {
    return "先添加一个未来节点，页面会自动切到当前查看的那一条倒计时。";
  }

  const diff = record.targetAt - now;

  if (diff <= 0) {
    return "这个倒计时已经到点了，可以把它留着纪念，或者切换到下一个目标。";
  }

  const hoursRemaining = diff / 3600000;

  if (hoursRemaining >= 24 * 30) {
    return "还在较长的期待周期里，先把日子过好，时间会慢慢靠近它。";
  }

  if (hoursRemaining >= 24 * 7) {
    return "已经进入按周计算的阶段，适合开始做一些准备了。";
  }

  if (hoursRemaining >= 24) {
    return "目标已经不远了，按天推进会更有踏实感。";
  }

  if (hoursRemaining >= 1) {
    return "已经进入最后一天，剩下的时间正在一点点逼近。";
  }

  return "最后这一小段时间很珍贵，很快就会抵达这一刻。";
}

function clearCountdownStorage() {
  localStorage.removeItem(COUNTDOWN_STORAGE_KEY);
  localStorage.removeItem(ACTIVE_COUNTDOWN_STORAGE_KEY);
  localStorage.removeItem(COUNTDOWN_DRAFT_STORAGE_KEY);
  localStorage.removeItem(LEGACY_COUNTDOWN_TIME_STORAGE_KEY);
  localStorage.removeItem(LEGACY_START_STORAGE_KEY);
  localStorage.removeItem(LEGACY_COUNTDOWN_DRAFT_STORAGE_KEY);
}

function clearAnniversaryStorage() {
  localStorage.removeItem(ANNIVERSARY_STORAGE_KEY);
  localStorage.removeItem(ACTIVE_ANNIVERSARY_STORAGE_KEY);
  localStorage.removeItem(ANNIVERSARY_DRAFT_STORAGE_KEY);
  localStorage.removeItem(LEGACY_ANNIVERSARY_STORAGE_KEY);
}

function setAnniversaryType(value) {
  anniversaryTypeValue = value;
  anniversaryTypeChipEls.forEach((chip) => {
    const active = chip.dataset.type === value;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-checked", String(active));
  });
}

function setAnniversaryImageHint(message) {
  anniversaryImageHintEl.textContent = message;
}

function setLifeUploadHint(message) {
  lifeUploadHintEl.textContent = message;
}

function setDataToolsHint(message) {
  dataToolsHintEl.textContent = message;
}

function setDataToolsBusy(isBusy) {
  exportDataBtnEl.disabled = isBusy;
  importDataBtnEl.disabled = isBusy;
}

function revokeAnniversaryImageUrl() {
  if (!anniversaryImageUrl) return;
  URL.revokeObjectURL(anniversaryImageUrl);
  anniversaryImageUrl = "";
}

function revokeAnniversaryDraftImageUrl() {
  if (!anniversaryDraftImageUrl) return;
  URL.revokeObjectURL(anniversaryDraftImageUrl);
  anniversaryDraftImageUrl = "";
}

function revokeLifePhotoUrls() {
  lifePhotoUrls.forEach((url) => URL.revokeObjectURL(url));
  lifePhotoUrls = [];
}

function revokeLifePreviewImageUrl() {
  if (!lifePreviewImageUrl) return;
  URL.revokeObjectURL(lifePreviewImageUrl);
  lifePreviewImageUrl = "";
}

function applyAnniversaryImage(record) {
  revokeAnniversaryImageUrl();

  if (!record?.blob) {
    anniversaryPanelEl.classList.remove("has-image");
    anniversaryPanelEl.style.removeProperty("--anniversary-cover");
    return;
  }

  anniversaryImageUrl = URL.createObjectURL(record.blob);
  anniversaryPanelEl.style.setProperty("--anniversary-cover", `url("${anniversaryImageUrl}")`);
  anniversaryPanelEl.classList.add("has-image");
}

function applyAnniversaryDraftPreview(record) {
  revokeAnniversaryDraftImageUrl();

  if (!record?.blob) {
    anniversaryImagePreviewEl.classList.remove("has-image");
    anniversaryImagePreviewEl.style.removeProperty("--anniversary-cover");
    anniversaryImagePreviewTextEl.textContent = "未选择背景图";
    clearAnniversaryImageBtnEl.disabled = !anniversaryDraftImageFile;
    setAnniversaryImageHint("可选，不上传时会使用默认纪念日卡片样式。");
    return;
  }

  anniversaryDraftImageUrl = URL.createObjectURL(record.blob);
  anniversaryImagePreviewEl.style.setProperty("--anniversary-cover", `url("${anniversaryDraftImageUrl}")`);
  anniversaryImagePreviewEl.classList.add("has-image");
  anniversaryImagePreviewTextEl.textContent = record.name ? `待保存背景：${record.name}` : "已选择背景图";
  clearAnniversaryImageBtnEl.disabled = false;
  setAnniversaryImageHint("这张图片会跟随这次新增的纪念日一起保存。");
}

function resetAnniversaryDraftImage() {
  anniversaryDraftImageFile = null;
  anniversaryImageInputEl.value = "";
  applyAnniversaryDraftPreview(null);
}

function normalizeLifeRecord(record) {
  if (!record?.id || !record?.blob) return null;

  const uploadedAt = Number(record.uploadedAt);
  if (!Number.isFinite(uploadedAt)) return null;

  return {
    id: String(record.id),
    blob: record.blob,
    name: typeof record.name === "string" ? record.name : "",
    title: typeof record.title === "string" ? record.title : "",
    note: typeof record.note === "string" ? record.note : "",
    uploadedAt,
  };
}

function getLifeInsightMessage() {
  if (!lifeRecords.length) {
    return "先上传一张照片，时间线就会从这一刻开始生长。";
  }

  if (lifeRecords.length === 1) {
    return "第一张照片已经放进时间线里，接下来每一次上传都会把这条生活线继续延长。";
  }

  const latestRecord = lifeRecords[lifeRecords.length - 1];
  return `已经记录 ${lifeRecords.length} 个生活节点，最近一次上传在 ${formatTimestamp(latestRecord.uploadedAt)}。`;
}

function updateLifeComposerPreview() {
  const titleValue = lifeTitleEl.value.trim();
  const noteValue = lifeNoteEl.value.trim();

  if (titleValue && noteValue) {
    lifeUploadPreviewTextEl.textContent = `会以“${titleValue}”作为标题，并附上这段备注：${noteValue}`;
    return;
  }

  if (titleValue) {
    lifeUploadPreviewTextEl.textContent = `这组照片会以“${titleValue}”的标题接到时间线上。`;
    return;
  }

  if (noteValue) {
    lifeUploadPreviewTextEl.textContent = `这段文字会跟着照片一起保存：${noteValue}`;
    return;
  }

  lifeUploadPreviewTextEl.textContent = "每张照片都会带上上传时刻，像日记一样被串联起来。";
}

function normalizeDateInput(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : "";
}

function getLifeFilters() {
  return {
    query: lifeSearchInputEl.value.trim().toLowerCase(),
    startDate: normalizeDateInput(lifeStartDateFilterEl.value),
    endDate: normalizeDateInput(lifeEndDateFilterEl.value),
  };
}

function hasActiveLifeFilters(filters = getLifeFilters()) {
  return Boolean(filters.query || filters.startDate || filters.endDate);
}

function hasInvalidLifeFilterRange(filters = getLifeFilters()) {
  return Boolean(filters.startDate && filters.endDate && filters.startDate > filters.endDate);
}

function buildLifeSearchHaystack(record) {
  const dateKey = getDateKey(record.uploadedAt);

  return [
    record.title,
    record.note,
    record.name,
    formatTimestamp(record.uploadedAt),
    dateKey,
    formatDayGroupLabel(dateKey),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function getFilteredLifeRecords(filters = getLifeFilters()) {
  if (hasInvalidLifeFilterRange(filters)) {
    return [];
  }

  return lifeRecords.filter((record) => {
    const recordDate = getDateKey(record.uploadedAt);

    if (filters.startDate && recordDate < filters.startDate) return false;
    if (filters.endDate && recordDate > filters.endDate) return false;
    if (filters.query && !buildLifeSearchHaystack(record).includes(filters.query)) return false;

    return true;
  });
}

function resetLifeFilters(shouldRender = true) {
  lifeSearchInputEl.value = "";
  lifeStartDateFilterEl.value = "";
  lifeEndDateFilterEl.value = "";

  if (shouldRender) {
    renderLifeTimeline();
  }
}

function setLifeDropzoneActive(active) {
  lifeDropzoneEl.classList.toggle("is-dragover", active);
}

function getLifeRecordById(id) {
  return lifeRecords.find((record) => record.id === id) || null;
}

function getLifeRecordIndex(id, records = lifeRecords) {
  return records.findIndex((record) => record.id === id);
}

function groupLifeRecordsByDay(records) {
  const groups = [];
  let currentGroup = null;

  records.forEach((record) => {
    const dateKey = getDateKey(record.uploadedAt);

    if (!currentGroup || currentGroup.dateKey !== dateKey) {
      currentGroup = {
        dateKey,
        label: formatDayGroupLabel(dateKey),
        records: [],
      };
      groups.push(currentGroup);
    }

    currentGroup.records.push(record);
  });

  return groups;
}

function createLifePhotoId(seed, index) {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `life-${seed}-${index}-${Math.random().toString(16).slice(2, 10)}`;
}

function syncLifeLightbox() {
  const previewRecords = getFilteredLifeRecords();
  const previewIndex = getLifeRecordIndex(lifePreviewId, previewRecords);
  const previewRecord = previewIndex >= 0 ? previewRecords[previewIndex] : null;

  if (!previewRecord) {
    closeLifeLightbox();
    return;
  }

  revokeLifePreviewImageUrl();
  lifePreviewImageUrl = URL.createObjectURL(previewRecord.blob);
  lifeLightboxImageEl.src = lifePreviewImageUrl;
  lifeLightboxImageEl.alt = previewRecord.title || previewRecord.name || "点滴生活大图预览";
  lifeLightboxCounterEl.textContent = `第 ${pad(previewIndex + 1)} 张 / 共 ${previewRecords.length} 张`;
  lifeLightboxTitleEl.textContent = previewRecord.title || previewRecord.name || "未命名照片";
  lifeLightboxTimeEl.textContent = formatTimestamp(previewRecord.uploadedAt);
  lifeLightboxNoteEl.textContent = previewRecord.note || "这张照片还没有备注。";
  lifeLightboxFileEl.textContent = previewRecord.name ? `原图：${previewRecord.name}` : "原图名称未记录";
  prevLifeLightboxBtnEl.disabled = previewIndex <= 0;
  nextLifeLightboxBtnEl.disabled = previewIndex >= previewRecords.length - 1;
}

function openLifeLightbox(recordId) {
  if (!getLifeRecordById(recordId)) return;

  lifePreviewId = recordId;
  lifeLightboxEl.classList.remove("is-hidden");
  lifeLightboxEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
  syncLifeLightbox();
  closeLifeLightboxBtnEl.focus();
}

function closeLifeLightbox() {
  lifePreviewId = "";
  revokeLifePreviewImageUrl();
  lifeLightboxImageEl.removeAttribute("src");
  lifeLightboxEl.classList.add("is-hidden");
  lifeLightboxEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-modal-open");
}

function moveLifeLightbox(direction) {
  if (!lifePreviewId) return;

  const previewRecords = getFilteredLifeRecords();
  const currentIndex = getLifeRecordIndex(lifePreviewId, previewRecords);
  if (currentIndex < 0) {
    closeLifeLightbox();
    return;
  }

  const nextRecord = previewRecords[currentIndex + direction];
  if (!nextRecord) return;

  lifePreviewId = nextRecord.id;
  syncLifeLightbox();
}

function renderLifeTimeline() {
  revokeLifePhotoUrls();

  const filters = getLifeFilters();
  const activeFilters = hasActiveLifeFilters(filters);
  const invalidRange = hasInvalidLifeFilterRange(filters);
  const filteredRecords = getFilteredLifeRecords(filters);
  const latestOverallRecord = lifeRecords.length ? lifeRecords[lifeRecords.length - 1] : null;
  const latestVisibleRecord = filteredRecords.length ? filteredRecords[filteredRecords.length - 1] : null;

  if (lifePreviewId) {
    if (getLifeRecordIndex(lifePreviewId, filteredRecords) < 0) {
      closeLifeLightbox();
    } else {
      syncLifeLightbox();
    }
  }

  lifeCountTextEl.textContent = activeFilters ? `${filteredRecords.length} / ${lifeRecords.length} 张` : `${lifeRecords.length} 张`;
  lifeLatestTextEl.textContent = latestVisibleRecord
    ? formatTimestamp(latestVisibleRecord.uploadedAt)
    : activeFilters
      ? "无匹配结果"
      : "等待记录";
  lifeEditorCountEl.textContent = `${lifeRecords.length} 张`;
  lifeEditorLatestTextEl.textContent = latestOverallRecord ? formatTimestamp(latestOverallRecord.uploadedAt) : "等待上传";
  clearLifeFiltersBtnEl.disabled = !activeFilters;

  if (!lifeRecords.length) {
    lifeHeadlineEl.textContent = "还没有生活照片";
    lifeSummaryTextEl.textContent = "上传照片后，系统会自动记录上传时间，并沿着时间线把日常慢慢串起来。";
    lifeFilterSummaryTextEl.textContent = "上传后可按标题、备注或日期来查找记录。";
    lifeTimelineEl.classList.add("is-empty");
    lifeTimelineEl.innerHTML = `
      <article class="life-empty-state">
        <p class="life-empty-title">时间线还没有开始</p>
        <p class="life-empty-text">选一张喜欢的照片，上传的那一刻就会成为这条生活线上的新节点。</p>
      </article>
    `;
    updateLifeComposerPreview();
    return;
  }

  if (invalidRange) {
    lifeHeadlineEl.textContent = "日期范围需要重新调整";
    lifeSummaryTextEl.textContent = "开始日期需要早于结束日期，调整后时间线会重新显示匹配结果。";
    lifeFilterSummaryTextEl.textContent = "当前日期范围无效，请检查开始日期和结束日期。";
  } else if (activeFilters) {
    if (filteredRecords.length) {
      lifeHeadlineEl.textContent = `筛选到 ${filteredRecords.length} 张生活照片`;
      lifeSummaryTextEl.textContent = `当前条件下最近一张上传于 ${formatTimestamp(filteredRecords[filteredRecords.length - 1].uploadedAt)}。`;
      lifeFilterSummaryTextEl.textContent = `当前筛选到 ${filteredRecords.length} / ${lifeRecords.length} 张记录。`;
    } else {
      lifeHeadlineEl.textContent = "没有找到匹配的生活照片";
      lifeSummaryTextEl.textContent = "可以换一个关键词，或放宽日期范围再试试。";
      lifeFilterSummaryTextEl.textContent = `当前筛选没有命中记录，总共保存了 ${lifeRecords.length} 张照片。`;
    }
  } else {
    const latestText = latestOverallRecord ? formatTimestamp(latestOverallRecord.uploadedAt) : "等待记录";
    lifeHeadlineEl.textContent = `已经串起 ${lifeRecords.length} 张生活照片`;
    lifeSummaryTextEl.textContent = `最近一次上传在 ${latestText}，下一张会继续接在这条线后面。`;
    lifeFilterSummaryTextEl.textContent = `当前显示全部 ${lifeRecords.length} 张记录。`;
  }

  lifeTimelineEl.classList.remove("is-empty");
  lifeTimelineEl.innerHTML = "";

  const fragment = document.createDocumentFragment();
  let entryNumber = 0;
  const groupedRecords = groupLifeRecordsByDay(filteredRecords);

  if (!groupedRecords.length) {
    lifeTimelineEl.classList.add("is-empty");
    lifeTimelineEl.innerHTML = `
      <article class="life-empty-state">
        <p class="life-empty-title">${invalidRange ? "日期范围无效" : "没有找到匹配结果"}</p>
        <p class="life-empty-text">${invalidRange ? "把开始日期调整到结束日期之前，时间线就会重新显示。" : "试试更短的关键词，或者清空筛选后查看全部记录。"}</p>
      </article>
    `;
    updateLifeComposerPreview();
    return;
  }

  groupedRecords.forEach((group) => {
    const groupEl = document.createElement("section");
    groupEl.className = "life-group";

    const groupHeadEl = document.createElement("div");
    groupHeadEl.className = "life-group-head";

    const groupTitleEl = document.createElement("p");
    groupTitleEl.className = "life-group-title";
    groupTitleEl.textContent = group.label;

    const groupMetaEl = document.createElement("p");
    groupMetaEl.className = "life-group-meta";
    groupMetaEl.textContent = `${group.records.length} 条记录`;

    groupHeadEl.append(groupTitleEl, groupMetaEl);

    const groupListEl = document.createElement("div");
    groupListEl.className = "life-group-list";

    group.records.forEach((record) => {
      entryNumber += 1;
      const entryEl = document.createElement("article");
      entryEl.className = "life-entry";

      const axisEl = document.createElement("div");
      axisEl.className = "life-entry-axis";

      const nodeEl = document.createElement("span");
      nodeEl.className = "life-entry-node";
      nodeEl.setAttribute("aria-hidden", "true");
      axisEl.appendChild(nodeEl);

      const contentEl = document.createElement("div");
      contentEl.className = "life-entry-content";

      const timeEl = document.createElement("p");
      timeEl.className = "life-entry-time";
      timeEl.textContent = formatTimestamp(record.uploadedAt);

      const cardEl = document.createElement("div");
      cardEl.className = "life-entry-card";

      const imageEl = document.createElement("img");
      imageEl.className = "life-entry-image";
      imageEl.loading = "lazy";
      const displayName = record.title || record.name;
      const imageWrapEl = document.createElement("button");
      imageWrapEl.className = "life-entry-image-wrap life-entry-preview";
      imageWrapEl.type = "button";
      imageWrapEl.dataset.id = record.id;
      imageWrapEl.setAttribute("aria-label", `查看${displayName || `第 ${entryNumber} 张`}大图`);
      imageEl.alt = displayName ? `点滴生活照片：${displayName}` : `点滴生活照片 ${entryNumber}`;

      const imageUrl = URL.createObjectURL(record.blob);
      lifePhotoUrls.push(imageUrl);
      imageEl.src = imageUrl;
      imageWrapEl.appendChild(imageEl);

      const metaEl = document.createElement("div");
      metaEl.className = "life-entry-meta";

      const metaCopyEl = document.createElement("div");
      metaCopyEl.className = "life-entry-copy";

      const indexEl = document.createElement("p");
      indexEl.className = "life-entry-index";
      indexEl.textContent = `第 ${pad(entryNumber)} 张`;

      const titleEl = document.createElement("p");
      titleEl.className = "life-entry-name";
      titleEl.textContent = record.title || record.name || "未命名照片";

      metaCopyEl.append(indexEl, titleEl);

      if (record.note) {
        const noteEl = document.createElement("p");
        noteEl.className = "life-entry-note";
        noteEl.textContent = record.note;
        metaCopyEl.appendChild(noteEl);
      }

      if (record.title && record.name && record.title !== record.name) {
        const fileNameEl = document.createElement("p");
        fileNameEl.className = "life-entry-file";
        fileNameEl.textContent = `原图：${record.name}`;
        metaCopyEl.appendChild(fileNameEl);
      }

      const actionsEl = document.createElement("div");
      actionsEl.className = "life-entry-actions";

      const editButtonEl = document.createElement("button");
      editButtonEl.className = "ghost-btn life-entry-edit";
      editButtonEl.type = "button";
      editButtonEl.dataset.id = record.id;
      editButtonEl.textContent = "编辑备注";

      const deleteButtonEl = document.createElement("button");
      deleteButtonEl.className = "quick-btn life-entry-delete";
      deleteButtonEl.type = "button";
      deleteButtonEl.dataset.id = record.id;
      deleteButtonEl.textContent = "移除";

      actionsEl.append(editButtonEl, deleteButtonEl);
      metaEl.append(metaCopyEl, actionsEl);
      cardEl.append(imageWrapEl, metaEl);

      if (lifeEditingId === record.id) {
        const editorEl = document.createElement("div");
        editorEl.className = "life-entry-editor";
        editorEl.dataset.id = record.id;

        const editorTitleWrapEl = document.createElement("label");
        editorTitleWrapEl.className = "time-input-wrap life-entry-field";

        const editorTitleLabelEl = document.createElement("span");
        editorTitleLabelEl.textContent = "标题";

        const editorTitleInputEl = document.createElement("input");
        editorTitleInputEl.className = "life-entry-edit-title";
        editorTitleInputEl.type = "text";
        editorTitleInputEl.maxLength = 28;
        editorTitleInputEl.value = record.title;
        editorTitleInputEl.placeholder = "例如：周末散步";

        editorTitleWrapEl.append(editorTitleLabelEl, editorTitleInputEl);

        const editorNoteWrapEl = document.createElement("label");
        editorNoteWrapEl.className = "time-input-wrap life-entry-field";

        const editorNoteLabelEl = document.createElement("span");
        editorNoteLabelEl.textContent = "备注";

        const editorNoteInputEl = document.createElement("textarea");
        editorNoteInputEl.className = "text-area-input life-entry-edit-note";
        editorNoteInputEl.rows = 4;
        editorNoteInputEl.maxLength = 140;
        editorNoteInputEl.placeholder = "写一点当时的心情、地点或发生的小事。";
        editorNoteInputEl.value = record.note;

        editorNoteWrapEl.append(editorNoteLabelEl, editorNoteInputEl);

        const editorActionsEl = document.createElement("div");
        editorActionsEl.className = "life-entry-editor-actions";

        const saveButtonEl = document.createElement("button");
        saveButtonEl.className = "save-btn life-entry-save";
        saveButtonEl.type = "button";
        saveButtonEl.dataset.id = record.id;
        saveButtonEl.textContent = "保存";

        const cancelButtonEl = document.createElement("button");
        cancelButtonEl.className = "ghost-btn life-entry-cancel";
        cancelButtonEl.type = "button";
        cancelButtonEl.dataset.id = record.id;
        cancelButtonEl.textContent = "取消";

        editorActionsEl.append(saveButtonEl, cancelButtonEl);
        editorEl.append(editorTitleWrapEl, editorNoteWrapEl, editorActionsEl);
        cardEl.appendChild(editorEl);
      }

      contentEl.append(timeEl, cardEl);
      entryEl.append(axisEl, contentEl);
      groupListEl.appendChild(entryEl);
    });

    groupEl.append(groupHeadEl, groupListEl);
    fragment.appendChild(groupEl);
  });

  lifeTimelineEl.appendChild(fragment);
  updateLifeComposerPreview();
}

function applyLifeRecords(records) {
  lifeRecords = records
    .map(normalizeLifeRecord)
    .filter(Boolean)
    .sort((first, second) => first.uploadedAt - second.uploadedAt);

  if (lifeEditingId && !lifeRecords.some((record) => record.id === lifeEditingId)) {
    lifeEditingId = "";
  }

  if (lifePreviewId && !lifeRecords.some((record) => record.id === lifePreviewId)) {
    closeLifeLightbox();
  }

  renderLifeTimeline();

  if (currentMode === "life") {
    insightTextEl.textContent = getLifeInsightMessage();
  }

  if (lifePreviewId) {
    syncLifeLightbox();
  }
}

function openMediaDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      resolve(null);
      return;
    }

    const request = indexedDB.open(MEDIA_DB_NAME, MEDIA_DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(ANNIVERSARY_IMAGE_STORE_NAME)) {
        db.createObjectStore(ANNIVERSARY_IMAGE_STORE_NAME);
      }

      if (!db.objectStoreNames.contains(LIFE_PHOTO_STORE_NAME)) {
        db.createObjectStore(LIFE_PHOTO_STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("IndexedDB is unavailable"));
  });
}

async function readAnniversaryImageByKey(key) {
  const db = await openMediaDb();

  if (!db) {
    return null;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readonly");
    const request = transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME).get(key);

    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("Failed to read anniversary image"));
    transaction.oncomplete = () => db.close();
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to read anniversary image"));
    };
  });
}

async function readAnniversaryImage(id) {
  if (!id) return null;
  return readAnniversaryImageByKey(getAnniversaryImageKey(id));
}

async function readLegacyAnniversaryImage() {
  return readAnniversaryImageByKey(ANNIVERSARY_IMAGE_KEY);
}

async function writeAnniversaryImageRecordByKey(key, record) {
  const db = await openMediaDb();

  if (!db) {
    if (record) {
      throw new Error("IndexedDB is not supported");
    }
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readwrite");
    const store = transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME);

    if (record?.blob) {
      store.put(
        {
          blob: record.blob,
          name: record.name || "",
          updatedAt: Number.isFinite(record.updatedAt) ? record.updatedAt : Date.now(),
        },
        key
      );
    } else {
      store.delete(key);
    }

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to write anniversary image"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to write anniversary image"));
    };
  });
}

async function persistAnniversaryImage(id, file) {
  return writeAnniversaryImageRecord(id, {
    blob: file,
    name: file.name,
    updatedAt: Date.now(),
  });
}

async function removeAnniversaryImage(id) {
  return writeAnniversaryImageRecord(id, null);
}

async function writeAnniversaryImageRecord(id, record) {
  if (!id) return;
  return writeAnniversaryImageRecordByKey(getAnniversaryImageKey(id), record);
}

async function writeLegacyAnniversaryImageRecord(record) {
  return writeAnniversaryImageRecordByKey(ANNIVERSARY_IMAGE_KEY, record);
}

async function readAllAnniversaryImages() {
  const db = await openMediaDb();

  if (!db) {
    return [];
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readonly");
    const store = transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME);
    const images = [];
    const request = store.openCursor();

    request.onsuccess = () => {
      const cursor = request.result;

      if (!cursor) {
        resolve(images);
        return;
      }

      if (typeof cursor.key === "string" && cursor.key.startsWith(ANNIVERSARY_IMAGE_KEY_PREFIX)) {
        images.push({
          id: cursor.key.slice(ANNIVERSARY_IMAGE_KEY_PREFIX.length),
          ...cursor.value,
        });
      }

      cursor.continue();
    };
    request.onerror = () => reject(request.error || new Error("Failed to read anniversary images"));

    transaction.oncomplete = () => {
      db.close();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to read anniversary images"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to read anniversary images"));
    };
  });
}

async function clearAnniversaryImages() {
  const db = await openMediaDb();

  if (!db) {
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readwrite");
    const store = transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME);
    const request = store.openCursor();

    request.onsuccess = () => {
      const cursor = request.result;

      if (!cursor) {
        return;
      }

      if (typeof cursor.key === "string" && (cursor.key === ANNIVERSARY_IMAGE_KEY || cursor.key.startsWith(ANNIVERSARY_IMAGE_KEY_PREFIX))) {
        cursor.delete();
      }

      cursor.continue();
    };
    request.onerror = () => reject(request.error || new Error("Failed to clear anniversary images"));

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to clear anniversary images"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to clear anniversary images"));
    };
  });
}

async function replaceAnniversaryImageRecords(records) {
  await clearAnniversaryImages();

  if (!records.length) {
    return;
  }

  const db = await openMediaDb();

  if (!db) {
    throw new Error("IndexedDB is not supported");
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readwrite");
    const store = transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME);

    records.forEach((record) => {
      if (!record?.id || !record?.blob) return;

      store.put(
        {
          blob: record.blob,
          name: record.name || "",
          updatedAt: Number(record.updatedAt) || Date.now(),
        },
        getAnniversaryImageKey(record.id)
      );
    });

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to replace anniversary images"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to replace anniversary images"));
    };
  });
}

async function readLifePhotos() {
  const db = await openMediaDb();

  if (!db) {
    return [];
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(LIFE_PHOTO_STORE_NAME, "readonly");
    const request = transaction.objectStore(LIFE_PHOTO_STORE_NAME).getAll();

    request.onsuccess = () => resolve(Array.isArray(request.result) ? request.result : []);
    request.onerror = () => reject(request.error || new Error("Failed to read life photos"));
    transaction.oncomplete = () => db.close();
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to read life photos"));
    };
  });
}

async function persistLifePhotos(files, metadata = {}) {
  const db = await openMediaDb();

  if (!db) {
    throw new Error("IndexedDB is not supported");
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(LIFE_PHOTO_STORE_NAME, "readwrite");
    const store = transaction.objectStore(LIFE_PHOTO_STORE_NAME);
    const seed = Date.now();
    const title = typeof metadata.title === "string" ? metadata.title.trim() : "";
    const note = typeof metadata.note === "string" ? metadata.note.trim() : "";

    files.forEach((file, index) => {
      store.put({
        id: createLifePhotoId(seed, index),
        blob: file,
        name: file.name,
        title,
        note,
        uploadedAt: seed + index,
      });
    });

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to save life photos"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to save life photos"));
    };
  });
}

async function updateLifePhotoMetadata(id, metadata = {}) {
  const db = await openMediaDb();

  if (!db) {
    throw new Error("IndexedDB is not supported");
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(LIFE_PHOTO_STORE_NAME, "readwrite");
    const store = transaction.objectStore(LIFE_PHOTO_STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => {
      const existingRecord = request.result;

      if (!existingRecord) {
        reject(new Error("Life photo record not found"));
        return;
      }

      store.put({
        ...existingRecord,
        title: typeof metadata.title === "string" ? metadata.title.trim() : existingRecord.title || "",
        note: typeof metadata.note === "string" ? metadata.note.trim() : existingRecord.note || "",
      });
    };

    request.onerror = () => {
      reject(request.error || new Error("Failed to read life photo"));
    };
    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to update life photo"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to update life photo"));
    };
  });
}

async function removeLifePhoto(id) {
  const db = await openMediaDb();

  if (!db) {
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(LIFE_PHOTO_STORE_NAME, "readwrite");
    transaction.objectStore(LIFE_PHOTO_STORE_NAME).delete(id);

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to delete life photo"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to delete life photo"));
    };
  });
}

async function clearLifePhotos() {
  const db = await openMediaDb();

  if (!db) {
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(LIFE_PHOTO_STORE_NAME, "readwrite");
    transaction.objectStore(LIFE_PHOTO_STORE_NAME).clear();

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to clear life photos"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to clear life photos"));
    };
  });
}

async function replaceLifePhotoRecords(records) {
  const db = await openMediaDb();

  if (!db) {
    if (records.length) {
      throw new Error("IndexedDB is not supported");
    }
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(LIFE_PHOTO_STORE_NAME, "readwrite");
    const store = transaction.objectStore(LIFE_PHOTO_STORE_NAME);
    store.clear();

    records.forEach((record) => {
      store.put({
        id: String(record.id),
        blob: record.blob,
        name: record.name || "",
        title: record.title || "",
        note: record.note || "",
        uploadedAt: Number(record.uploadedAt) || Date.now(),
      });
    });

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to replace life photos"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to replace life photos"));
    };
  });
}

async function loadLifePhotos() {
  const records = await readLifePhotos();
  applyLifeRecords(records);
  return records;
}

function getCountdownRecordById(id) {
  return countdownRecords.find((record) => record.id === id) || null;
}

function getAnniversaryRecordById(id) {
  return anniversaryRecords.find((record) => record.id === id) || null;
}

function getSortedCountdownRecords() {
  return [...countdownRecords].sort((first, second) => first.targetAt - second.targetAt || first.createdAt - second.createdAt);
}

function getSortedAnniversaryRecords() {
  return [...anniversaryRecords].sort((first, second) => second.createdAt - first.createdAt);
}

function getCountdownDiffParts(targetAt, now = Date.now()) {
  const diffMs = targetAt - now;
  const isFinished = diffMs <= 0;
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

  return {
    diffMs,
    isFinished,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    displayDays: Math.ceil(Math.max(0, diffMs) / 86400000),
  };
}

function getCountdownValueText(record, now = Date.now()) {
  const parts = getCountdownDiffParts(record.targetAt, now);

  if (parts.isFinished) {
    return "已到时间";
  }

  if (parts.displayDays >= 1) {
    return `还有 ${parts.displayDays} 天`;
  }

  if (parts.hours >= 1) {
    return `还有 ${parts.hours} 小时`;
  }

  if (parts.minutes >= 1) {
    return `还有 ${parts.minutes} 分钟`;
  }

  return "即将抵达";
}

function getAnniversaryDiffDays(record, now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(`${record.date}T00:00:00`);
  return Math.round((today.getTime() - target.getTime()) / 86400000);
}

function getAnniversaryValueText(record, now = new Date()) {
  const diffDays = getAnniversaryDiffDays(record, now);
  return diffDays >= 0 ? `已过 ${diffDays} 天` : `还有 ${Math.abs(diffDays)} 天`;
}

function hydrateCountdownForm(draft = readCountdownDraft()) {
  countdownNameEl.value = draft.name || "";
  countdownTargetEl.value = draft.target || "";
}

function hydrateAnniversaryForm(draft = readAnniversaryDraft()) {
  setAnniversaryType(draft.type || "生日");
  anniversaryNameEl.value = draft.name || "";
  anniversaryDateEl.value = draft.date || "";
}

function syncActiveCountdownRecord() {
  const fallbackRecord = getSortedCountdownRecords()[0] || null;
  countdownRecord = getCountdownRecordById(activeCountdownId) || fallbackRecord;
  activeCountdownId = countdownRecord?.id || "";
  targetTime = countdownRecord ? new Date(countdownRecord.targetAt) : null;
  persistActiveCountdownId(activeCountdownId);
}

function syncActiveAnniversaryRecord() {
  const fallbackRecord = getSortedAnniversaryRecords()[0] || null;
  anniversaryRecord = getAnniversaryRecordById(activeAnniversaryId) || fallbackRecord;
  activeAnniversaryId = anniversaryRecord?.id || "";
  persistActiveAnniversaryId(activeAnniversaryId);
}

function renderCountdownList(now = Date.now()) {
  countdownListSummaryEl.textContent = `${countdownRecords.length} 条`;

  if (!countdownRecords.length) {
    countdownListEl.classList.add("is-empty");
    countdownListEl.innerHTML = `
      <article class="record-empty-state">
        <p class="record-empty-title">倒计时列表还是空的</p>
        <p class="record-empty-text">先添加一个未来目标，主卡片就会实时显示它的剩余时间。</p>
      </article>
    `;
    return;
  }

  countdownListEl.classList.remove("is-empty");
  countdownListEl.innerHTML = "";

  const fragment = document.createDocumentFragment();

  getSortedCountdownRecords().forEach((record) => {
    const itemEl = document.createElement("article");
    itemEl.className = `record-item${record.id === activeCountdownId ? " is-active" : ""}`;

    const mainEl = document.createElement("div");
    mainEl.className = "record-item-main";

    const copyEl = document.createElement("div");
    copyEl.className = "record-item-copy";

    const kickerEl = document.createElement("p");
    kickerEl.className = "record-item-kicker";
    kickerEl.textContent = "倒计时";

    const nameEl = document.createElement("p");
    nameEl.className = "record-item-name";
    nameEl.textContent = record.name;

    const metaEl = document.createElement("p");
    metaEl.className = "record-item-meta";
    metaEl.textContent = `目标：${formatTimestamp(record.targetAt)}`;

    const valueEl = document.createElement("p");
    valueEl.className = "record-item-value";
    valueEl.textContent = getCountdownValueText(record, now);

    copyEl.append(kickerEl, nameEl, metaEl);
    mainEl.append(copyEl, valueEl);

    const actionsEl = document.createElement("div");
    actionsEl.className = "record-item-actions";

    const selectButtonEl = document.createElement("button");
    selectButtonEl.className = "ghost-btn";
    selectButtonEl.type = "button";
    selectButtonEl.dataset.action = "select";
    selectButtonEl.dataset.id = record.id;
    selectButtonEl.textContent = record.id === activeCountdownId ? "当前查看" : "设为当前";
    selectButtonEl.disabled = record.id === activeCountdownId;

    const deleteButtonEl = document.createElement("button");
    deleteButtonEl.className = "quick-btn";
    deleteButtonEl.type = "button";
    deleteButtonEl.dataset.action = "delete";
    deleteButtonEl.dataset.id = record.id;
    deleteButtonEl.textContent = "删除";

    actionsEl.append(selectButtonEl, deleteButtonEl);
    itemEl.append(mainEl, actionsEl);
    fragment.appendChild(itemEl);
  });

  countdownListEl.appendChild(fragment);
}

function renderAnniversaryList(now = new Date()) {
  anniversaryListSummaryEl.textContent = `${anniversaryRecords.length} 条`;

  if (!anniversaryRecords.length) {
    anniversaryListEl.classList.add("is-empty");
    anniversaryListEl.innerHTML = `
      <article class="record-empty-state">
        <p class="record-empty-title">纪念日列表还没有开始</p>
        <p class="record-empty-text">添加多个重要时刻后，可以随时切换当前展示的那一条。</p>
      </article>
    `;
    return;
  }

  anniversaryListEl.classList.remove("is-empty");
  anniversaryListEl.innerHTML = "";

  const fragment = document.createDocumentFragment();

  getSortedAnniversaryRecords().forEach((record) => {
    const itemEl = document.createElement("article");
    itemEl.className = `record-item${record.id === activeAnniversaryId ? " is-active" : ""}`;

    const mainEl = document.createElement("div");
    mainEl.className = "record-item-main";

    const copyEl = document.createElement("div");
    copyEl.className = "record-item-copy";

    const kickerEl = document.createElement("p");
    kickerEl.className = "record-item-kicker";
    kickerEl.textContent = record.type;

    const nameEl = document.createElement("p");
    nameEl.className = "record-item-name";
    nameEl.textContent = record.name;

    const metaEl = document.createElement("p");
    metaEl.className = "record-item-meta";
    metaEl.textContent = `日期：${record.date}`;

    const valueEl = document.createElement("p");
    valueEl.className = "record-item-value";
    valueEl.textContent = getAnniversaryValueText(record, now);

    copyEl.append(kickerEl, nameEl, metaEl);
    mainEl.append(copyEl, valueEl);

    const actionsEl = document.createElement("div");
    actionsEl.className = "record-item-actions";

    const selectButtonEl = document.createElement("button");
    selectButtonEl.className = "ghost-btn";
    selectButtonEl.type = "button";
    selectButtonEl.dataset.action = "select";
    selectButtonEl.dataset.id = record.id;
    selectButtonEl.textContent = record.id === activeAnniversaryId ? "当前查看" : "设为当前";
    selectButtonEl.disabled = record.id === activeAnniversaryId;

    const deleteButtonEl = document.createElement("button");
    deleteButtonEl.className = "quick-btn";
    deleteButtonEl.type = "button";
    deleteButtonEl.dataset.action = "delete";
    deleteButtonEl.dataset.id = record.id;
    deleteButtonEl.textContent = "删除";

    actionsEl.append(selectButtonEl, deleteButtonEl);
    itemEl.append(mainEl, actionsEl);
    fragment.appendChild(itemEl);
  });

  anniversaryListEl.appendChild(fragment);
}

function applyCountdownIdleState() {
  countdownRecord = null;
  activeCountdownId = "";
  targetTime = null;
  countdownPanelEl.classList.remove("is-finished");
  countdownNameTextEl.textContent = "还没有添加倒计时";
  countdownTargetTextEl.textContent = "添加一个未来时间，把重要时刻提前放进期待里。";
  setCountdownMeta("等待设置", "未开始");
  setDisplay(0, 0, 0, 0);
  setStatus("可以添加旅行、生日、考试、发售日等未来节点。");
  renderCountdownList();

  if (currentMode === "countdown") {
    insightTextEl.textContent = "先添加一个未来节点，页面会自动切到当前查看的那一条倒计时。";
  }
}

function renderActiveCountdown() {
  if (!countdownRecord) {
    applyCountdownIdleState();
    return;
  }

  countdownNameTextEl.textContent = countdownRecord.name;
  countdownTargetTextEl.textContent = `目标时间：${formatTimestamp(countdownRecord.targetAt)}`;
}

function applyAnniversaryIdleState() {
  anniversaryRecord = null;
  activeAnniversaryId = "";
  anniversaryTypeTextEl.textContent = "纪念日";
  anniversaryNameTextEl.textContent = "还没有设置纪念日";
  anniversaryDateTextEl.textContent = "输入一个重要日期，开始记录它。";
  anniversaryDaysEl.textContent = "0";
  anniversaryDaysLabelEl.textContent = "已经走过";
  anniversaryStatusTextEl.textContent = "可以记录生日、恋爱纪念日、入职日或任何重要时刻。";
  applyAnniversaryImage(null);
  renderAnniversaryList();

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "可以连续添加多个纪念日，并随时切换当前展示的那一条。";
  }
}

async function renderActiveAnniversaryImage() {
  if (!anniversaryRecord) {
    applyAnniversaryImage(null);
    return;
  }

  const currentRecordId = anniversaryRecord.id;

  try {
    const imageRecord = await readAnniversaryImage(currentRecordId);

    if (anniversaryRecord?.id !== currentRecordId) {
      return;
    }

    applyAnniversaryImage(imageRecord);
  } catch {
    if (anniversaryRecord?.id === currentRecordId) {
      applyAnniversaryImage(null);
      setAnniversaryImageHint("背景图读取失败了，可以重新为新纪念日选择一张图片。");
    }
  }
}

function updateAnniversary() {
  if (!anniversaryRecord) return;

  const diffDays = getAnniversaryDiffDays(anniversaryRecord);

  if (diffDays >= 0) {
    anniversaryDaysLabelEl.textContent = "已经走过";
    anniversaryDaysEl.textContent = String(diffDays);
    anniversaryStatusTextEl.textContent = `${anniversaryRecord.name} 已经过去 ${diffDays} 天，时间把重要的事稳稳留了下来。`;
  } else {
    anniversaryDaysLabelEl.textContent = "还有";
    anniversaryDaysEl.textContent = String(Math.abs(diffDays));
    anniversaryStatusTextEl.textContent = `距离 ${anniversaryRecord.name} 还有 ${Math.abs(diffDays)} 天，值得认真期待。`;
  }
}

function renderActiveAnniversary() {
  if (!anniversaryRecord) {
    applyAnniversaryIdleState();
    return;
  }

  anniversaryTypeTextEl.textContent = anniversaryRecord.type;
  anniversaryNameTextEl.textContent = anniversaryRecord.name;
  anniversaryDateTextEl.textContent = `日期：${anniversaryRecord.date}`;
  updateAnniversary();
}

async function migrateLegacyAnniversaryIfNeeded() {
  const records = readSavedAnniversaries();

  if (records.length) {
    return records;
  }

  const rawRecord = localStorage.getItem(LEGACY_ANNIVERSARY_STORAGE_KEY);
  if (!rawRecord) {
    return [];
  }

  try {
    const parsedRecord = JSON.parse(rawRecord);
    const migratedRecord = normalizeAnniversaryRecord({
      ...parsedRecord,
      id: createRecordId("anniversary"),
      createdAt: Date.now(),
    });

    if (!migratedRecord) {
      throw new Error("invalid anniversary record");
    }

    const legacyImage = await readLegacyAnniversaryImage();

    anniversaryRecords = [migratedRecord];
    persistAnniversaries(anniversaryRecords);
    activeAnniversaryId = migratedRecord.id;
    persistActiveAnniversaryId(activeAnniversaryId);
    localStorage.removeItem(LEGACY_ANNIVERSARY_STORAGE_KEY);

    if (legacyImage?.blob) {
      await writeAnniversaryImageRecord(migratedRecord.id, legacyImage);
      await writeLegacyAnniversaryImageRecord(null);
    }

    return anniversaryRecords;
  } catch {
    localStorage.removeItem(LEGACY_ANNIVERSARY_STORAGE_KEY);
    return [];
  }
}

function migrateLegacyCountdownIfNeeded() {
  const records = readSavedCountdowns();

  if (records.length) {
    return records;
  }

  const legacyTime = normalizeTimeValue(localStorage.getItem(LEGACY_COUNTDOWN_TIME_STORAGE_KEY));
  if (!legacyTime) {
    return [];
  }

  const migratedRecord = {
    id: createRecordId("countdown"),
    name: "下班时间",
    targetAt: buildTargetDate(legacyTime).getTime(),
    createdAt: Date.now(),
  };

  countdownRecords = [migratedRecord];
  persistCountdowns(countdownRecords);
  activeCountdownId = migratedRecord.id;
  persistActiveCountdownId(activeCountdownId);
  localStorage.removeItem(LEGACY_COUNTDOWN_TIME_STORAGE_KEY);
  localStorage.removeItem(LEGACY_START_STORAGE_KEY);

  return countdownRecords;
}

async function refreshAppState() {
  displayPreferences = readDisplayPreferences();
  applyDisplayPreferences(displayPreferences);

  hydrateCountdownForm(readCountdownDraft());
  countdownRecords = readSavedCountdowns();
  if (!countdownRecords.length) {
    countdownRecords = migrateLegacyCountdownIfNeeded();
  }
  activeCountdownId = readActiveCountdownId();
  syncActiveCountdownRecord();
  renderCountdownList();

  if (countdownRecord) {
    tickCountdown();
  } else {
    applyCountdownIdleState();
  }

  hydrateAnniversaryForm(readAnniversaryDraft());
  resetAnniversaryDraftImage();
  anniversaryRecords = await migrateLegacyAnniversaryIfNeeded();
  if (!anniversaryRecords.length) {
    anniversaryRecords = readSavedAnniversaries();
  }
  activeAnniversaryId = readActiveAnniversaryId();
  syncActiveAnniversaryRecord();
  renderAnniversaryList();

  if (anniversaryRecord) {
    renderActiveAnniversary();
    await renderActiveAnniversaryImage();
  } else {
    applyAnniversaryIdleState();
  }

  lifeEditingId = "";
  resetLifeFilters(false);
  setLifeDropzoneActive(false);
  lifeTitleEl.value = "";
  lifeNoteEl.value = "";
  updateLifeComposerPreview();

  try {
    await loadLifePhotos();
  } catch {
    setLifeUploadHint("生活照片读取失败了，可以重新上传一张图片。");

    if (currentMode === "life") {
      insightTextEl.textContent = "当前浏览器里的生活时间线读取失败了，可以重新上传照片开始记录。";
    }
  }
}

async function buildBackupPayload() {
  const anniversaryImages = await readAllAnniversaryImages();
  const legacyAnniversaryImage = await readLegacyAnniversaryImage();
  const lifePhotoRecords = await readLifePhotos();

  return {
    kind: BACKUP_KIND,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    localStorage: Object.fromEntries(BACKUP_STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])),
    media: {
      anniversaryImage: legacyAnniversaryImage?.blob
        ? {
            name: legacyAnniversaryImage.name || "",
            updatedAt: Number(legacyAnniversaryImage.updatedAt) || Date.now(),
            dataUrl: await blobToDataUrl(legacyAnniversaryImage.blob),
          }
        : null,
      anniversaryImages: await Promise.all(
        anniversaryImages.map(async (record) => ({
          id: String(record.id),
          name: record.name || "",
          updatedAt: Number(record.updatedAt) || Date.now(),
          dataUrl: await blobToDataUrl(record.blob),
        }))
      ),
      lifePhotos: await Promise.all(
        lifePhotoRecords.map(async (record) => ({
          id: String(record.id),
          name: record.name || "",
          title: record.title || "",
          note: record.note || "",
          uploadedAt: Number(record.uploadedAt) || Date.now(),
          dataUrl: await blobToDataUrl(record.blob),
        }))
      ),
    },
  };
}

function validateBackupPayload(payload) {
  if (!payload || typeof payload !== "object") {
    throw new Error("备份文件内容无效。");
  }

  if (payload.kind !== BACKUP_KIND) {
    throw new Error("这不是当前应用的备份文件。");
  }

  if (payload.version !== BACKUP_VERSION) {
    throw new Error("备份文件版本暂不兼容。");
  }

  if (!payload.localStorage || typeof payload.localStorage !== "object") {
    throw new Error("备份文件缺少本地配置数据。");
  }

  if (!payload.media || typeof payload.media !== "object") {
    throw new Error("备份文件缺少媒体数据。");
  }

  return payload;
}

async function restoreBackupPayload(payload) {
  const backupPayload = validateBackupPayload(payload);

  BACKUP_STORAGE_KEYS.forEach((key) => {
    const value = backupPayload.localStorage[key];

    if (typeof value === "string") {
      localStorage.setItem(key, value);
      return;
    }

    localStorage.removeItem(key);
  });

  const anniversaryImages = Array.isArray(backupPayload.media.anniversaryImages)
    ? backupPayload.media.anniversaryImages.map((record) => ({
        id: String(record.id),
        blob: dataUrlToBlob(record.dataUrl),
        name: record.name || "",
        updatedAt: Number(record.updatedAt) || Date.now(),
      }))
    : [];

  const legacyAnniversaryImage = backupPayload.media.anniversaryImage
    ? {
        blob: dataUrlToBlob(backupPayload.media.anniversaryImage.dataUrl),
        name: backupPayload.media.anniversaryImage.name || "",
        updatedAt: Number(backupPayload.media.anniversaryImage.updatedAt) || Date.now(),
      }
    : null;

  const lifePhotoRecords = Array.isArray(backupPayload.media.lifePhotos)
    ? backupPayload.media.lifePhotos.map((record) => ({
        id: String(record.id),
        blob: dataUrlToBlob(record.dataUrl),
        name: record.name || "",
        title: record.title || "",
        note: record.note || "",
        uploadedAt: Number(record.uploadedAt) || Date.now(),
      }))
    : [];

  await replaceAnniversaryImageRecords(anniversaryImages);
  await writeLegacyAnniversaryImageRecord(legacyAnniversaryImage);
  await replaceLifePhotoRecords(lifePhotoRecords);
}

function collectLifeFiles(files) {
  const validFiles = [];
  let invalidTypeCount = 0;
  let invalidSizeCount = 0;

  files.forEach((file) => {
    if (!file.type.startsWith("image/")) {
      invalidTypeCount += 1;
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      invalidSizeCount += 1;
      return;
    }

    validFiles.push(file);
  });

  return {
    validFiles,
    invalidTypeCount,
    invalidSizeCount,
  };
}

async function addLifeFiles(files) {
  const titleValue = lifeTitleEl.value.trim();
  const noteValue = lifeNoteEl.value.trim();
  const { validFiles, invalidTypeCount, invalidSizeCount } = collectLifeFiles(files);

  if (!validFiles.length) {
    if (invalidSizeCount && invalidTypeCount) {
      setLifeUploadHint("请选择 8MB 以内的图片文件。");
      return;
    }

    if (invalidSizeCount) {
      setLifeUploadHint("图片太大了，请换成 8MB 以内的照片。");
      return;
    }

    setLifeUploadHint("请选择 JPG、PNG、WebP 等图片文件。");
    return;
  }

  setLifeUploadHint(validFiles.length > 1 ? "正在把这些照片挂上时间线..." : "正在把照片挂上时间线...");

  try {
    await persistLifePhotos(validFiles, {
      title: titleValue,
      note: noteValue,
    });
    await loadLifePhotos();
    lifeTitleEl.value = "";
    lifeNoteEl.value = "";
    updateLifeComposerPreview();

    const skippedCount = invalidTypeCount + invalidSizeCount;
    const savedMessage = `已加入 ${validFiles.length} 张照片，上传时间已自动记录。`;
    setLifeUploadHint(skippedCount ? `${savedMessage} 已跳过 ${skippedCount} 张不符合要求的文件。` : savedMessage);

    if (currentMode === "life") {
      insightTextEl.textContent = getLifeInsightMessage();
    }
  } catch {
    setLifeUploadHint("照片保存失败了，可能是图片过大或浏览器存储空间不足。");
  }
}

function setMode(mode) {
  currentMode = mode;

  const isCountdown = mode === "countdown";
  const isAnniversary = mode === "anniversary";
  const isLife = mode === "life";

  countdownTabEl.classList.toggle("is-active", isCountdown);
  anniversaryTabEl.classList.toggle("is-active", isAnniversary);
  lifeTabEl.classList.toggle("is-active", isLife);
  countdownTabEl.setAttribute("aria-selected", String(isCountdown));
  anniversaryTabEl.setAttribute("aria-selected", String(isAnniversary));
  lifeTabEl.setAttribute("aria-selected", String(isLife));

  countdownViewEl.classList.toggle("is-hidden", !isCountdown);
  anniversaryViewEl.classList.toggle("is-hidden", !isAnniversary);
  lifeViewEl.classList.toggle("is-hidden", !isLife);
  countdownEditorEl.classList.toggle("is-hidden", !isCountdown);
  anniversaryEditorEl.classList.toggle("is-hidden", !isAnniversary);
  lifeEditorEl.classList.toggle("is-hidden", !isLife);

  if (isCountdown) {
    heroEyebrowEl.textContent = "倒计时";
    heroSubtitleEl.textContent = "把旅行、生日、考试、发售日等未来节点，认真放进一个可切换的倒计时列表里。";
    editorTagEl.textContent = "倒计时设置";
    editorTitleEl.textContent = "添加一个未来倒计时";
    orbitalCoreEl.textContent = "倒计时";
    insightTextEl.textContent = countdownRecord
      ? getInsightMessage(countdownRecord)
      : "先添加一个未来节点，页面会自动切到当前查看的那一条倒计时。";
    return;
  }

  if (isAnniversary) {
    heroEyebrowEl.textContent = "纪念日";
    heroSubtitleEl.textContent = "把重要时刻留在时间里，让每一次回望都有清晰的坐标。";
    editorTagEl.textContent = "纪念设置";
    editorTitleEl.textContent = "添加一个重要时刻";
    orbitalCoreEl.textContent = "纪念日";
    insightTextEl.textContent = anniversaryRecord
      ? "当前纪念日已经展示在主卡片上，天数会随日期自动更新。"
      : "可以连续添加多个纪念日，并随时切换当前展示的那一条。";
    return;
  }

  heroEyebrowEl.textContent = "点滴生活";
  heroSubtitleEl.textContent = "上传照片后自动记下这一刻，并沿着时间线把生活串联起来。";
  editorTagEl.textContent = "生活记录";
  editorTitleEl.textContent = "把照片挂上你的生活时间线";
  orbitalCoreEl.textContent = "时间线";
  insightTextEl.textContent = getLifeInsightMessage();
}

function resetCountdown() {
  countdownRecords = [];
  clearCountdownStorage();
  hydrateCountdownForm({
    name: "",
    target: "",
  });
  applyCountdownIdleState();

  if (currentMode === "countdown") {
    insightTextEl.textContent = "倒计时列表已经清空，可以重新添加新的未来节点。";
  }
}

async function resetAnniversary() {
  anniversaryRecords = [];
  clearAnniversaryStorage();
  hydrateAnniversaryForm({
    type: "生日",
    name: "",
    date: "",
  });
  resetAnniversaryDraftImage();
  applyAnniversaryIdleState();

  try {
    await clearAnniversaryImages();
  } catch {
    setAnniversaryImageHint("纪念日背景图清除失败了，可以再试一次。");
  }

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "纪念日列表已经清空，可以重新开始记录新的重要时刻。";
  }
}

function tickCountdown() {
  if (!countdownRecord || !targetTime) {
    if (!countdownRecords.length) {
      applyCountdownIdleState();
    }
    return;
  }

  const now = Date.now();
  const parts = getCountdownDiffParts(countdownRecord.targetAt, now);
  renderActiveCountdown();
  renderCountdownList(now);

  setDisplay(parts.days, parts.hours, parts.minutes, parts.seconds);
  setCountdownMeta(formatTimestamp(countdownRecord.targetAt), getCountdownValueText(countdownRecord, now));

  if (parts.isFinished) {
    setStatus(`「${countdownRecord.name}」已经到时间了，这一刻终于来了。`, true);

    if (currentMode === "countdown") {
      insightTextEl.textContent = "这个目标已经抵达了，可以保留它做纪念，或者切换到下一条继续期待。";
    }
    return;
  }

  setStatus(`距离「${countdownRecord.name}」还有 ${parts.days} 天 ${parts.hours} 小时 ${parts.minutes} 分钟 ${parts.seconds} 秒。`);

  if (currentMode === "countdown") {
    insightTextEl.textContent = getInsightMessage(countdownRecord, now);
  }
}

function tick() {
  updateCurrentTime();
  tickCountdown();
  updateAnniversary();
}

function selectCountdown(id) {
  activeCountdownId = id;
  syncActiveCountdownRecord();
  renderCountdownList();

  if (!countdownRecord) {
    applyCountdownIdleState();
    return;
  }

  tickCountdown();
}

async function selectAnniversary(id) {
  activeAnniversaryId = id;
  syncActiveAnniversaryRecord();
  renderAnniversaryList();

  if (!anniversaryRecord) {
    applyAnniversaryIdleState();
    return;
  }

  renderActiveAnniversary();
  await renderActiveAnniversaryImage();

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "当前纪念日已经切换，天数会随着日期自动更新。";
  }
}

function handleSave() {
  const nameValue = countdownNameEl.value.trim();
  const targetValue = normalizeDateTimeValue(countdownTargetEl.value);

  if (!nameValue) {
    setStatus("请先输入倒计时名称，例如：旅行出发。");
    return;
  }

  if (!targetValue) {
    setStatus("请先选择一个未来时间。");
    return;
  }

  const targetAt = new Date(targetValue).getTime();

  if (!Number.isFinite(targetAt) || targetAt <= Date.now()) {
    setStatus("倒计时目标需要晚于当前时间。");
    return;
  }

  const nextRecord = {
    id: createRecordId("countdown"),
    name: nameValue,
    targetAt,
    createdAt: Date.now(),
  };

  countdownRecords = [...countdownRecords, nextRecord];
  persistCountdowns(countdownRecords);
  persistActiveCountdownId(nextRecord.id);
  hydrateCountdownForm({
    name: "",
    target: "",
  });
  localStorage.removeItem(COUNTDOWN_DRAFT_STORAGE_KEY);
  selectCountdown(nextRecord.id);
  setStatus(`已添加「${nextRecord.name}」，它现在已经进入倒计时列表。`);
  tick();
}

async function handleSaveAnniversary() {
  const nameValue = anniversaryNameEl.value.trim();
  const dateValue = normalizeDateInput(anniversaryDateEl.value);

  if (!nameValue) {
    anniversaryStatusTextEl.textContent = "请先输入纪念日名称，例如：和她在一起。";
    return;
  }

  if (!dateValue) {
    anniversaryStatusTextEl.textContent = "请先选择一个日期。";
    return;
  }

  const nextRecord = {
    id: createRecordId("anniversary"),
    type: anniversaryTypeValue,
    name: nameValue,
    date: dateValue,
    createdAt: Date.now(),
  };

  anniversaryRecords = [...anniversaryRecords, nextRecord];
  persistAnniversaries(anniversaryRecords);
  persistActiveAnniversaryId(nextRecord.id);

  if (anniversaryDraftImageFile) {
    try {
      await persistAnniversaryImage(nextRecord.id, anniversaryDraftImageFile);
    } catch {
      setAnniversaryImageHint("纪念日已添加，但背景图保存失败了，可以重新添加一条带图记录。");
    }
  }

  hydrateAnniversaryForm({
    type: "生日",
    name: "",
    date: "",
  });
  localStorage.removeItem(ANNIVERSARY_DRAFT_STORAGE_KEY);
  resetAnniversaryDraftImage();
  await selectAnniversary(nextRecord.id);
  anniversaryStatusTextEl.textContent = `已添加「${nextRecord.name}」，现在可以在列表里继续切换查看。`;
}

async function handleAnniversaryImageChange(event) {
  const [file] = event.target.files || [];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setAnniversaryImageHint("请选择 JPG、PNG、WebP 等图片文件。");
    return;
  }

  if (file.size > MAX_IMAGE_SIZE) {
    setAnniversaryImageHint("图片太大了，请换一张 8MB 以内的图片。");
    return;
  }

  anniversaryDraftImageFile = file;
  applyAnniversaryDraftPreview({
    blob: file,
    name: file.name,
  });
  event.target.value = "";

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "背景图已经准备好了，保存后会跟随这次新增的纪念日一起展示。";
  }
}

function handleClearAnniversaryImage() {
  resetAnniversaryDraftImage();

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "这次新增的背景图已经移除，可以重新选一张更合适的图片。";
  }
}

async function handleExportData() {
  setDataToolsBusy(true);
  setDataToolsHint(isNativeAndroidApp() ? "正在准备备份文件，并打开 Android 保存面板..." : "正在准备备份文件...");

  try {
    const payload = await buildBackupPayload();
    const backupContent = JSON.stringify(payload, null, 2);
    const backupFileName = `time-menu-backup-${formatBackupStamp()}.json`;
    const link = document.createElement("a");
    const lifePhotoCount = Array.isArray(payload.media.lifePhotos) ? payload.media.lifePhotos.length : 0;

    if (isNativeAndroidApp()) {
      await exportBackupWithAndroidBridge(backupFileName, backupContent);
      setDataToolsHint(`备份文件已保存到你选择的位置，包含 ${lifePhotoCount} 张生活照片和当前设置。`);
    } else {
      const backupBlob = new Blob([backupContent], {
        type: "application/json",
      });
      const downloadUrl = URL.createObjectURL(backupBlob);

      link.href = downloadUrl;
      link.download = backupFileName;
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.setTimeout(() => {
        URL.revokeObjectURL(downloadUrl);
      }, 0);

      setDataToolsHint(`备份文件已下载，包含 ${lifePhotoCount} 张生活照片和当前设置。`);
    }
  } catch (error) {
    setDataToolsHint(error instanceof Error ? error.message : "导出失败了，可以稍后再试一次。");
  } finally {
    setDataToolsBusy(false);
  }
}

async function handleImportDataChange(event) {
  const [file] = event.target.files || [];
  event.target.value = "";

  if (!file) return;

  setDataToolsBusy(true);
  setDataToolsHint("正在导入备份文件...");

  const modeBeforeImport = currentMode;

  try {
    const rawContent = await readFileAsText(file);
    const payload = JSON.parse(rawContent);
    await restoreBackupPayload(payload);
    await refreshAppState();
    setMode(modeBeforeImport);
    setDataToolsHint(`备份已导入完成，当前恢复了 ${lifeRecords.length} 张生活照片和已有设置。`);
  } catch (error) {
    if (error instanceof SyntaxError) {
      setDataToolsHint("导入失败了，这个文件不是有效的 JSON 备份。");
    } else {
      setDataToolsHint(error instanceof Error ? error.message : "导入失败了，请确认文件完整后再试。");
    }
  } finally {
    setDataToolsBusy(false);
  }
}

async function handleLifeImageChange(event) {
  const files = Array.from(event.target.files || []);
  event.target.value = "";

  if (!files.length) return;

  await addLifeFiles(files);
}

async function handleLifeTimelineClick(event) {
  const previewTrigger = event.target.closest(".life-entry-preview");
  if (previewTrigger) {
    const photoId = previewTrigger.dataset.id;
    if (photoId) {
      openLifeLightbox(photoId);
    }
    return;
  }

  const editButton = event.target.closest(".life-entry-edit");
  if (editButton) {
    const photoId = editButton.dataset.id;
    const record = photoId ? getLifeRecordById(photoId) : null;
    if (!record) return;

    lifeEditingId = record.id;
    renderLifeTimeline();
    const titleInput = lifeTimelineEl.querySelector(`.life-entry-editor[data-id="${record.id}"] .life-entry-edit-title`);
    titleInput?.focus();
    return;
  }

  const cancelButton = event.target.closest(".life-entry-cancel");
  if (cancelButton) {
    lifeEditingId = "";
    renderLifeTimeline();
    setLifeUploadHint("已取消编辑，原有备注保持不变。");
    return;
  }

  const saveButton = event.target.closest(".life-entry-save");
  if (saveButton) {
    const photoId = saveButton.dataset.id;
    const editorEl = photoId ? lifeTimelineEl.querySelector(`.life-entry-editor[data-id="${photoId}"]`) : null;
    if (!photoId || !editorEl) return;

    const titleInput = editorEl.querySelector(".life-entry-edit-title");
    const noteInput = editorEl.querySelector(".life-entry-edit-note");

    try {
      await updateLifePhotoMetadata(photoId, {
        title: titleInput?.value || "",
        note: noteInput?.value || "",
      });
      lifeEditingId = "";
      await loadLifePhotos();
      setLifeUploadHint("这条生活记录已经更新。");
    } catch {
      setLifeUploadHint("保存备注失败了，可以再试一次。");
    }
    return;
  }

  const deleteButton = event.target.closest(".life-entry-delete");
  if (!deleteButton) return;

  const photoId = deleteButton.dataset.id;
  if (!photoId) return;

  try {
    if (lifeEditingId === photoId) {
      lifeEditingId = "";
    }
    await removeLifePhoto(photoId);
    await loadLifePhotos();
    setLifeUploadHint("这张照片已经从时间线移除。");
  } catch {
    setLifeUploadHint("移除失败了，可以再试一次。");
  }
}

function handleLifeLightboxClick(event) {
  if (event.target.closest("[data-close-lightbox='true']")) {
    closeLifeLightbox();
  }
}

function handleLifeLightboxKeydown(event) {
  if (lifeLightboxEl.classList.contains("is-hidden")) return;

  if (event.key === "Escape") {
    closeLifeLightbox();
    return;
  }

  if (event.key === "ArrowLeft") {
    moveLifeLightbox(-1);
    return;
  }

  if (event.key === "ArrowRight") {
    moveLifeLightbox(1);
  }
}

function handleLifeDropzoneDragEnter(event) {
  event.preventDefault();
  setLifeDropzoneActive(true);
}

function handleLifeDropzoneDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
  setLifeDropzoneActive(true);
}

function handleLifeDropzoneDragLeave(event) {
  if (event.currentTarget.contains(event.relatedTarget)) return;
  setLifeDropzoneActive(false);
}

async function handleLifeDropzoneDrop(event) {
  event.preventDefault();
  setLifeDropzoneActive(false);

  const files = Array.from(event.dataTransfer?.files || []);
  if (!files.length) {
    setLifeUploadHint("没有识别到图片文件，可以再拖一次试试。");
    return;
  }

  await addLifeFiles(files);
}

function handleLifeDropzoneKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  lifeImageInputEl.click();
}

function handleLifeFiltersChange() {
  renderLifeTimeline();
}

async function handleResetLife() {
  lifeImageInputEl.value = "";
  lifeTitleEl.value = "";
  lifeNoteEl.value = "";
  lifeEditingId = "";
  resetLifeFilters(false);
  setLifeDropzoneActive(false);
  updateLifeComposerPreview();

  if (!lifeRecords.length) {
    setLifeUploadHint("时间线还是空的，先上传一张照片开始记录吧。");

    if (currentMode === "life") {
      insightTextEl.textContent = "先上传一张照片，时间线就会从这一刻开始生长。";
    }
    return;
  }

  try {
    await clearLifePhotos();
    applyLifeRecords([]);
    setLifeUploadHint("时间线已经清空，可以重新开始记录。");

    if (currentMode === "life") {
      insightTextEl.textContent = "时间线已经清空，下一张照片会成为新的起点。";
    }
  } catch {
    setLifeUploadHint("清空失败了，可以再试一次。");
  }
}

async function handleCountdownListClick(event) {
  const button = event.target.closest("button[data-action][data-id]");
  if (!button) return;

  const { action, id } = button.dataset;
  if (!id) return;

  if (action === "select") {
    selectCountdown(id);
    return;
  }

  if (action !== "delete") return;

  countdownRecords = countdownRecords.filter((record) => record.id !== id);
  persistCountdowns(countdownRecords);

  if (activeCountdownId === id) {
    activeCountdownId = "";
  }

  syncActiveCountdownRecord();
  renderCountdownList();

  if (countdownRecord) {
    tickCountdown();
  } else {
    applyCountdownIdleState();
  }

  if (currentMode === "countdown") {
    insightTextEl.textContent = countdownRecord
      ? getInsightMessage(countdownRecord)
      : "倒计时列表里已经没有记录了，可以重新添加一个未来节点。";
  }
}

async function handleAnniversaryListClick(event) {
  const button = event.target.closest("button[data-action][data-id]");
  if (!button) return;

  const { action, id } = button.dataset;
  if (!id) return;

  if (action === "select") {
    await selectAnniversary(id);
    return;
  }

  if (action !== "delete") return;

  anniversaryRecords = anniversaryRecords.filter((record) => record.id !== id);
  persistAnniversaries(anniversaryRecords);

  if (activeAnniversaryId === id) {
    activeAnniversaryId = "";
  }

  try {
    await removeAnniversaryImage(id);
  } catch {
    setAnniversaryImageHint("纪念日已删除，但背景图清理失败了，可以稍后再试。");
  }

  syncActiveAnniversaryRecord();
  renderAnniversaryList();

  if (anniversaryRecord) {
    renderActiveAnniversary();
    await renderActiveAnniversaryImage();
  } else {
    applyAnniversaryIdleState();
  }

  if (currentMode === "anniversary") {
    insightTextEl.textContent = anniversaryRecord
      ? "纪念日列表已经更新，当前主卡片展示的是新的选中项。"
      : "纪念日列表里已经没有记录了，可以重新添加新的重要时刻。";
  }
}

countdownTabEl.addEventListener("click", () => setMode("countdown"));
anniversaryTabEl.addEventListener("click", () => setMode("anniversary"));
lifeTabEl.addEventListener("click", () => setMode("life"));

openEditorBtnEl.addEventListener("click", () => {
  ensureEditorSidebarVisible({
    focusTarget: countdownNameEl,
  });
});

openAnniversaryBtnEl.addEventListener("click", () => {
  ensureEditorSidebarVisible({
    focusTarget: anniversaryNameEl,
  });
});

openLifeUploaderBtnEl.addEventListener("click", () => {
  ensureEditorSidebarVisible({
    onVisible: () => lifeImageInputEl.click(),
  });
});
selectLifeImageBtnEl.addEventListener("click", () => lifeImageInputEl.click());
lifeDropzoneEl.addEventListener("click", () => lifeImageInputEl.click());
lifeDropzoneEl.addEventListener("keydown", handleLifeDropzoneKeydown);
lifeDropzoneEl.addEventListener("dragenter", handleLifeDropzoneDragEnter);
lifeDropzoneEl.addEventListener("dragover", handleLifeDropzoneDragOver);
lifeDropzoneEl.addEventListener("dragleave", handleLifeDropzoneDragLeave);
lifeDropzoneEl.addEventListener("drop", handleLifeDropzoneDrop);
exportDataBtnEl.addEventListener("click", handleExportData);
importDataBtnEl.addEventListener("click", () => importDataInputEl.click());
importDataInputEl.addEventListener("change", handleImportDataChange);
closeLifeLightboxBtnEl.addEventListener("click", closeLifeLightbox);
prevLifeLightboxBtnEl.addEventListener("click", () => moveLifeLightbox(-1));
nextLifeLightboxBtnEl.addEventListener("click", () => moveLifeLightbox(1));
lifeLightboxEl.addEventListener("click", handleLifeLightboxClick);
window.addEventListener("keydown", handleLifeLightboxKeydown);

saveBtnEl.addEventListener("click", handleSave);
resetBtnEl.addEventListener("click", resetCountdown);
saveAnniversaryBtnEl.addEventListener("click", handleSaveAnniversary);
resetAnniversaryBtnEl.addEventListener("click", resetAnniversary);
resetLifeBtnEl.addEventListener("click", handleResetLife);
clearLifeBtnEl.addEventListener("click", handleResetLife);
selectAnniversaryImageBtnEl.addEventListener("click", () => anniversaryImageInputEl.click());
clearAnniversaryImageBtnEl.addEventListener("click", handleClearAnniversaryImage);
anniversaryImageInputEl.addEventListener("change", handleAnniversaryImageChange);
lifeImageInputEl.addEventListener("change", handleLifeImageChange);
lifeTimelineEl.addEventListener("click", handleLifeTimelineClick);
countdownListEl.addEventListener("click", handleCountdownListClick);
anniversaryListEl.addEventListener("click", handleAnniversaryListClick);
countdownNameEl.addEventListener("input", () => persistCountdownDraft());
countdownTargetEl.addEventListener("input", () => persistCountdownDraft());
anniversaryNameEl.addEventListener("input", () => persistAnniversaryDraft());
anniversaryDateEl.addEventListener("input", () => persistAnniversaryDraft());
lifeTitleEl.addEventListener("input", updateLifeComposerPreview);
lifeNoteEl.addEventListener("input", updateLifeComposerPreview);
lifeSearchInputEl.addEventListener("input", handleLifeFiltersChange);
lifeStartDateFilterEl.addEventListener("change", handleLifeFiltersChange);
lifeEndDateFilterEl.addEventListener("change", handleLifeFiltersChange);
clearLifeFiltersBtnEl.addEventListener("click", () => resetLifeFilters());
displayToggleEls.forEach((input) => input.addEventListener("change", handleDisplayPreferenceChange));
installAppBtnEl.addEventListener("click", handleInstallApp);
hideSidebarBtnEl.addEventListener("click", () => setEditorSidebarVisibility(false));
showSidebarBtnEl.addEventListener("click", () => setEditorSidebarVisibility(true, { shouldScroll: true }));

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallAppButton();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  updateInstallAppButton();
});

anniversaryTypeGroupEl.addEventListener("click", (event) => {
  const chip = event.target.closest(".type-chip");
  if (!chip) return;
  setAnniversaryType(chip.dataset.type);
  persistAnniversaryDraft();
});

window.addEventListener("beforeunload", () => {
  revokeAnniversaryImageUrl();
  revokeAnniversaryDraftImageUrl();
  revokeLifePhotoUrls();
  revokeLifePreviewImageUrl();
});

setDailyQuote();
applyDisplayPreferences(readDisplayPreferences());
applyEditorSidebarVisibility(readEditorSidebarVisibility());
updateInstallAppButton();
registerAppServiceWorker();
setMode("countdown");
refreshAppState();
tick();
window.setInterval(tick, 1000);
