import AnimaScroll from "./modules/anima-scroll-controller.js";
import CursorController from "./modules/cursor-controller.js";
import initLenisSmoothScroll from "./modules/smooth-scroll-controller.js";
import initScrollToTarget from "./modules/scroll-target-controller.js";
import initMagnetEffect from "./modules/magnet-effect.js";
import initLightDarkMode from "./modules/light-dark-mode.js";
import initObfuscation from "./modules/email-obfuscation.js";

const animaScroll = new AnimaScroll('[data-anima="line"]');
animaScroll.init();

const cursorController = new CursorController('[data-cursor="custom"]', "[data-hover]");
cursorController.init();

initLenisSmoothScroll();
initScrollToTarget();
initMagnetEffect();
initLightDarkMode();
initObfuscation();
