export default function initObfuscation() {
  const emailElementsMarquee = document.querySelectorAll("[data-mail]");

  const user = "joe.lopes";
  const domain = "outlook.com";

  emailElementsMarquee.forEach((el) => {
    el.setAttribute("href", `mailto:${user}@${domain}`);
  });
}
