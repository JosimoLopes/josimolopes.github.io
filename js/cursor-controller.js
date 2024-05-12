export default function initCursor() {
  const cursor = document.querySelector('[data-cursor="custom"]');
  const mainTitle = document.querySelector("[data-hover]");
  const anchors = document.querySelectorAll("a");
  let isHovering = false;

  const handleCursor = (x, y) => {
    if ((x && y) || isHovering) {
      cursor.classList.add("active");
    } else {
      cursor.classList.remove("active");
    }
  };

  const handleCursorPosition = (e) => {
    const x = e.pageX;
    const y = e.pageY;

    cursor.setAttribute("style", `top: ${y - scrollY}px; left:${x - scrollX}px;`);
    handleCursor(x, y);
  };

  const handleMouseEnter = (e) => {
    isHovering = true;
    cursor.classList.add("scale");
  };

  const handleMouseLeave = (e) => {
    isHovering = false;
    cursor.classList.remove("scale");
  };

  const removeCustomCursor = (e) => {
    cursor.style.display = "none";
  };

  window.addEventListener("mousemove", handleCursorPosition);
  mainTitle.addEventListener("mouseenter", handleMouseEnter);
  mainTitle.addEventListener("mouseleave", handleMouseLeave);

  anchors.forEach((a) => {
    a.addEventListener("mouseover", removeCustomCursor);
  });
}
