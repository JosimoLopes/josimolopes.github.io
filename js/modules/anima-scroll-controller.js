export default function initAnimaScroll() {
  const workElements = document.querySelectorAll('[data-anima="line"]');

  const addActive = () => {
    workElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top - 600;
      if (elementTop < 0) {
        el.classList.add("active-line");
      }
    });
  };

  const handleScroll = () => {
    addActive();
  };

  window.addEventListener("scroll", handleScroll);
}
