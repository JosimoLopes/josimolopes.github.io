export default function initPreload() {
  const preloadMask = document.querySelector("[data-preload]");
  const sections = document.querySelectorAll("[data-load]");

  const activeSection = () => {
    sections.forEach((s) => {
      s.classList.add("active");
    });
  };

  const removeMask = () => {
    preloadMask.classList.add("remove");
  };

  const handleLoad = () => {
    setTimeout(() => {
      removeMask();
      activeSection();
    }, 2200);
  };

  window.addEventListener("load", handleLoad);
}
