export default function initLightDarkMode() {
  const toggle = document.querySelector('[data-toggle="light-dark"]');
  const root = document.querySelector(":root");
  let getMode = localStorage.getItem("mode");

  const checkMode = () => {
    if (getMode && getMode === "light") {
      toggle.classList.add("active");
      root.classList.add("light");
    }
  };

  checkMode();

  const handleClick = (e) => {
    e.currentTarget.classList.toggle("active");
    root.classList.toggle("light");

    if (!root.classList.contains("light")) {
      return localStorage.setItem("mode", "dark");
    } else {
      return localStorage.setItem("mode", "light");
    }
  };

  toggle.addEventListener("click", handleClick);
}
