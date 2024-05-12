export default function initAnimaScroll() {
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

  addActive();

  window.addEventListener("scroll", handleScroll);
}
