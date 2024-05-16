export default function initLightDarkMode() {}

const toggle = document.querySelector('[data-toggle="light-dark"]');
const root = document.querySelector(":root");
let getMode = localStorage.getItem("mode");

console.log(getMode);

function checkMode() {
  if (getMode && getMode === "light") {
    toggle.classList.add("active");
    root.classList.add("light");
  }
}

checkMode();

function handleClick(e) {
  this.classList.toggle("active");
  root.classList.toggle("light");

  if (!root.classList.contains("light")) {
    return localStorage.setItem("mode", "dark");
  } else {
    return localStorage.setItem("mode", "light");
  }
}

toggle.addEventListener("click", handleClick);
