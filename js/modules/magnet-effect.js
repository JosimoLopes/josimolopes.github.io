export default function initMagnetEffect() {
  const magnetTargets = document.querySelectorAll('[data-magnet="target"]');

  const handleMouseMove = ({ offsetX, offsetY, currentTarget }) => {
    const [move, x, y] = [20, offsetX, offsetY];
    const [targetHeight, targetWidth] = [currentTarget.offsetWidth, currentTarget.offsetHeight];
    const [transX, transY] = [(x / targetWidth) * move, (y / targetHeight) * move];

    if (window.innerWidth >= 780) {
      currentTarget.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
    }
  };

  const resetIconPosition = (el) => {
    el.style.transform = "";
  };

  const handleMouseOut = ({ currentTarget }) => {
    resetIconPosition(currentTarget);
  };

  magnetTargets.forEach((t) => {
    t.addEventListener("mousemove", handleMouseMove);
    t.addEventListener("mouseout", handleMouseOut);
  });
}
