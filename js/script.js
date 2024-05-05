function initCursor() {
  const cursor = document.querySelector(".cursor");
  const mainTitle = document.querySelector('[data-hover="title"]');

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

  const handleMouseOver = (e) => {
    console.log(e.target === mainTitle);
    cursor.classList.add("scale");
  };

  const handleMouseLeave = (e) => {
    cursor.classList.remove("scale");
  };

  addEventListener("mousemove", handleCursorPosition);
  mainTitle.addEventListener("mouseover", handleMouseOver);
  mainTitle.addEventListener("mouseleave", handleMouseLeave);
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

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
