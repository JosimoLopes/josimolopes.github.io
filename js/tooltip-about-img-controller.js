export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((t) => {
    t.addEventListener("mouseover", handleMouseOver);
  });

  function handleMouseOver(e) {
    const tooltipBox = createTooltipBox();

    let x = e.pageX + 20;
    let y = e.pageY + 20;

    tooltipBox.setAttribute("style", `top: ${y}px; left: ${x}px`);

    handleMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", handleMouseMove);

    handleMouseLeave.tooltipBox = tooltipBox;
    handleMouseLeave.element = this;
    this.addEventListener("mouseleave", handleMouseLeave);
  }

  const handleMouseMove = {
    tooltipBox: "",
    handleEvent(e) {
      setTimeout(() => {
        this.tooltipBox.style.top = e.pageY + 20 + "px";
        this.tooltipBox.style.left = e.pageX + 20 + "px";
      }, 150);
    },
  };

  const handleMouseLeave = {
    tooltipBox: "",
    element: "",
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", handleMouseLeave);
    },
  };

  function createTooltipBox() {
    const tooltipBox = document.createElement("div");
    tooltipBox.innerHTML = '<img src="/img/josimo1.2.jpeg" alt="">';
    tooltipBox.classList.add("img-tooltip");
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
