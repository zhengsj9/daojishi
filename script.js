const STORAGE_KEY = "clock-out-countdown-time";
const START_STORAGE_KEY = "clock-in-start-time";
const ANNIVERSARY_STORAGE_KEY = "anniversary-record";

const countdownTabEl = document.querySelector("#countdownTab");
const anniversaryTabEl = document.querySelector("#anniversaryTab");
const countdownViewEl = document.querySelector("#countdownView");
const anniversaryViewEl = document.querySelector("#anniversaryView");
const countdownEditorEl = document.querySelector("#countdownEditor");
const anniversaryEditorEl = document.querySelector("#anniversaryEditor");
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
const quickBtnEls = Array.from(document.querySelectorAll(".quick-btn"));
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

const WORKDAY_START_HOUR = 9;
const WORKDAY_START_MINUTE = 0;
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

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
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

function getPhaseText(hoursRemaining) {
  if (hoursRemaining >= 6) return "专注推进";
  if (hoursRemaining >= 3) return "稳步冲刺";
  if (hoursRemaining >= 1) return "收尾阶段";
  return "准备下班";
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

function persistAnniversary(record) {
  localStorage.setItem(ANNIVERSARY_STORAGE_KEY, JSON.stringify(record));
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
}

function clearAnniversary() {
  localStorage.removeItem(ANNIVERSARY_STORAGE_KEY);
}

function toMinutes(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  return hours * 60 + minutes;
}

function setMode(mode) {
  currentMode = mode;
  const isCountdown = mode === "countdown";

  countdownTabEl.classList.toggle("is-active", isCountdown);
  anniversaryTabEl.classList.toggle("is-active", !isCountdown);
  countdownTabEl.setAttribute("aria-selected", String(isCountdown));
  anniversaryTabEl.setAttribute("aria-selected", String(!isCountdown));
  countdownViewEl.classList.toggle("is-hidden", !isCountdown);
  anniversaryViewEl.classList.toggle("is-hidden", isCountdown);
  countdownEditorEl.classList.toggle("is-hidden", !isCountdown);
  anniversaryEditorEl.classList.toggle("is-hidden", isCountdown);

  if (isCountdown) {
    heroEyebrowEl.textContent = "选择一种时间记录方式";
    heroSubtitleEl.textContent = "选择一种时间记录方式。";
    editorTagEl.textContent = "今日设置";
    editorTitleEl.textContent = "安排你的下班时刻";
    orbitalCoreEl.textContent = "今天";
  } else {
    heroEyebrowEl.textContent = "选择一种时间记录方式";
    heroSubtitleEl.textContent = "选择一种时间记录方式。";
    editorTagEl.textContent = "纪念设置";
    editorTitleEl.textContent = "记录一个重要时刻";
    orbitalCoreEl.textContent = "纪念日";
    insightTextEl.textContent = anniversaryRecord
      ? "已经开始记录这个重要日子，页面会自动帮你更新天数。"
      : "可以先选择纪念类型，再填名称和日期开始记录。";
  }
}

function startCountdown(timeValue) {
  const now = new Date();
  targetTime = buildTargetDate(timeValue);
  workStartTimeValue = workStartTimeEl.value;
  persistTime(timeValue);
  persistStartTime(workStartTimeValue);
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

function resetAnniversary() {
  anniversaryRecord = null;
  setAnniversaryType("生日");
  anniversaryNameEl.value = "";
  anniversaryDateEl.value = "";
  clearAnniversary();
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

  startCountdown(timeValue);
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

countdownTabEl.addEventListener("click", () => setMode("countdown"));
anniversaryTabEl.addEventListener("click", () => setMode("anniversary"));

openEditorBtnEl.addEventListener("click", () => {
  timeInputEl.focus();
  timeInputEl.showPicker?.();
});

openAnniversaryBtnEl.addEventListener("click", () => {
  anniversaryDateEl.focus();
  anniversaryDateEl.showPicker?.();
});

saveBtnEl.addEventListener("click", handleSave);
resetBtnEl.addEventListener("click", resetCountdown);
saveAnniversaryBtnEl.addEventListener("click", handleSaveAnniversary);
resetAnniversaryBtnEl.addEventListener("click", resetAnniversary);

anniversaryTypeGroupEl.addEventListener("click", (event) => {
  const chip = event.target.closest(".type-chip");
  if (!chip) return;
  setAnniversaryType(chip.dataset.type);
});

timeInputEl.addEventListener("input", (event) => {
  syncQuickButtons(event.target.value);
});

quickBtnEls.forEach((button) => {
  button.addEventListener("click", () => {
    timeInputEl.value = button.dataset.time;
    syncQuickButtons(button.dataset.time);
  });
});

const savedTime = localStorage.getItem(STORAGE_KEY);
const savedStartTime = localStorage.getItem(START_STORAGE_KEY);
const savedAnniversary = localStorage.getItem(ANNIVERSARY_STORAGE_KEY);

if (savedStartTime) {
  workStartTimeValue = savedStartTime;
  workStartTimeEl.value = savedStartTime;
}

if (savedTime) {
  timeInputEl.value = savedTime;
  startCountdown(savedTime);
}

if (savedAnniversary) {
  const parsed = JSON.parse(savedAnniversary);
  setAnniversaryType(parsed.type);
  anniversaryNameEl.value = parsed.name;
  anniversaryDateEl.value = parsed.date;
  startAnniversary(parsed);
} else {
  setAnniversaryType("生日");
}

setDailyQuote();
setMode("countdown");
tick();
window.setInterval(tick, 1000);
