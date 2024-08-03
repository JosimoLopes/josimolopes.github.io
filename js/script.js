import AnimaScroll from "./modules/anima-scroll-controller.js";
import CursorController from "./modules/cursor-controller.js";
import initLenisSmoothScroll from "./modules/smooth-scroll-controller.js";
import initScrollToTarget from "./modules/scroll-target-controller.js";
import initMagnetEffect from "./modules/magnet-effect.js";
import initLightDarkMode from "./modules/light-dark-mode.js";
import EmailObfuscation from "./modules/email-obfuscation.js";

const animaScroll = new AnimaScroll('[data-anima="line"]', 500);
animaScroll.init();

const cursorController = new CursorController('[data-cursor="custom"]', "[data-hover]");
cursorController.init();

const emailObfuscation = new EmailObfuscation("[data-mail]", "joe.lopes", "outlook.com");
emailObfuscation.init();

initLenisSmoothScroll();
initScrollToTarget();
initMagnetEffect();
initLightDarkMode();
