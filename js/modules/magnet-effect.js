export default function initMagnetEffect() {
  const elBox = document.querySelectorAll('[data-magnet="box"]');

  const handleMouseMove = (e) => {
    const elTarget = e.currentTarget.querySelector("span");
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;

    const move = 20;
    const xMove = (x / width) * (move * 2) - move;
    const yMove = (y / height) * (move * 2) - move;

    handleMouseOut.elTarget = elTarget;

    if (window.innerWidth >= 780) {
      elTarget.style.transform = `translate(${xMove}px, ${yMove}px)`;
    }
  };

  const handleMouseOut = {
    elTarget: "",
    handleEvent() {
      this.elTarget.style.transform = "";
    },
  };

  elBox.forEach((el) => {
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseout", handleMouseOut);
  });
}
