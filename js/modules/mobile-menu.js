export default function initMobileMenu() {
  const btn = document.querySelector('[data-menu="button"]');
  const mainMenu = document.querySelector('[data-menu="main"]');
  const userEvents = ["click", "touchstart"];

  userEvents.forEach((e) => {
    btn.addEventListener(e, handleClick);
  });

  function openMenu() {
    btn.classList.toggle("active");
    mainMenu.classList.toggle("active");
  }

  function handleClick(e) {
    e.preventDefault;
    openMenu();
    outsideClick(mainMenu, userEvents, () => {
      btn.classList.remove("active");
      mainMenu.classList.remove("active");
    });
  }

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = "data-outside";

    if (!element.hasAttribute(outside)) {
      events.forEach((e) => {
        setTimeout(() => {
          html.addEventListener(e, handleOutsideClick);
        });
      });
      element.setAttribute(outside, "");
    }

    function handleOutsideClick(e) {
      console.log();
      if (!element.contains(e.target)) {
        element.removeAttribute(outside);

        events.forEach((e) => {
          html.removeEventListener(e, handleOutsideClick);
        });

        callback();
      }
    }
  }
}
