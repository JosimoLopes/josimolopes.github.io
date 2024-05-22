export default function initScrollToTarget() {
  const internalAnchors = document.querySelectorAll('a[href^="#"]');

  internalAnchors.forEach((a) => {
    a.addEventListener("click", scrollToTarget);
  });

  function scrollToTarget(e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
