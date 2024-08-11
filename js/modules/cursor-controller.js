export default class CursorController {
  constructor(cursor, hoverElements) {
    this.cursor = document.querySelector(cursor);
    this.hoverElements = document.querySelectorAll(hoverElements);
    this.classActive = "active";

    this.handleCursorPosition = this.handleCursorPosition.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  activeCursor(x, y) {
    if (x && y) this.cursor.classList.add(this.classActive);
  }

  handleCursorPosition({ pageX, pageY }) {
    let [x, y] = [pageX - scrollX, pageY - scrollY];

    if (this.cursor.classList.contains("scale")) {
      x -= 6;
      y -= 6;
    }

    this.cursor.style.top = `${y}px`;
    this.cursor.style.left = `${x}px`;

    this.activeCursor(x, y);
  }

  handleMouseEnter() {
    this.cursor.classList.add("scale");
  }

  handleMouseLeave() {
    this.cursor.classList.remove("scale", "scaleLogo");
  }

  addCursorEvent() {
    window.addEventListener("mousemove", this.handleCursorPosition);

    this.hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", this.handleMouseEnter);
      el.addEventListener("mouseleave", this.handleMouseLeave);
    });
  }

  init() {
    if ((this.cursor, this.hoverElements)) {
      this.addCursorEvent();
    }

    return this;
  }
}
