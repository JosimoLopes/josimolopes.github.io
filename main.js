(()=>{"use strict";function t(t,e,i){return Math.max(t,Math.min(e,i))}class e{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.duration=0,this.currentTime=0}advance(e){var i;if(!this.isRunning)return;let s=!1;if(this.duration&&this.easing){this.currentTime+=e;const i=t(0,this.currentTime/this.duration,1);s=i>=1;const o=s?1:this.easing(i);this.value=this.from+(this.to-this.from)*o}else this.lerp?(this.value=function(t,e,i,s){return function(t,e,i){return(1-i)*t+i*e}(t,e,1-Math.exp(-i*s))}(this.value,this.to,60*this.lerp,e),Math.round(this.value)===this.to&&(this.value=this.to,s=!0)):(this.value=this.to,s=!0);s&&this.stop(),null===(i=this.onUpdate)||void 0===i||i.call(this,this.value,s)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:s,easing:o,onStart:n,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=r}}class i{constructor({wrapper:t,content:e,autoResize:i=!0,debounce:s=250}={}){this.width=0,this.height=0,this.scrollWidth=0,this.scrollHeight=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):this.wrapper instanceof HTMLElement&&(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):this.wrapper instanceof HTMLElement&&(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},this.wrapper=t,this.content=e,i&&(this.debouncedResize=function(t,e){let i;return function(){let s=arguments,o=this;clearTimeout(i),i=setTimeout((function(){t.apply(o,s)}),e)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(e=this.contentResizeObserver)||void 0===e||e.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class s{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let t=0,s=i.length;t<s;t++)i[t](...e)}on(t,e){var i;return(null===(i=this.events[t])||void 0===i?void 0:i.push(e))||(this.events[t]=[e]),()=>{var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter((t=>e!==t))}}off(t,e){var i;this.events[t]=null===(i=this.events[t])||void 0===i?void 0:i.filter((t=>e!==t))}destroy(){this.events={}}}const o=100/6;class n{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=1}){this.lastDelta={x:0,y:0},this.windowWidth=0,this.windowHeight=0,this.onTouchStart=t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{var e,i,s,o;const{clientX:n,clientY:r}=t.targetTouches?t.targetTouches[0]:t,l=-(n-(null!==(i=null===(e=this.touchStart)||void 0===e?void 0:e.x)&&void 0!==i?i:0))*this.touchMultiplier,h=-(r-(null!==(o=null===(s=this.touchStart)||void 0===s?void 0:s.y)&&void 0!==o?o:0))*this.touchMultiplier;this.touchStart.x=n,this.touchStart.y=r,this.lastDelta={x:l,y:h},this.emitter.emit("scroll",{deltaX:l,deltaY:h,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t;e*=1===s?o:2===s?this.windowWidth:1,i*=1===s?o:2===s?this.windowHeight:1,e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})},this.onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new s,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel),this.element.removeEventListener("touchstart",this.onTouchStart),this.element.removeEventListener("touchmove",this.onTouchMove),this.element.removeEventListener("touchend",this.onTouchEnd)}}class r{constructor({wrapper:t=window,content:o=document.documentElement,wheelEventsTarget:r=t,eventsTarget:l=r,smoothWheel:h=!0,syncTouch:a=!1,syncTouchLerp:c=.075,touchInertiaMultiplier:d=35,duration:u,easing:p=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:m=.1,infinite:v=!1,orientation:g="vertical",gestureOrientation:S="vertical",touchMultiplier:w=1,wheelMultiplier:f=1,autoResize:y=!0,prevent:E,virtualScroll:L,__experimental__naiveDimensions:T=!1}={}){this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;const{deltaX:e,deltaY:i,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey)return;const o=s.type.includes("touch"),n=s.type.includes("wheel");if(this.isTouching="touchstart"===s.type||"touchmove"===s.type,this.options.syncTouch&&o&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const r=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(r||l)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const a=this.options.prevent;if(h.find((t=>{var e,i,s,r,l;return t instanceof Element&&("function"==typeof a&&(null==a?void 0:a(t))||(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent"))||o&&(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent-touch"))||n&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis"))&&!(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis-stopped")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=i;"both"===this.options.gestureOrientation?c=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(c=e);const d=o&&this.options.syncTouch,u=o&&"touchend"===s.type&&Math.abs(c)>5;u&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},d?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(clearTimeout(this.__resetVelocityTimeout),delete this.__resetVelocityTimeout,this.__preventNextNativeScrollEvent)delete this.__preventNextNativeScrollEvent;else if(!1===this.isScrolling||"native"===this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this.__resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()}),400))}},window.lenisVersion="1.1.9",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:o,wheelEventsTarget:r,eventsTarget:l,smoothWheel:h,syncTouch:a,syncTouchLerp:c,touchInertiaMultiplier:d,duration:u,easing:p,lerp:m,infinite:v,gestureOrientation:S,orientation:g,touchMultiplier:w,wheelMultiplier:f,autoResize:y,prevent:E,virtualScroll:L,__experimental__naiveDimensions:T},this.animate=new e,this.emitter=new s,this.dimensions=new i({wrapper:t,content:o,autoResize:y}),this.updateClassName(),this.userData={},this.time=0,this.velocity=this.lastVelocity=0,this.isLocked=!1,this.isStopped=!1,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new n(l,{touchMultiplier:w,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(e,{offset:i=0,immediate:s=!1,lock:o=!1,duration:n=this.options.duration,easing:r=this.options.easing,lerp:l=this.options.lerp,onStart:h,onComplete:a,force:c=!1,programmatic:d=!0,userData:u={}}={}){if(!this.isStopped&&!this.isLocked||c){if("string"==typeof e&&["top","left","start"].includes(e))e=0;else if("string"==typeof e&&["bottom","right","end"].includes(e))e=this.limit;else{let t;if("string"==typeof e?t=document.querySelector(e):e instanceof HTMLElement&&(null==e?void 0:e.nodeType)&&(t=e),t){if(this.options.wrapper!==window){const t=this.rootElement.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top}const s=t.getBoundingClientRect();e=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof e&&(e+=i,e=Math.round(e),this.options.infinite?d&&(this.targetScroll=this.animatedScroll=this.scroll):e=t(0,e,this.limit),e!==this.targetScroll)){if(this.userData=u,s)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==a||a(this),void(this.userData={});d||(this.targetScroll=e),this.animate.fromTo(this.animatedScroll,e,{duration:n,easing:r,lerp:l,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling="smooth",null==h||h(this)},onUpdate:(t,e)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),d&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),null==a||a(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this.__preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextNativeScrollEvent}))}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(t,e){return(t%e+e)%e}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.updateClassName())}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.updateClassName())}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}new class{constructor(t,e){this.lines=document.querySelectorAll(t),this.activeClass="active-line",this.rectTop=e,this.handleScroll=this.handleScroll.bind(this)}addActiveClass=()=>{this.lines.forEach((t=>{t.getBoundingClientRect().top-this.rectTop<0?t.classList.add(this.activeClass):t.classList.remove(this.activeClass)}))};handleScroll(){this.addActiveClass()}addScrollEvent(){window.addEventListener("scroll",this.handleScroll),this.addActiveClass()}init(){return this.lines.length&&this.addScrollEvent(),this}}('[data-anima="line"]',500).init(),new class{constructor(t,e){this.cursor=document.querySelector(t),this.hoverElements=document.querySelectorAll(e),this.classActive="active",this.handleCursorPosition=this.handleCursorPosition.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this)}activeCursor(t,e){t&&e&&this.cursor.classList.add(this.classActive)}handleCursorPosition({pageX:t,pageY:e}){const[i,s]=[t-scrollX,e-scrollY];this.cursor.style.top=s-8+"px",this.cursor.style.left=i-8+"px",this.activeCursor(i,s)}handleMouseEnter({currentTarget:t}){t.classList.contains("logo")?this.cursor.classList.add("scaleLogo"):this.cursor.classList.add("scale")}handleMouseLeave(){this.cursor.classList.remove("scale","scaleLogo")}addCursorEvent(){window.addEventListener("mousemove",this.handleCursorPosition),this.hoverElements.forEach((t=>{t.addEventListener("mouseenter",this.handleMouseEnter),t.addEventListener("mouseleave",this.handleMouseLeave)}))}init(){return this.cursor,this.hoverElements&&this.addCursorEvent(),this}}('[data-cursor="custom"]',"[data-hover]").init(),new class{constructor(t,e,i){this.emails=document.querySelectorAll(t),this.user=e,this.domain=i}obfuscate(){this.emails.forEach((t=>{t.setAttribute("href",`mailto:${this.user}@${this.domain}`)}))}init(){return this.emails.length&&this.obfuscate(),this}}("[data-mail]","joe.lopes","outlook.com").init(),function(){const t=new r;requestAnimationFrame((function e(i){t.raf(i),requestAnimationFrame(e)}))}(),function(){const t=document.querySelectorAll('a[href^="#"]'),e=t=>{t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"center"})};t.forEach((t=>{t.addEventListener("click",e)}))}(),function(){const t=document.querySelectorAll('[data-magnet="box"]'),e=t=>{const e=t.currentTarget.querySelector("span"),{offsetX:s,offsetY:o}=t,{offsetWidth:n,offsetHeight:r}=t.currentTarget,l=s/n*40-20,h=o/r*40-20;i.elTarget=e,window.innerWidth>=780&&(e.style.transform=`translate(${l}px, ${h}px)`)},i={elTarget:"",handleEvent(){this.elTarget.style.transform=""}};t.forEach((t=>{t.addEventListener("mousemove",e),t.addEventListener("mouseout",i)}))}(),function(){const t=document.querySelector('[data-toggle="light-dark"]'),e=document.querySelector(":root");let i=localStorage.getItem("mode");i&&"light"===i&&(t.classList.add("active"),e.classList.add("light")),t.addEventListener("click",(t=>(t.currentTarget.classList.toggle("active"),e.classList.toggle("light"),e.classList.contains("light")?localStorage.setItem("mode","light"):localStorage.setItem("mode","dark"))))}()})();