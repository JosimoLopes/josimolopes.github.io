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

function initMarquee() {
  const elements = document.querySelectorAll("[data-anima='marquee']");

  let windowWidth = window.innerWidth;
  let mouseX = 0;
  let translateTargets = [];
  let translateWithEasings = [];
  const translateEasingFactor = 0.2;
  let isHovering = [];

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleWindowResize);

  function handleMouseMove(e) {
    mouseX = e.pageX;
  }

  function handleWindowResize(e) {
    windowWidth = window.innerWidth;
  }

  function lerp(start, end, factor) {
    return (1 - factor) * start + factor * end;
  }

  function animateElement(el, index) {
    if (isHovering[index]) {
      const elWidth = el.offsetWidth;

      translateTargets[index] = ((elWidth - windowWidth) / windowWidth) * mouseX * -1;

      translateWithEasings[index] = lerp(translateWithEasings[index] || 0, translateTargets[index], translateEasingFactor);

      el.style.transform = `translateX(${translateWithEasings[index]}px)`;
    }

    window.requestAnimationFrame(() => animateElement(el, index));
  }

  elements.forEach((el, index) => {
    el.addEventListener("mouseenter", () => {
      isHovering[index] = true;
    });

    el.addEventListener("mouseleave", () => {
      isHovering[index] = false;
    });

    window.requestAnimationFrame(() => animateElement(el, index));
  });
}

initMarquee();
