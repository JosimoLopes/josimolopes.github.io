export default class AnimaScroll {
  constructor(lines) {
    this.lines = document.querySelectorAll(lines);
    this.activeClass = "active-line";

    this.handleScroll = this.handleScroll.bind(this);
  }

  addActiveClass = () => {
    this.lines.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top - 500;

      if (elementTop < 0) {
        el.classList.add(this.activeClass);
      } else {
        el.classList.remove(this.activeClass);
      }
    });
  };

  handleScroll() {
    this.addActiveClass();
  }

  addScrollEvent() {
    window.addEventListener("scroll", this.handleScroll);
    this.addActiveClass();
  }

  init() {
    if (this.lines.length) {
      this.addScrollEvent();
    }

    return this;
  }
}
