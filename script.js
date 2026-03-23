const STORAGE_KEY = "clock-out-countdown-time";
const START_STORAGE_KEY = "clock-in-start-time";
const COUNTDOWN_DRAFT_STORAGE_KEY = "clock-out-countdown-draft";
const ANNIVERSARY_STORAGE_KEY = "anniversary-record";

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

const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const statusTextEl = document.querySelector("#statusText");
const currentTimeTextEl = document.querySelector("#currentTimeText");
const progressTextEl = document.querySelector("#progressText");
const progressFillEl = document.querySelector("#progressFill");
const insightTextEl = document.querySelector("#insightText");
const dailyQuoteEl = document.querySelector("#dailyQuote");
const quoteAuthorEl = document.querySelector("#quoteAuthor");
const workStartTimeEl = document.querySelector("#workStartTime");
const timeInputEl = document.querySelector("#workEndTime");
const saveBtnEl = document.querySelector("#saveBtn");
const resetBtnEl = document.querySelector("#resetBtn");
const openEditorBtnEl = document.querySelector("#openEditorBtn");
const quickBtnEls = Array.from(document.querySelectorAll(".quick-btn[data-time]"));
const appShellEl = document.querySelector(".app-shell");
const timeValueEls = [hoursEl, minutesEl, secondsEl];

const anniversaryTypeGroupEl = document.querySelector("#anniversaryTypeGroup");
const anniversaryTypeChipEls = Array.from(document.querySelectorAll(".type-chip"));
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

const WORKDAY_START_HOUR = 9;
const WORKDAY_START_MINUTE = 0;
const MEDIA_DB_NAME = "time-menu-media";
const MEDIA_DB_VERSION = 2;
const ANNIVERSARY_IMAGE_STORE_NAME = "images";
const ANNIVERSARY_IMAGE_KEY = "anniversary-background";
const LIFE_PHOTO_STORE_NAME = "life-photos";
const MAX_IMAGE_SIZE = 8 * 1024 * 1024;
const BACKUP_KIND = "time-menu-backup";
const BACKUP_VERSION = 1;
const BACKUP_STORAGE_KEYS = [
  STORAGE_KEY,
  START_STORAGE_KEY,
  COUNTDOWN_DRAFT_STORAGE_KEY,
  ANNIVERSARY_STORAGE_KEY,
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

let currentMode = "countdown";
let targetTime = null;
let workStartTimeValue = "";
let anniversaryRecord = null;
let anniversaryTypeValue = "生日";
let anniversaryImageUrl = "";
let lifeRecords = [];
let lifePhotoUrls = [];
let lifeEditingId = "";
let lifePreviewId = "";
let lifePreviewImageUrl = "";

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

function setDisplay(hours, minutes, seconds) {
  const nextDisplay = [pad(hours), pad(minutes), pad(seconds)];

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
  appShellEl.classList.toggle("is-finished", finished);
}

function setProgress(percent, label) {
  const clamped = Math.max(0, Math.min(100, percent));
  progressFillEl.style.width = `${clamped}%`;
  progressTextEl.textContent = label;
}

function getInsightMessage(hoursRemaining) {
  if (hoursRemaining >= 6) return "今天还在主航道上，先稳住节奏，时间会走得很快。";
  if (hoursRemaining >= 3) return "已经过半，适合把最重要的事情再往前推进一段。";
  if (hoursRemaining >= 1) return "进入收尾窗口了，把零碎事项清一下，会更轻松地下班。";
  return "最后一小段时间，准备好给今天一个漂亮的句号。";
}

function syncQuickButtons(value) {
  quickBtnEls.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.time === value);
  });
}

function buildTargetDate(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target;
}

function getWorkdayStart(targetDate) {
  const workdayStart = new Date(targetDate);
  const [hours, minutes] = (workStartTimeValue || `${pad(WORKDAY_START_HOUR)}:${pad(WORKDAY_START_MINUTE)}`)
    .split(":")
    .map(Number);
  workdayStart.setHours(hours, minutes, 0, 0);
  if (workdayStart > targetDate) workdayStart.setDate(workdayStart.getDate() - 1);
  return workdayStart;
}

function persistTime(timeValue) {
  localStorage.setItem(STORAGE_KEY, timeValue);
}

function persistStartTime(timeValue) {
  if (!timeValue) {
    localStorage.removeItem(START_STORAGE_KEY);
    return;
  }

  localStorage.setItem(START_STORAGE_KEY, timeValue);
}

function persistCountdownDraft(startTime = workStartTimeEl.value, endTime = timeInputEl.value) {
  if (!startTime && !endTime) {
    localStorage.removeItem(COUNTDOWN_DRAFT_STORAGE_KEY);
    return;
  }

  localStorage.setItem(
    COUNTDOWN_DRAFT_STORAGE_KEY,
    JSON.stringify({
      startTime,
      endTime,
    })
  );
}

function readCountdownDraft() {
  const rawDraft = localStorage.getItem(COUNTDOWN_DRAFT_STORAGE_KEY);

  if (!rawDraft) {
    return {
      startTime: "",
      endTime: "",
    };
  }

  try {
    const parsedDraft = JSON.parse(rawDraft);
    return {
      startTime: normalizeTimeValue(parsedDraft.startTime),
      endTime: normalizeTimeValue(parsedDraft.endTime),
    };
  } catch {
    localStorage.removeItem(COUNTDOWN_DRAFT_STORAGE_KEY);
    return {
      startTime: "",
      endTime: "",
    };
  }
}

function persistAnniversary(record) {
  localStorage.setItem(ANNIVERSARY_STORAGE_KEY, JSON.stringify(record));
}

function readSavedAnniversary() {
  const rawRecord = localStorage.getItem(ANNIVERSARY_STORAGE_KEY);

  if (!rawRecord) return null;

  try {
    const parsedRecord = JSON.parse(rawRecord);
    if (!parsedRecord?.type || !parsedRecord?.name || !parsedRecord?.date) {
      throw new Error("invalid anniversary record");
    }
    return parsedRecord;
  } catch {
    localStorage.removeItem(ANNIVERSARY_STORAGE_KEY);
    return null;
  }
}

function setAnniversaryType(value) {
  anniversaryTypeValue = value;
  anniversaryTypeChipEls.forEach((chip) => {
    const active = chip.dataset.type === value;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-checked", String(active));
  });
}

function clearCountdown() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(START_STORAGE_KEY);
  localStorage.removeItem(COUNTDOWN_DRAFT_STORAGE_KEY);
}

function clearAnniversary() {
  localStorage.removeItem(ANNIVERSARY_STORAGE_KEY);
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
    anniversaryImagePreviewEl.classList.remove("has-image");
    anniversaryPanelEl.style.removeProperty("--anniversary-cover");
    anniversaryImagePreviewEl.style.removeProperty("--anniversary-cover");
    anniversaryImagePreviewTextEl.textContent = "未选择背景图";
    clearAnniversaryImageBtnEl.disabled = true;
    setAnniversaryImageHint("未设置背景图时，会使用默认纪念日卡片样式。");
    return;
  }

  anniversaryImageUrl = URL.createObjectURL(record.blob);
  const coverValue = `url("${anniversaryImageUrl}")`;
  anniversaryPanelEl.style.setProperty("--anniversary-cover", coverValue);
  anniversaryImagePreviewEl.style.setProperty("--anniversary-cover", coverValue);
  anniversaryPanelEl.classList.add("has-image");
  anniversaryImagePreviewEl.classList.add("has-image");
  anniversaryImagePreviewTextEl.textContent = record.name ? `当前背景：${record.name}` : "已选择背景图";
  clearAnniversaryImageBtnEl.disabled = false;
  setAnniversaryImageHint("背景图已保存在当前浏览器，刷新页面后也会继续显示。");
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

async function readAnniversaryImage() {
  const db = await openMediaDb();

  if (!db) {
    return null;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readonly");
    const request = transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME).get(ANNIVERSARY_IMAGE_KEY);

    request.onsuccess = () => resolve(request.result || null);
    request.onerror = () => reject(request.error || new Error("Failed to read anniversary image"));
    transaction.oncomplete = () => db.close();
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to read anniversary image"));
    };
  });
}

async function persistAnniversaryImage(file) {
  const db = await openMediaDb();

  if (!db) {
    throw new Error("IndexedDB is not supported");
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readwrite");
    transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME).put(
      {
        blob: file,
        name: file.name,
        updatedAt: Date.now(),
      },
      ANNIVERSARY_IMAGE_KEY
    );

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to save anniversary image"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to save anniversary image"));
    };
  });
}

async function removeAnniversaryImage() {
  const db = await openMediaDb();

  if (!db) {
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(ANNIVERSARY_IMAGE_STORE_NAME, "readwrite");
    transaction.objectStore(ANNIVERSARY_IMAGE_STORE_NAME).delete(ANNIVERSARY_IMAGE_KEY);

    transaction.oncomplete = () => {
      db.close();
      resolve();
    };
    transaction.onerror = () => {
      db.close();
      reject(transaction.error || new Error("Failed to delete anniversary image"));
    };
    transaction.onabort = () => {
      db.close();
      reject(transaction.error || new Error("Failed to delete anniversary image"));
    };
  });
}

async function writeAnniversaryImageRecord(record) {
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
        ANNIVERSARY_IMAGE_KEY
      );
    } else {
      store.delete(ANNIVERSARY_IMAGE_KEY);
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

function applyCountdownIdleState(draft = readCountdownDraft()) {
  targetTime = null;
  workStartTimeValue = "";
  workStartTimeEl.value = draft.startTime || "";
  timeInputEl.value = draft.endTime || "";
  syncQuickButtons(draft.endTime || "");
  setDisplay(0, 0, 0);
  setStatus("先设置一个下班时间，开始今天的期待。");
  setProgress(0, "尚未开始");

  if (currentMode === "countdown") {
    insightTextEl.textContent = "设一个明确的下班时间，会让今天更有终点感。";
  }
}

function applyAnniversaryIdleState() {
  anniversaryRecord = null;
  setAnniversaryType("生日");
  anniversaryNameEl.value = "";
  anniversaryDateEl.value = "";
  anniversaryTypeTextEl.textContent = "纪念日";
  anniversaryNameTextEl.textContent = "还没有设置纪念日";
  anniversaryDateTextEl.textContent = "输入一个重要日期，开始记录它。";
  anniversaryDaysEl.textContent = "0";
  anniversaryDaysLabelEl.textContent = "已经走过";
  anniversaryStatusTextEl.textContent = "可以记录生日、恋爱纪念日、入职日或任何重要时刻。";

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "可以先选择纪念类型，再填名称和日期开始记录。";
  }
}

async function refreshAppState() {
  const savedTime = normalizeTimeValue(localStorage.getItem(STORAGE_KEY));
  const savedStartTime = normalizeTimeValue(localStorage.getItem(START_STORAGE_KEY));
  const countdownDraft = readCountdownDraft();
  const savedAnniversary = readSavedAnniversary();

  if (savedTime) {
    startCountdown(savedTime, savedStartTime);
  } else {
    applyCountdownIdleState(countdownDraft);
  }

  if (savedAnniversary) {
    setAnniversaryType(savedAnniversary.type);
    anniversaryNameEl.value = savedAnniversary.name;
    anniversaryDateEl.value = savedAnniversary.date;
    startAnniversary(savedAnniversary);
  } else {
    applyAnniversaryIdleState();
  }

  applyAnniversaryImage(null);

  try {
    const savedImage = await readAnniversaryImage();
    if (savedImage?.blob) {
      applyAnniversaryImage(savedImage);
    }
  } catch {
    setAnniversaryImageHint("背景图读取失败了，可以重新选择一张图片。");
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
  const anniversaryImageRecord = await readAnniversaryImage();
  const lifePhotoRecords = await readLifePhotos();

  return {
    kind: BACKUP_KIND,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    localStorage: Object.fromEntries(BACKUP_STORAGE_KEYS.map((key) => [key, localStorage.getItem(key)])),
    media: {
      anniversaryImage: anniversaryImageRecord?.blob
        ? {
            name: anniversaryImageRecord.name || "",
            updatedAt: Number.isFinite(anniversaryImageRecord.updatedAt) ? anniversaryImageRecord.updatedAt : Date.now(),
            dataUrl: await blobToDataUrl(anniversaryImageRecord.blob),
          }
        : null,
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

  const anniversaryImage = backupPayload.media.anniversaryImage
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

  await writeAnniversaryImageRecord(anniversaryImage);
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

function toMinutes(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  return hours * 60 + minutes;
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
    heroSubtitleEl.textContent = "为今天设一个明确终点，让忙碌也有清晰的落点。";
    editorTagEl.textContent = "今日设置";
    editorTitleEl.textContent = "安排你的下班时刻";
    orbitalCoreEl.textContent = "今天";
    insightTextEl.textContent = targetTime
      ? "倒计时已经启动，页面会持续更新剩余时间和工作进度。"
      : "设一个明确的下班时间，会让今天更有终点感。";
    return;
  }

  if (isAnniversary) {
    heroEyebrowEl.textContent = "纪念日";
    heroSubtitleEl.textContent = "把重要时刻留在时间里，让每一次回望都有清晰的坐标。";
    editorTagEl.textContent = "纪念设置";
    editorTitleEl.textContent = "记录一个重要时刻";
    orbitalCoreEl.textContent = "纪念日";
    insightTextEl.textContent = anniversaryRecord
      ? "已经开始记录这个重要日子，页面会自动帮你更新天数。"
      : anniversaryPanelEl.classList.contains("has-image")
        ? "背景图已经准备好了，再填写名称和日期就能开始记录。"
        : "可以先选择纪念类型，再填名称和日期开始记录。";
    return;
  }

  heroEyebrowEl.textContent = "点滴生活";
  heroSubtitleEl.textContent = "上传照片后自动记下这一刻，并沿着时间线把生活串联起来。";
  editorTagEl.textContent = "生活记录";
  editorTitleEl.textContent = "把照片挂上你的生活时间线";
  orbitalCoreEl.textContent = "时间线";
  insightTextEl.textContent = getLifeInsightMessage();
}

function startCountdown(timeValue, startTimeValue = workStartTimeEl.value) {
  const now = new Date();
  targetTime = buildTargetDate(timeValue);
  workStartTimeValue = startTimeValue;
  workStartTimeEl.value = startTimeValue;
  timeInputEl.value = timeValue;
  persistTime(timeValue);
  persistStartTime(workStartTimeValue);
  persistCountdownDraft(workStartTimeValue, timeValue);
  syncQuickButtons(timeValue);

  const targetLabel = targetTime.getDate() === now.getDate() ? "今天" : "明天";
  setStatus(`已设置为${targetLabel} ${timeValue} 下班，倒计时进行中。`);
  setProgress(0, "0%");
  insightTextEl.textContent = "倒计时已经启动，接下来就朝着下班时刻稳步前进。";
}

function resetCountdown() {
  targetTime = null;
  workStartTimeValue = "";
  workStartTimeEl.value = "";
  timeInputEl.value = "";
  clearCountdown();
  syncQuickButtons("");
  setDisplay(0, 0, 0);
  setStatus("先设置一个下班时间，开始今天的期待。");
  setProgress(0, "尚未开始");

  if (currentMode === "countdown") {
    insightTextEl.textContent = "设一个明确的下班时间，会让今天更有终点感。";
  }
}

function startAnniversary(record) {
  anniversaryRecord = record;
  persistAnniversary(record);
  anniversaryTypeTextEl.textContent = record.type;
  anniversaryNameTextEl.textContent = record.name;
  anniversaryDateTextEl.textContent = `日期：${record.date}`;
  updateAnniversary();

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "已经开始记录这个重要日子，页面会自动帮你更新天数。";
  }
}

async function resetAnniversary() {
  anniversaryRecord = null;
  setAnniversaryType("生日");
  anniversaryNameEl.value = "";
  anniversaryDateEl.value = "";
  anniversaryImageInputEl.value = "";
  clearAnniversary();
  anniversaryTypeTextEl.textContent = "纪念日";
  anniversaryNameTextEl.textContent = "还没有设置纪念日";
  anniversaryDateTextEl.textContent = "输入一个重要日期，开始记录它。";
  anniversaryDaysEl.textContent = "0";
  anniversaryDaysLabelEl.textContent = "已经走过";
  anniversaryStatusTextEl.textContent = "可以记录生日、恋爱纪念日、入职日或任何重要时刻。";
  applyAnniversaryImage(null);

  try {
    await removeAnniversaryImage();
  } catch {
    setAnniversaryImageHint("背景图清除失败了，可以再试一次。");
  }

  if (currentMode === "anniversary") {
    insightTextEl.textContent = "可以先选择纪念类型，再填名称和日期开始记录。";
  }
}

function updateAnniversary() {
  if (!anniversaryRecord) return;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const target = new Date(`${anniversaryRecord.date}T00:00:00`);
  const diffDays = Math.round((today.getTime() - target.getTime()) / 86400000);

  if (diffDays >= 0) {
    anniversaryDaysLabelEl.textContent = "已经走过";
    anniversaryDaysEl.textContent = String(diffDays);
    anniversaryStatusTextEl.textContent = `${anniversaryRecord.name} 已经过去 ${diffDays} 天，时间把重要的事留了下来。`;
  } else {
    anniversaryDaysLabelEl.textContent = "还有";
    anniversaryDaysEl.textContent = String(Math.abs(diffDays));
    anniversaryStatusTextEl.textContent = `距离 ${anniversaryRecord.name} 还有 ${Math.abs(diffDays)} 天，值得好好期待。`;
  }
}

function tickCountdown() {
  if (!targetTime) return;

  const now = new Date();
  const diff = targetTime.getTime() - now.getTime();

  if (diff <= 0) {
    setDisplay(0, 0, 0);
    setStatus("下班时间到了，辛苦了，准备收工吧。", true);
    setProgress(100, "100%");

    if (currentMode === "countdown") {
      insightTextEl.textContent = "这一天可以先告一段落了，愿今晚属于你自己。";
    }
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const workdayStart = getWorkdayStart(targetTime);
  const totalDuration = Math.max(1, targetTime.getTime() - workdayStart.getTime());
  const elapsed = now.getTime() - workdayStart.getTime();
  const progress = (elapsed / totalDuration) * 100;

  setDisplay(hours, minutes, seconds);
  setProgress(progress, `${Math.round(Math.max(0, Math.min(100, progress)))}%`);

  if (currentMode === "countdown") {
    insightTextEl.textContent = getInsightMessage(hours + minutes / 60);
  }
}

function tick() {
  updateCurrentTime();
  tickCountdown();
  updateAnniversary();
}

function handleSave() {
  const timeValue = timeInputEl.value;
  const startValue = workStartTimeEl.value;

  if (!timeValue) {
    setStatus("请先输入一个下班时间，例如 18:30。");
    return;
  }

  if (startValue && toMinutes(startValue) >= toMinutes(timeValue)) {
    setStatus("上班时间需要早于下班时间，例如 09:00 到 18:30。");
    return;
  }

  startCountdown(timeValue, startValue);
  tick();
}

function handleSaveAnniversary() {
  const nameValue = anniversaryNameEl.value.trim();
  const dateValue = anniversaryDateEl.value;

  if (!nameValue) {
    anniversaryStatusTextEl.textContent = "请先输入纪念日名称，例如：和她在一起。";
    return;
  }

  if (!dateValue) {
    anniversaryStatusTextEl.textContent = "请先选择一个日期。";
    return;
  }

  startAnniversary({
    type: anniversaryTypeValue,
    name: nameValue,
    date: dateValue,
  });
}

async function handleAnniversaryImageChange(event) {
  const [file] = event.target.files || [];
  event.target.value = "";

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setAnniversaryImageHint("请选择 JPG、PNG、WebP 等图片文件。");
    return;
  }

  if (file.size > MAX_IMAGE_SIZE) {
    setAnniversaryImageHint("图片太大了，请换一张 8MB 以内的图片。");
    return;
  }

  setAnniversaryImageHint("正在保存背景图...");

  try {
    await persistAnniversaryImage(file);
    applyAnniversaryImage({
      blob: file,
      name: file.name,
    });

    if (currentMode === "anniversary") {
      insightTextEl.textContent = anniversaryRecord
        ? "纪念日背景已经更新，这张图片会陪着这个重要日子一起展示。"
        : "背景图已经准备好了，再填写名称和日期就能开始记录。";
    }
  } catch {
    setAnniversaryImageHint("背景图保存失败了，可能是图片过大或浏览器存储空间不足。");
  }
}

async function handleClearAnniversaryImage() {
  applyAnniversaryImage(null);
  anniversaryImageInputEl.value = "";

  try {
    await removeAnniversaryImage();

    if (currentMode === "anniversary") {
      insightTextEl.textContent = anniversaryRecord
        ? "背景图已经移除，纪念日卡片已恢复成默认样式。"
        : "背景图已经移除，可以重新选择一张更合适的图片。";
    }
  } catch {
    setAnniversaryImageHint("背景图移除失败了，可以再试一次。");
  }
}

async function handleExportData() {
  setDataToolsBusy(true);
  setDataToolsHint("正在准备备份文件...");

  try {
    const payload = await buildBackupPayload();
    const backupBlob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const downloadUrl = URL.createObjectURL(backupBlob);
    const link = document.createElement("a");
    const lifePhotoCount = Array.isArray(payload.media.lifePhotos) ? payload.media.lifePhotos.length : 0;

    link.href = downloadUrl;
    link.download = `time-menu-backup-${formatBackupStamp()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.setTimeout(() => {
      URL.revokeObjectURL(downloadUrl);
    }, 0);

    setDataToolsHint(`备份文件已下载，包含 ${lifePhotoCount} 张生活照片和当前设置。`);
  } catch {
    setDataToolsHint("导出失败了，可以稍后再试一次。");
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

countdownTabEl.addEventListener("click", () => setMode("countdown"));
anniversaryTabEl.addEventListener("click", () => setMode("anniversary"));
lifeTabEl.addEventListener("click", () => setMode("life"));

openEditorBtnEl.addEventListener("click", () => {
  timeInputEl.focus();
  timeInputEl.showPicker?.();
});

openAnniversaryBtnEl.addEventListener("click", () => {
  anniversaryDateEl.focus();
  anniversaryDateEl.showPicker?.();
});

openLifeUploaderBtnEl.addEventListener("click", () => lifeImageInputEl.click());
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
lifeTitleEl.addEventListener("input", updateLifeComposerPreview);
lifeNoteEl.addEventListener("input", updateLifeComposerPreview);
lifeSearchInputEl.addEventListener("input", handleLifeFiltersChange);
lifeStartDateFilterEl.addEventListener("change", handleLifeFiltersChange);
lifeEndDateFilterEl.addEventListener("change", handleLifeFiltersChange);
clearLifeFiltersBtnEl.addEventListener("click", () => resetLifeFilters());

anniversaryTypeGroupEl.addEventListener("click", (event) => {
  const chip = event.target.closest(".type-chip");
  if (!chip) return;
  setAnniversaryType(chip.dataset.type);
});

workStartTimeEl.addEventListener("input", () => {
  persistCountdownDraft();
});

timeInputEl.addEventListener("input", (event) => {
  syncQuickButtons(event.target.value);
  persistCountdownDraft();
});

quickBtnEls.forEach((button) => {
  button.addEventListener("click", () => {
    timeInputEl.value = button.dataset.time;
    syncQuickButtons(button.dataset.time);
    persistCountdownDraft();
  });
});

window.addEventListener("beforeunload", () => {
  revokeAnniversaryImageUrl();
  revokeLifePhotoUrls();
  revokeLifePreviewImageUrl();
});

setDailyQuote();
setMode("countdown");
refreshAppState();
tick();
window.setInterval(tick, 1000);
