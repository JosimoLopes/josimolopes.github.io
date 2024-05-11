function initCursor() {
  const cursor = document.querySelector('[data-cursor="custom"]');
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

    cursor.setAttribute("style", `top: ${y - scrollY}px; left:${x - scrollX}px;`);

    // setTimeout(() => {
    // }, 100);

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

  window.addEventListener("mousemove", handleCursorPosition);
  mainTitle.addEventListener("mouseenter", handleMouseEnter);
  mainTitle.addEventListener("mouseleave", handleMouseLeave);
}

initCursor();

function initLenisSmoothScroll() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

initLenisSmoothScroll();

function initScrollToTarget() {
  const internalAnchor = document.querySelector('[data-link="work"]');
  const target = document.getElementById("work");

  internalAnchor.addEventListener("click", scrollToTarget);

  function scrollToTarget(e) {
    console.log(e);
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

initScrollToTarget();

function initAnimaScroll() {
  const workElements = document.querySelectorAll('[data-anima="line"]');

  const addActive = () => {
    workElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top - 600;
      if (elementTop < 0) {
        el.classList.add("active");
      }
    });
  };

  const handleScroll = () => {
    addActive();
  };

  window.addEventListener("scroll", handleScroll);
}

initAnimaScroll();
