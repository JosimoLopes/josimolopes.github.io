export default function initObfuscation() {
  const emailElements = document.querySelectorAll('a[href^="mailto:"]');
  const emailElementsMarquee = document.querySelectorAll("[data-mail]");

  const user = "joe.lopes";
  const domain = "outlook.com";

  emailElementsMarquee.forEach((el) => {
    el.setAttribute("href", `mailto:${user}@${domain}`);
  });

  window.addEventListener("load", (e) => {
    emailElements.forEach((el) => {
      console.log(el.innerText);
      el.href = el.href + el.innerText;
    });
  });
}
