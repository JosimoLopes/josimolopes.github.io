function initCursor() {
  const cursor = document.querySelector(".cursor");
  const mainTitle = document.querySelector('[data-hover="title"]');
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

    setTimeout(() => {
      cursor.setAttribute("style", `top: ${y - scrollY}px; left:${x - scrollX}px;`);
    }, 100);

    handleCursor(x, y);
  };

  const handleMouseOver = (e) => {
    isHovering = true;
    cursor.classList.add("scale");
  };

  const handleMouseLeave = (e) => {
    isHovering = false;
    cursor.classList.remove("scale");
  };

  window.addEventListener("mousemove", handleCursorPosition);
  mainTitle.addEventListener("mouseover", handleMouseOver);
  mainTitle.addEventListener("mouseleave", handleMouseLeave);
}

initCursor();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
