(()=>{"use strict";var t=document.querySelector("#contents"),e=document.querySelector("#menu"),n=function(t){setTimeout((function(){s(t)}))},s=function(e){t.innerHTML=e};e.addEventListener("click",(function(t){switch(t.preventDefault(),t.target.classList[0]){case"login":n('\n  <section id="login">\n\n  </section>\n');break;case"plans":n('\n  <section id="plans">\n\n  </section>\n');break;case"aboutUs":n('\n  <section id="aboutUs">\n\n  </section>\n');break;case"cart":n('\n  <section id="cart">\n\n  </section>\n');break;case"contacts":n('\n  <section id="contacts">\n    \n  </section>\n')}})),document.addEventListener("click",(function(t){var n=t.target;n.classList.contains("fa-list")?(e.style.height="97vh",n.classList="fa-solid fa-xmark"):n.classList.contains("fa-xmark")&&"i"===n.tagName.toLowerCase()&&(e.style.height="50px",n.classList="fa-solid fa-list"),n.classList.contains("fa-list")||"i"===n.tagName.toLowerCase()||(document.querySelector(".fa-xmark").classList="fa-solid fa-list",e.style.height="50px")}));var a=ScrollReveal({origin:"top",distance:"50px",duration:2e3});a.reveal(".hidden",{delay:200}),a.reveal(".hidden",{interval:200})})();
//# sourceMappingURL=bundle.js.map