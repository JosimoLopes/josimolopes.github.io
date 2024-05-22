export default function initMagnetEffect() {
  const magnetTargets = document.querySelectorAll('[data-magnet="target"]');
  magnetTargets.forEach((t) => {
    t.addEventListener("mousemove", handleMouseMove);
    t.addEventListener("mouseout", handleMouseOut);
  });

  function handleMouseOut() {
    resetIconPosition(this);
  }

  function resetIconPosition(el) {
    el.style.transform = "";
  }

  function handleMouseMove(e) {
    const move = 15;
    const x = e.offsetX;
    const y = e.offsetY;
    const targetWidth = this.offsetWidth;
    const targetHeight = this.offsetHeight;
    const transX = (x / targetWidth) * (move * 2) - move;
    const transY = (y / targetHeight) * (move * 2) - move;

    if (window.innerWidth > 780) this.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  }
}
