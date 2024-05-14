export default function initMagnetEffect() {
  const magnetTargets = document.querySelectorAll('[data-magnet="target"]');
  magnetTargets.forEach((t) => {
    t.addEventListener("mousemove", handleMouseMove);
    t.addEventListener("mouseout", handleMouseOut);
  });

  function handleMouseOut() {
    resetIconPosition(this);
    // this.removeEventListener("mousemove", handleMouseMove);
  }

  function resetIconPosition(el) {
    el.style.transform = "";
    // el.style.transition = "transform 0.2s";
  }

  function handleMouseMove(e) {
    const move = 15;
    const x = e.offsetX;
    const y = e.offsetY;
    const targetWidth = this.offsetWidth;
    const targetHeight = this.offsetHeight;
    const transX = (x / targetWidth) * (move * 2) - move;
    const transY = (y / targetHeight) * (move * 2) - move;
    this.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  }
}
