function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");const u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),i=document.querySelector('[name="amount"]');document.querySelector("button").addEventListener("click",(t=>{t.preventDefault();let n=parseInt(u.value);setTimeout((()=>{for(let t=0;t<i.value;t++)setTimeout((()=>{var r,o;r=t+1,o=n,Math.random()>.3?e(l).Notify.success(`✅ Fulfilled promise ${r} in ${o}ms`):e(l).Notify.failure(`❌ Rejected promise ${r} in ${o}ms`),parseInt(a.value),n+=parseInt(a.value)}),parseInt(a.value)*t)}),parseInt(u.value))}));
//# sourceMappingURL=03-promises.a88d62a8.js.map
