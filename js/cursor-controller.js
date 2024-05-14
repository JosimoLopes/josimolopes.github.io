export default function initCursor() {
  const cursor = document.querySelector('[data-cursor="custom"]');
  const elementsHover = document.querySelectorAll("[data-hover]");
  let isHovering = false;

  const handleCursor = (x, y) => {
    if ((x && y) || isHovering) {
      cursor.classList.add("active");
    } else {
      cursor.classList.remove("active");
    }
  };

  const handleCursorPosition = (e) => {
    const x = e.pageX - scrollX;
    const y = e.pageY - scrollY;

    cursor.style.top = y - 8 + "px";
    cursor.style.left = x - 8 + "px";

    handleCursor(x, y);
  };

  function handleMouseEnter(e) {
    isHovering = true;

    if (e.currentTarget.classList.contains("intro-title-container")) {
      cursor.classList.add("scale");
    } else {
      cursor.classList.add("scale-link");
    }
  }

  const handleMouseLeave = () => {
    isHovering = false;

    cursor.classList.remove("scale", "scale-link");
  };

  window.addEventListener("mousemove", handleCursorPosition);

  elementsHover.forEach((el) => {
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
  });
}
