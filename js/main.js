(()=>{"use strict";var e={482:(e,t,n)=>{var o=n(120),a=n(429),d=n(847),r=n(23);const s=document.querySelector(".modal");if(s){const e=(0,a.t)(s);document.querySelectorAll("[data-modal-content]").forEach(e)}document.querySelectorAll(".slider").forEach(o.u),document.querySelectorAll(".range").forEach(d.o),document.querySelectorAll(".number-range").forEach(r.H)},429:(e,t,n)=>{n.d(t,{t:()=>a});var o=n(832);const a=e=>{const t=e.querySelector(".modal__close"),n=e.querySelector(".modal__content"),a=e.querySelectorAll(".modal__focus-stop");let d=[],r=null;const s=()=>{d[0].focus()},l=()=>{d[d.length-1].focus()},u=()=>{document.querySelector(".modal--open").classList.remove("modal--open"),document.body.classList.remove("page__body--no-scroll"),document.removeEventListener("keydown",i),document.body.style.paddingRight="0",r.focus(),a[0].removeEventListener("focus",l),a[1].removeEventListener("focus",s),n.innerHTML=""},i=e=>{(0,o.U)(e)&&(e.preventDefault(),u())};return t.addEventListener("click",u),t=>{t.remove();const u=t.dataset.modalContent;t.classList.add(`modal__${u}`),document.querySelectorAll(`[data-modal-open=${u}]`).forEach((u=>{u.addEventListener("click",(u=>{u.preventDefault(),(t=>{const r=document.body.clientWidth;n.appendChild(t),e.classList.add("modal--open"),document.body.classList.add("page__body--no-scroll"),document.body.clientWidth>r&&(document.body.style.paddingRight=document.body.clientWidth-r+"px"),document.addEventListener("keydown",i),d=(0,o.G)(e.querySelector(".modal__inner")),d[0].focus(),a[0].addEventListener("focus",l),a[1].addEventListener("focus",s)})(t),r=u.target.closest("[data-modal-open]")}))}))}}},23:(e,t,n)=>{n.d(t,{H:()=>o});const o=e=>{const t=e.querySelector(".range"),n=e.querySelector(".number-range__min .number-field__control"),o=e.querySelector(".number-range__max .number-field__control"),a=o.max,d=(e,n)=>{t.dataset[`${e}Value`]=n/a*100,t.style.setProperty(`--button-${e}-position`,`${t.dataset[`${e}Value`]}%`)},r=e=>{+e.value<+e.min&&(e.value=e.min),+e.value>+e.max&&(e.value=e.max)};n.addEventListener("input",(()=>{r(n),+n.value>+o.value&&(o.value=n.value,d("max",o.value)),d("min",n.value)})),o.addEventListener("input",(()=>{r(o),+o.value<+n.value&&(n.value=o.value,d("min",n.value)),d("max",o.value)})),t.addEventListener("change",(()=>{n.value=Math.round(a*t.dataset.minValue/100),o.value=Math.round(a*t.dataset.maxValue/100)})),d("min",n.value),d("max",o.value)}},847:(e,t,n)=>{n.d(t,{o:()=>o});const o=e=>{const t=new Event("change",{bubbles:!0}),n=e.querySelector(".range__button--min"),o=e.querySelector(".range__button--max"),a=n.offsetWidth/2;let d=0,r=0,s=0,l=0,u=0,i=0,c=null,m=0;const v=e=>{let t=m+e;return t<l?t=l:t>u&&(t=u),(t-l)/r*100},y=a=>{c===n&&(e.dataset.minValue=a,e.style.setProperty("--button-min-position",`${e.dataset.minValue}%`),+e.dataset.minValue>+e.dataset.maxValue&&(e.dataset.maxValue=e.dataset.minValue,e.style.setProperty("--button-max-position",`${e.dataset.maxValue}%`))),c===o&&(e.dataset.maxValue=a,e.style.setProperty("--button-max-position",`${e.dataset.maxValue}%`),+e.dataset.maxValue<+e.dataset.minValue&&(e.dataset.minValue=e.dataset.maxValue,e.style.setProperty("--button-min-position",`${e.dataset.minValue}%`))),e.dispatchEvent(t)},b=e=>{const t=e.clientX||e.touches[0].clientX;y(v(t-i))},_=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",_),c.classList.remove("range__button--active")},p=t=>{c=t.target,d=e.getBoundingClientRect().x,r=e.getBoundingClientRect().width,s=d+r,l=d-a,u=s-a,m=c.getBoundingClientRect().x,t.key||(c.classList.add("range__button--active"),i=t.clientX||t.touches[0].clientX,document.addEventListener("mousemove",b),document.addEventListener("mouseup",_),document.addEventListener("touchmove",b),document.addEventListener("touchend",_)),console.log(t),console.log(t.clientX)},L=e=>{let t=1;"ArrowRight"===e.key&&e.preventDefault(),"ArrowLeft"===e.key&&(e.preventDefault(),t*=-1),p(e),y(v(t))};n.addEventListener("mousedown",p),o.addEventListener("mousedown",p),n.addEventListener("touchstart",p),o.addEventListener("touchstart",p),n.addEventListener("keydown",L),o.addEventListener("keydown",L)}},120:(e,t,n)=>{n.d(t,{u:()=>o});const o=e=>{let t=0;const n=e.querySelectorAll(".slider__item"),o=e.querySelector(".slider__slides-buttons"),a=o.querySelectorAll(".slider__slide-button");o.addEventListener("click",(({target:e})=>{const o=e.closest(".slider__slide-button");var d;o&&(d=o.dataset.number,n[t].classList.remove("slider__item--current"),a[t].classList.remove("slider__slide-button--current"),t=d,n[t].classList.add("slider__item--current"),a[t].classList.add("slider__slide-button--current"))}))}},832:(e,t,n)=>{n.d(t,{G:()=>a,U:()=>d});const o=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","summary:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],a=e=>e.querySelectorAll(o.join()),d=e=>"Escape"===e.key||"Esc"===e.key}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(482),n(429),n(23),n(847),n(120),n(832)})();