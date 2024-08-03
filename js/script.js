import AnimaScroll from "./modules/anima-scroll-controller.js";
import initCursor from "./modules/cursor-controller.js";
import initLenisSmoothScroll from "./modules/smooth-scroll-controller.js";
import initScrollToTarget from "./modules/scroll-target-controller.js";
import initMagnetEffect from "./modules/magnet-effect.js";
import initLightDarkMode from "./modules/light-dark-mode.js";
import initObfuscation from "./modules/email-obfuscation.js";

const animaScroll = new AnimaScroll('[data-anima="line"]');
animaScroll.init();

initCursor();
initLenisSmoothScroll();
initScrollToTarget();
initMagnetEffect();
initLightDarkMode();
initObfuscation();
