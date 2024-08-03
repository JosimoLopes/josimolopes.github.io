export default class LightDarkMode {
  constructor(toggle, documentRoot) {
    this.toggle = document.querySelector(toggle);
    this.documentRoot = document.querySelector(documentRoot);
    this.getMode = localStorage.getItem("mode");
    this.activeClass = "active";
    this.darkMode = "dark";
    this.lightMode = "light";

    this.handleClick = this.handleClick.bind(this);
  }

  checkMode() {
    if (this.getMode === this.lightMode) {
      this.toggle.classList.add(this.activeClass);
      this.documentRoot.classList.add(this.lightMode);
    }
  }

  handleClick({ currentTarget }) {
    currentTarget.classList.toggle(this.activeClass);
    this.documentRoot.classList.toggle(this.lightMode);

    if (!this.documentRoot.classList.contains(this.lightMode)) {
      return localStorage.setItem("mode", "dark");
    } else {
      return localStorage.setItem("mode", "light");
    }
  }

  addToggleEvent() {
    this.toggle.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.toggle && this.documentRoot) {
      this.checkMode();
      this.addToggleEvent();
    }

    return this;
  }
}
