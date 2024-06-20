export default function initObfuscation() {
  const emailElementsMarquee = document.querySelectorAll("[data-mail]");

  const [user, domain] = ["joe.lopes", "outlook.com"];

  emailElementsMarquee.forEach((el) => {
    el.setAttribute("href", `mailto:${user}@${domain}`);
  });
}
