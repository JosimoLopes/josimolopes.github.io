export default function initScrollToTarget() {
  const internalAnchors = document.querySelectorAll('a[href^="#"]');

  const scrollToTarget = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  internalAnchors.forEach((a) => {
    a.addEventListener("click", scrollToTarget);
  });
}
