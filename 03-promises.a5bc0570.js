!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),a=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');document.querySelector("button").addEventListener("click",(function(n){n.preventDefault();var t=parseInt(a.value);setTimeout((function(){for(var n=function(n){setTimeout((function(){var o,r;o=n+1,r=t,Math.random()>.3?e(u).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(r,"ms")):e(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(r,"ms")),parseInt(i.value),t+=parseInt(i.value)}),parseInt(i.value)*n)},o=0;o<l.value;o++)n(o)}),parseInt(a.value))}))}();
//# sourceMappingURL=03-promises.a5bc0570.js.map