export default function initMagnetEffect() {}

const elementsHover = document.querySelectorAll('[data-anima="hover"]');
const elementsMagnet = document.querySelectorAll('[data-anima="magnet"]');

elementsHover.forEach((el) => {
  el.addEventListener("mouseenter", handleMouseEnter);
});

function handleMouseEnter() {
  handleMouseLeave.element = this;

  this.addEventListener("mousemove", handleMouseMove);
  this.addEventListener("mouseleave", handleMouseLeave);
}

const handleMouseLeave = {
  element: "",
  handleEvent() {
    resetIconPosition();
    this.element.removeEventListener("mousemove", handleMouseMove);
  },
};

function resetIconPosition() {
  elementsMagnet.forEach((el) => {
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.2s ease";
  });
}

function handleMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const transformX = (x - 50) / 1.2;
  const transformY = (y - 50) / 1.2;

  elementsMagnet.forEach((el) => {
    el.setAttribute("style", `transform: translate(${transformX}px, ${transformY}px)`);
  });
}
