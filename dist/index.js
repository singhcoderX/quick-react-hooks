!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactEasyHooks=t(require("react")):e.ReactEasyHooks=t(e.react)}(this,(e=>(()=>{"use strict";var t={155:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};n.r(o),n.d(o,{useMediaQueryScreen:()=>d});var i=n(155),a={small:"(max-width: 671px)",medium:"(min-width: 672px) and (max-width: 979px)",large:"(min-width: 980px) and (max-width: 1259px)",largeplus:"(min-width: 1260px)"},c=Object.keys(a).reverse(),s=function(e){var t={is_small:!1,is_medium:!1,is_large:!1,is_largeplus:!1};return c.includes(e)&&c.forEach((function(r){r==e&&(t["is_"+r]=!0)})),t},u=function(){var e="";return null!=typeof window&&c.forEach((function(t){var r=window.matchMedia(a[t]);!e&&(null==r?void 0:r.matches)&&(e=t)})),e};const d=function(){var e=(0,i.useState)({screen:u(),screenProps:s(u())}),t=e[0],r=e[1];(0,i.useEffect)((function(){var e=[];return c.map((function(t,r){e[r]=window.matchMedia(a[t]),e[r].addEventListener("change",n)})),function(){e.map((function(e){e.removeEventListener("change",n)}))}}),[]);var n=function(e){if(null==e?void 0:e.matches){var t=u();o(t)}},o=function(e){if(!t||e!=t.screen){var n={screen:e,screenProps:s(e)};r(n)}};return t};return o})()));
//# sourceMappingURL=index.js.map