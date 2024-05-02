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

const el = document.querySelector("[data-anima='marquee'");

// Variables ~ Widths
let elWidth = el.offsetWidth;
let windowWidth = window.innerWidth;

// Variables ~ Mouse
let mouseX = 0;
let prevMouseX = 0;

// Target: value we want to animate to
let translateTarget = 0;

// WithEasing: value we use to animate
let translateWithEasing = 0;

// EasingFactor: determines how quick the animation/interpolation goes
let translateEasingFactor = 0.02;

// Events
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

// Functions
function handleMouseMove(e) {
  mouseX = e.pageX;
}

function handleWindowResize(e) {
  elWidth = el.offsetWidth;
  windowWidth = window.innerWidth;
}

function lerp(start, end, factor) {
  return (1 - factor) * start + factor * end;
}

function animateMe() {
  // Get difference between current and previous mouse position
  prevMouseX = mouseX;

  // Calc how much we need to translate our el
  translateTarget = ((elWidth - windowWidth) / windowWidth) * mouseX * -1;

  // Ease between start and target values (skew)

  // Limit our skew to a range of 75 degrees so it doesn't "over-skew"

  // Ease between start and target values (translate)
  translateWithEasing = lerp(translateWithEasing, translateTarget, translateEasingFactor);

  el.style.transform = `
    translateX(${translateWithEasing}px)
  `;

  // RAF
  window.requestAnimationFrame(animateMe);
}

window.requestAnimationFrame(animateMe);
