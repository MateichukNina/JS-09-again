!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e,n=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),o=document.body;n.addEventListener("click",(function(){var d=t();o.style.backgroundColor=d,n.disabled=!0,a.disabled=!1,e=setInterval((function(){var e=t();o.style.background=e}),1e3)})),a.addEventListener("click",(function(){n.disabled=!1,a.disabled=!0,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.f14edce1.js.map