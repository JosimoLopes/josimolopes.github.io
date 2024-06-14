export default function initMagnetEffect() {
  const magnetTargets = document.querySelectorAll('[data-magnet="target"]');

  const handleMouseMove = (e) => {
    const move = 15;
    const x = e.offsetX;
    const y = e.offsetY;
    const targetWidth = e.currentTarget.offsetWidth;
    const targetHeight = e.currentTarget.offsetHeight;
    const transX = (x / targetWidth) * (move * 2) - move;
    const transY = (y / targetHeight) * (move * 2) - move;

    if (window.innerWidth > 780) e.currentTarget.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  };

  const resetIconPosition = (el) => {
    el.style.transform = "";
  };

  const handleMouseOut = (e) => {
    resetIconPosition(e.currentTarget);
  };

  magnetTargets.forEach((t) => {
    t.addEventListener("mousemove", handleMouseMove);
    t.addEventListener("mouseout", handleMouseOut);
  });
}
