!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body"),n=null;function r(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){n=setInterval(r,1e3),t.toggleAttribute("disabled")})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.toggleAttribute("disabled"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.59b9e7bb.js.map