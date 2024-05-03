function initCursor() {
  const cursor = document.querySelector(".cursor");

  const handleCursor = (x, y) => {
    if (x && y) {
      cursor.classList.add("active");
    } else {
      cursor.classList.remove("active");
    }
  };

  const handleCursorPosition = (e) => {
    const x = e.pageX;
    const y = e.pageY;

    cursor.setAttribute("style", `top: ${y - 10}px; left:${x - 10}px;`);
    handleCursor(x, y);
  };

  addEventListener("mousemove", handleCursorPosition);
}

initCursor();

function initChangeBlendMode() {
  const elHover = document.querySelector("[data-hover]");
  const elBlend = document.querySelector('[data-remove="blend"]');

  elHover.addEventListener("mouseover", () => {
    elBlend.style.mixBlendMode = "normal";
  });

  elHover.addEventListener("mouseout", () => {
    elBlend.style.mixBlendMode = "difference";
  });
}

initChangeBlendMode();

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
