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

  const handleCursorPosition = ({ pageX, pageY }) => {
    const [x, y] = [pageX - scrollX, pageY - scrollY];

    cursor.style.top = y - 8 + "px";
    cursor.style.left = x - 8 + "px";

    handleCursor(x, y);
  };

  const handleMouseEnter = () => {
    isHovering = true;
    cursor.classList.add("scale");
  };

  const handleMouseLeave = () => {
    isHovering = false;
    cursor.classList.remove("scale");
  };

  window.addEventListener("mousemove", handleCursorPosition);

  elementsHover.forEach((el) => {
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
  });
}
