const currentTheme = localStorage.getItem("theme");
const transport = localStorage.getItem("transport") || "libcurl";
const searchEngine = localStorage.getItem("se") || "google";
const themeSelect = document.getElementById("theme-select");
const transportSelect = document.getElementById("transport-select");
const searchEngineSelect = document.getElementById("search-engine-select");
const panicurlInput = document.getElementById("panicUrl");
const bgiminput = document.getElementById("bgiminput");
const panickeyInput = document.getElementById("panicKey");
const getpanicKey = localStorage.getItem("panicKey") || "`";
const bgimbutton = document.getElementById("bgimbutton");
const bgimgselect = document.getElementById("bgimgselect");
const getpanicUrl =
  localStorage.getItem("panicUrl") ||
  "https://www.google.com/search?q=elon+musk";
const tabs = document.querySelectorAll(".tab");
const tabButtons = document.querySelectorAll(".tab-button");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
    tabs.forEach((tab) => (tab.style.display = "none"));
    document.querySelector(
      `[data-tab-name="${button.id.replace("-tab", "")}"]`
    ).style.display = "block";
    localStorage.setItem("activeSettingstab", button.id.replace("-tab", ""));
  });
});

const activeTab = localStorage.getItem("activeSettingstab");

if (activeTab) {
  document.querySelector(`#${activeTab}-tab`).click();
} else {
  document.querySelector("#appearance-tab").click();
}

if (!currentTheme) {
  localStorage.setItem("theme", "default");
  select.value = currentTheme;
}
function changeBackground(url, dropdown) {
  document.body.style.backgroundImage = `url(${url})`;
  localStorage.setItem("backgroundImage", url);
  localStorage.setItem("backgroundImageDropdown", dropdown);
  bgiminput.value = url || "";
  localStorage.setItem("customUrl", false);
}

if (localStorage.getItem("customUrl") === "true") {
  bgimgselect.value = "custom";
} else {
  bgimgselect.value =
    localStorage.getItem("backgroundImageDropdown") ?? "default";
}
bgimgselect.addEventListener("change", () => {
  switch (bgimgselect.value) {
    case "default":
      changeBackground("", "default");
      localStorage.removeItem("backgroundImageDropdown");
      localStorage.removeItem("backgroundImage");
      document.body.style.removeProperty("background-image");
      break;
    case "audi":
      changeBackground("/./media/wallpapers/audi.gif", "audi");
      break;
    case "windows":
      changeBackground("/./media/wallpapers/windows.webp", "windows");
      break;
    case "windowsdark":
      changeBackground("/./media/wallpapers/windowsdark.webp", "windowsdark");
      break;
      case "Landscape":
      changeBackground("/./media/wallpapers/landscape1.jpg", "landscape");
      break;
      case "labronyboo":
      changeBackground("/./media/wallpapers/labronyboo.png", "labronyboo");
      break;
      case "SunshineLabron James":
      changeBackground("/./media/wallpapers/you are mysunshine.gif", "SunshineLabron James");
      break;
  }
});

bgiminput.value = localStorage.getItem("backgroundImage") || "";
bgiminput.addEventListener("change", () => {
  if (bgiminput.value == "") {
    localStorage.removeItem("backgroundImage");
    document.body.style.removeProperty("background-image");
    bgimgselect.value = "default";
    localStorage.removeItem("backgroundImageDropdown");
  } else {
    localStorage.setItem("backgroundImage", bgiminput.value);
    document.body.style.backgroundImage = `url(${bgiminput.value})`;
    localStorage.removeItem("backgroundImageDropdown");
    bgimgselect.value = "custom";
    localStorage.setItem("customUrl", true);
  }
});
bgimbutton.addEventListener("click", () => {
  console.log("[Lunaar]", "resetting background image");
  localStorage.removeItem("backgroundImage");
  document.body.style.removeProperty("background-image");
  bgimgselect.value = "default";
  bgiminput.value = "";
  localStorage.removeItem("backgroundImageDropdown");
});
themeSelect.value = currentTheme;

themeSelect.addEventListener("change", () => {
  localStorage.setItem("theme", themeSelect.value);
  window.updateParticles();
  document.body.setAttribute("theme", themeSelect.value);
});
transportSelect.value = transport;

transportSelect.addEventListener("change", () => {
  localStorage.setItem("transport", transportSelect.value);
  setTransport(transportSelect.value);
});
searchEngineSelect.value = searchEngine;
searchEngineSelect.addEventListener("change", () => {
  localStorage.setItem("se", searchEngineSelect.value);
});

panickeyInput.value = getpanicKey;
panicurlInput.value = getpanicUrl;

panickeyInput.addEventListener("change", () => {
  localStorage.setItem("panicKey", panickeyInput.value);
});

panicurlInput.addEventListener("change", () => {
  panicurlInput.value.includes("https://") ||
  panicurlInput.value.includes("http://")
    ? localStorage.setItem("panicUrl", panicurlInput.value)
    : localStorage.setItem("panicUrl", `https://${panicurlInput.value}`);
});

function toggleBlobs() {
  const blobs = document.getElementById("blobs");
  if (blobs.classList.contains("hide")) {
    blobs.classList.remove("hide");
    localStorage.setItem("blobs", "true");
    console.log("Blobs enabled");
  } else {
    blobs.classList.add("hide");
    localStorage.setItem("blobs", "false");
    console.log("Blobs disabled");
  }
}
function resetCloak() {
  cloak.reset();
  localStorage.removeItem("cloakFavicon");
  localStorage.removeItem("cloakTitle");
}
function toggleStars() {
  const stars = document.getElementById("particles-js");
  if (stars.classList.contains("hide")) {
    stars.classList.remove("hide");
    localStorage.setItem("stars", "true");
    console.log("Stars enabled");
  } else {
    stars.classList.add("hide");
    localStorage.setItem("stars", "false");
    console.log("Stars disabled");
  }
}

function aboutBlank() {
  const newWindow = window.open();
  newWindow.document.body.style.margin = "0";
  newWindow.document.body.style.height = "100vh";

  const iframe = newWindow.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.referrerPolicy = "no-referrer";
  iframe.src = window.location.href;

  newWindow.document.body.appendChild(iframe);
  window.location.replace("https://www.google.com/search?q=what+day+is+today");
}
const cloaks = [
  {
    name: "default",
    icon: "./media/logo.svg",
    title: "Lunaar",
  },
  {
    name: "drive",
    icon: "./media/cloaks/googledrive.png",
    title: "Home - Google Drive",
  },
  {
    name: "edpuzzle",
    icon: "/./media/cloaks/edpuzzle.png",
    title: "Edpuzzle",
  },
  {
    name: "wikipedia",
    icon: "/./media/cloaks/wikipedia.ico",
    title: "Wikipedia",
  },
  {
    name: "classroom",
    icon: "/./media/cloaks/Classroom.png",
    title: "Google Classroom",
  },
  {
    name: "canvas",
    icon: "/./media/cloaks/canvas.png",
    title: "Dashboard",
  },
  {
    name: "classroom",
    icon: "/./media/cloaks/classroom.png",
    title: "Home",
  },
  {
    name: "zoom",
    icon: "/./media/cloaks/zoom.png",
    title: "Zoom",
  },
  {
    name: "khan",
    icon: "/./media/cloaks/khan.ico",
    title: "Khan Academy",
  },
  {
    name: "desmos",
    icon: "/./media/cloaks/desmos.ico",
    title: "Desmos Classroom Activities",
  },
  {
    name: "gforms",
    icon: "/./media/cloaks/googleforms.png",
    title: "Start your quiz",
  },
  {
    name: "quizlet",
    icon: "/./media/cloaks/quizlet.webp",
    title: "Online Flashcard Maker &amp; Flashcard App | Quizlet",
  },
];
