(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>u});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),d=t(417),c=t.n(d),l=new URL(t(650),t.b),s=i()(o()),m=c()(l);s.push([e.id,`html, body {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    background-image: url(${m});\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#content {\n    display: grid;\n    background-color: rgb(41, 128, 41);\n    width: 70%;\n    border-radius: 10%;\n    justify-items: center;\n    text-align: center;\n}\n\n#content > p {\n    font-size: 1.5em;\n    margin: 0 10%;\n}\n\nimg {\n    width: 100px;\n    position: relative;\n    top: -20px;\n}\n\n#content > h1 {\n    font-size: 3em;\n}\n\n#content > div {\n    outline: 5px rgb(190, 24, 24) solid; border-radius: 30%;\n    background-color: rgb(206, 81, 81);\n    padding: 3% 10%;\n    margin: 5%;\n}\n\n#content > #menuTitle {\n    font-size: 2.5em;\n    font-weight: bold;\n    background-color: rgb(155, 55, 55);\n}\n\n#menuTitle + div {\n    position: relative;\n    top: -12%;\n}\n\n#attribution {\n    display: flex;\n    justify-content: space-around;\n    gap: 5em;\n    background-color: rgb(41, 128, 41);\n    width: 100%;\n    margin-top: 5%;\n}\n\n#attribution p a {\n    text-decoration: none;\n    color: black;\n}\n\nheader {\n    background-color: rgb(41, 128, 41);\n    width: 100%;\n    height: 5em;\n    margin-bottom: 5%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader button {\n    font-size: 3em;\n    margin-left: 0.5em;\n    margin-right: 0.5em;\n    background-color: rgba(0, 0, 0, 0);\n    outline: 2px white solid;\n}\n\n#home:not([disabled]):hover, #menu:not([disabled]):hover, #about:not([disabled]):hover {\n    cursor: pointer;\n    background-color: white;\n}`,""]);const u=s},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=a[l]||0,m="".concat(l," ").concat(s);a[l]=s+1;var u=t(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=o(p,r);r.byIndex=d,n.splice(d,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},650:(e,n,t)=>{e.exports=t.p+"fd8be9f90c1b983eb162.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}function r(){const e=document.querySelector("#content"),n=document.createElement("img"),t=document.createElement("h1"),r=document.createElement("p"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("h1");i.innerHTML="Opening Hours";const d=document.createElement("p");d.innerHTML="Monday: 11am - 9pm";const c=document.createElement("p");c.innerHTML="Tuesday: 11am - 9pm";const l=document.createElement("p");l.innerHTML="Wednesday: CLOSED";const s=document.createElement("p");s.innerHTML="Thursday: 11am - 9pm";const m=document.createElement("p");m.innerHTML="Friday: 11am - 11pm";const u=document.createElement("p");u.innerHTML="Saturday: 11am - 11pm";const p=document.createElement("p");p.innerHTML="Sunday: 11am - 9pm",o.appendChild(i),o.appendChild(d),o.appendChild(c),o.appendChild(l),o.appendChild(s),o.appendChild(m),o.appendChild(u),o.appendChild(p);const h=document.createElement("h1");h.innerHTML="Locate Us";const f=document.createElement("p");f.innerHTML="123 Water Drive, Melonville, WMLand",a.appendChild(h),a.appendChild(f),n.src="../src/images/watermelonlogo.png",n.alt="image of a watermelon",t.innerHTML="The Watermelon Restaurant",r.innerHTML="The Watermelon Restaurant hosts a menu of dishes focused on the natural taste of watermelon, and showcases the creativity of our chefs in making many different dishes from the fruit.",e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(a);const g=document.getElementById("home"),v=document.getElementById("menu"),b=document.getElementById("about");g.disabled=!0,v.disabled=!1,b.disabled=!1}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),a=t.n(o),i=t(825),d=t.n(i),c=t(659),l=t.n(c),s=t(56),m=t.n(s),u=t(540),p=t.n(u),h=t(113),f=t.n(h),g=t(208),v={};v.styleTagTransform=f(),v.setAttributes=m(),v.insert=l().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=p(),a()(g.A,v),g.A&&g.A.locals&&g.A.locals,r();const b=document.querySelector("#content"),y=document.querySelector("#home"),E=document.querySelector("#menu"),C=document.querySelector("#about");y.addEventListener("click",(()=>{let e=b.firstElementChild;for(;e;)b.removeChild(e),e=b.firstElementChild;r()})),E.addEventListener("click",(()=>{let e=b.firstElementChild;for(;e;)b.removeChild(e),e=b.firstElementChild;!function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("div");t.innerHTML="Appetizers",t.setAttribute("id","menuTitle");const r=document.createElement("div"),o=document.createElement("h1");o.innerHTML="Watermelon Fries";const a=document.createElement("p");a.innerHTML="Crsipy fries made from watermelon rind",r.appendChild(o),r.appendChild(a);const i=document.createElement("div"),d=document.createElement("h1");d.innerHTML="Watermelon Salad";const c=document.createElement("p");c.innerHTML="Fresh salad of lettuce, spring greens, onions, and watermelon",i.appendChild(d),i.appendChild(c),n.appendChild(r),n.appendChild(i);const l=document.createElement("div"),s=document.createElement("div");s.innerHTML="Mains",s.setAttribute("id","menuTitle");const m=document.createElement("div"),u=document.createElement("h1");u.innerHTML="Watermelon Steak";const p=document.createElement("p");p.innerHTML="Beef steak cooked with a homemade watermelon sauce",m.appendChild(u),m.appendChild(p);const h=document.createElement("div"),f=document.createElement("h1");f.innerHTML="Watermelon Burger";const g=document.createElement("p");g.innerHTML="Classic burger with homemade watermelon sauce and a fresh slice of watermelon",h.appendChild(f),h.appendChild(g);const v=document.createElement("div"),b=document.createElement("h1");b.innerHTML="Watermelon Pasta";const y=document.createElement("p");y.innerHTML="Handmade pasta with unqiue tomato-watermelon sauce",v.appendChild(b),v.appendChild(y),l.appendChild(m),l.appendChild(h),l.appendChild(v);const E=document.createElement("div"),C=document.createElement("div");C.innerHTML="Desserts",C.setAttribute("id","menuTitle");const T=document.createElement("div"),w=document.createElement("h1");w.innerHTML="Watermelon Pie";const M=document.createElement("p");M.innerHTML="Freshly baked pies with watermelon filling",T.appendChild(w),T.appendChild(M);const L=document.createElement("div"),H=document.createElement("h1");H.innerHTML="Watermelon Icecream";const x=document.createElement("p");x.innerHTML="Sweet watermelon flavored icecream",L.appendChild(H),L.appendChild(x),E.appendChild(T),E.appendChild(L),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(l),e.appendChild(C),e.appendChild(E);const S=document.getElementById("home"),k=document.getElementById("menu"),I=document.getElementById("about");S.disabled=!1,k.disabled=!0,I.disabled=!1}()})),C.addEventListener("click",(()=>{let e=b.firstElementChild;for(;e;)b.removeChild(e),e=b.firstElementChild;!function(){const e=document.querySelector("#content"),n=document.createElement("div"),t=document.createElement("h1");t.innerHTML="Contact Us";const r=document.createElement("p"),o=document.createElement("p"),a=document.createElement("p");r.innerHTML="We can be contacted via phone during opening hours or via email",o.innerHTML="+1 555 555 555",a.innerHTML="thewatermelonrestaurant@watermelonmail.com",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a);const i=document.createElement("div"),d=document.createElement("h1");d.innerHTML="Our History";const c=document.createElement("p");c.innerHTML="The Watermelon Restaurant was opened in 2000 by a group of friends who were enthusiasts of the fruit. Being a team of a past business owner and 2 chefs, they worked hard at incorporating watermelon into each of their dishes, where it is the main star for some but supporting cast for others. Their love for watermelon has kept them together through tough times and allowed the business to continue to flourish. When asked about plans to expand their business, all that was said was that they wanted to focus on the quality of the food they put out to their customers, and that they did not want the pursuit of money to get in the way of their love for what they do.",i.appendChild(d),i.appendChild(c),e.appendChild(n),e.appendChild(i);const l=document.getElementById("home"),s=document.getElementById("menu"),m=document.getElementById("about");l.disabled=!1,s.disabled=!1,m.disabled=!0}()}))})();