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
    const [x, y] = [pageX - scrollX, pageY - scrollY];

    this.cursor.style.top = y - 8 + "px";
    this.cursor.style.left = x - 8 + "px";

    this.activeCursor(x, y);
  }

  handleMouseEnter({ currentTarget }) {
    if (currentTarget.classList.contains("logo")) {
      this.cursor.classList.add("scaleLogo");
    } else {
      this.cursor.classList.add("scale");
    }
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
