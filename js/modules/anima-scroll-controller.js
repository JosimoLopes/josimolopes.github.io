export default class AnimaScroll {
  constructor(lines, rectTop) {
    this.lines = document.querySelectorAll(lines);
    this.activeClass = "active-line";
    this.rectTop = rectTop;

    this.handleScroll = this.handleScroll.bind(this);
  }

  addActiveClass = () => {
    this.lines.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top - this.rectTop;

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
