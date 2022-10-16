(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),a=t.n(r),s=t(645),o=t.n(s)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Fugaz+One&family=Staatliches&display=swap);"]),o.push([e.id,"body,\nbutton {\n  background-color: rgb(46, 17, 17);\n  margin: 0;\n  padding: 0;\n  font-family: 'Fugaz One', cursive;\n  text-align: center;\n}\n\n.flex {\n  display: flex;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n#header {\n  background-color: #5e1914;\n  padding: 1rem;\n}\n\n.logo-container,\n.buttons-container {\n  margin: 0.5rem;\n}\n\n.logo {\n  max-width: 12rem;\n  max-height: 12rem;\n}\n\n.nav-btn {\n  border: none;\n  background-color: #ff908b;\n  color: #ec1703;\n  font-size: 18px;\n  font-weight: 1000;\n  margin: 0 0.5rem 0 0.5rem;\n  padding: 0.3rem 0.8rem 0.3rem 0.8rem;\n  border-radius: 0.5rem;\n}\n\n.nav-btn:hover {\n  cursor: pointer;\n}\n\n.page-container {\n  color: #ec1703;\n}\n\n.page {\n  background-color: #5e1914;\n  border: 3px solid #ff908b;\n  border-radius: 0.5rem;\n  padding: 2rem;\n  margin: 2rem;\n}\n\n.heading-icon {\n  font-size: 3rem;\n  margin-right: 0.5rem;\n}\n\n.content-container {\n  background-color: #ff908b;\n  min-width: 40%;\n  border-radius: 0.5rem;\n  border: 3px solid #ec1703;\n  padding: 2rem;\n  margin: 2rem;\n}\n\n.content-heading {\n  font-size: 2rem;\n  padding: 0;\n  margin: 0;\n}\n\n.content,\n.contact,\n.about-us {\n  font-size: 1.3rem;\n  font-family: 'Staatliches', cursive;\n}\n\n.content-img {\n  max-width: 12rem;\n}\n\n.burger-container {\n  justify-content: space-around;\n}\n\n.burger-info-container {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.burger-svg-container,\n.burger-info-container {\n  margin: 0rem 1rem 0rem 1rem;\n  padding: 1rem;\n}\n\n.burger-svg {\n  max-width: 10rem;\n  max-height: 10rem;\n  min-width: 10rem;\n  min-height: 10rem;\n}\n\n.burger-name {\n  font-size: x-large;\n}\n\n.burger-ingredients-container {\n  list-style-type: none;\n  text-align: center;\n  font-size: 1.3rem;\n  padding: 0;\n}\n\n.burger-container {\n  margin: 2rem 1rem 2rem 1rem;\n  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);\n  background-image: linear-gradient(#2e1111, #5e1914);\n  width: 30%;\n}\n\n.burgers-container {\n  flex-wrap: wrap;\n}\n\n.map-img {\n  max-width: 90%;\n  max-height: 90%;\n  margin-top: 1rem;\n}\n\n.burger-ingredients {\n  font-size: 1.3rem;\n  font-family: 'Staatliches', cursive;\n  margin: 0.2rem;\n}\n\n@media only screen and (max-width: 1200px) {\n  .content-img {\n    max-width: 9rem;\n  }\n\n  .content-container {\n    min-width: 35%;\n  }\n\n  .burger-container {\n    width: 45%;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .content-img {\n    max-width: 6rem;\n  }\n\n  .content-container {\n    min-width: 30%;\n  }\n\n  .content,\n  .contact {\n    font-size: 1rem;\n  }\n\n  .heading-icon {\n    font-size: 2rem;\n  }\n\n  .content-heading {\n    font-size: 1.4rem;\n  }\n\n  .burger-container {\n    width: 70%;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .content-img {\n    max-width: 4rem;\n  }\n\n  .about-us {\n    font-size: 1.1rem;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .page-content {\n    display: block;\n    margin: 0;\n  }\n\n  .burger-container {\n    width: 95%;\n  }\n\n  .burger-svg {\n    min-width: 4rem;\n    min-height: 4rem;\n  }\n\n  .burger-name {\n    font-size: 1rem;\n  }\n\n  .content-container {\n    margin: 0 0 1rem 0;\n    padding: 1rem;\n  }\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var p=0;p<e.length;p++){var d=[].concat(e[p]);r&&o[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var s={},o=[],i=0;i<e.length;i++){var c=e[i],p=r.base?c[0]+r.base:c[0],d=s[p]||0,u="".concat(p," ").concat(d);s[p]=d+1;var l=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(m);else{var g=a(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:g,references:1})}o.push(u)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var s=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var i=t(s[o]);n[i].references--}for(var c=r(e,a),p=0;p<s.length;p++){var d=t(s[p]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}s=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var s=n[r]={id:r,exports:{}};return e[r](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=function({type:e,styles:n,attributes:t,props:r,eventHandlers:a,appendTo:s}){const o=e||"div",i=n||{},c=t||{},p=r||{},d=a||{},u=s||document.body,l=document.createElement(o);return Object.keys(i).forEach((e=>l.style[e]=i[e])),Object.keys(c).forEach((e=>l.setAttribute(e,c[e]))),Object.keys(p).forEach((e=>l[e]=p[e])),Object.keys(d).forEach((e=>l.addEventListener(e,d[e]))),u.append(l),l},n=(n,t)=>t.map((t=>{const r=e({type:"div",attributes:{class:"content-container"},appendTo:n}),a=e({type:"div",attributes:{class:"flex justify-center"},appendTo:r});return e({type:"i",attributes:{class:t.iconClass},appendTo:a}),e({type:"h2",props:{textContent:t.textContent},attributes:{class:"content-heading"},appendTo:a}),r})),r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],a=[{iconClass:"fa-solid fa-clock heading-icon",textContent:"WORKING HOURS"},{iconClass:"fa-solid fa-circle-info heading-icon",textContent:"ABOUT US"}],s=[{iconClass:"fa-solid fa-burger heading-icon",textContent:"BURGERS"}],o=[{iconClass:"fa-solid fa-address-book heading-icon",textContent:"CONTACTS"},{iconClass:"fa-solid fa-map heading-icon",textContent:"MAP"}],i=[{name:"Virgo Burger",src:"/src/assets/virgo-burger.png",ingredients:["Brioche bun with sesame","Black angus beef","Emental","Tomatoes","Virgo sauce"]},{name:"Miss Classy",src:"/src/assets/miss-classy.png",ingredients:["Brioche bun with sesame","Black angus beef","Edam cheese","Onion","Pickles","Ketchup"]},{name:"Electric Shock",src:"/src/assets/electric-shock.png",ingredients:["Wholegrain brioche bun","Pulled beef","Cheddar","Tomatoes","Spicy sauce"]},{name:"Double Trouble",src:"/src/assets/double-trouble.png",ingredients:["Brioche bun with linseed","2 Beef patties","Smoked cheese","Salsa from pickled vegetables"]},{name:"Chicky chick",src:"/src/assets/chicky-chick.png",ingredients:["Wholegrain bun","Chicken fillet","Cheddar","Iceberg","Tomatoes","Mayo sauce"]},{name:"Green piece",src:"/src/assets/green-piece.png",ingredients:["Vegan bun with sesame","Beyond Meat","Double Lettuce","Vegan mozzarella","Tomatoes","Vegan BBQ sauce"]},{name:"Tart UFO",src:"/src/assets/tart-ufo.png",ingredients:["Brioche bun with sesame","Mushroom patty with truffles","Lettuce","Cheddar","Tomatoes","Truffle sauce"]},{name:"Mr Monster",src:"/src/assets/mr-monster.png",ingredients:["Brioche bun","Triple Black Angus","Cheddar","Bacon","Jalapeños","Cheese sauce"]},{name:"Toon A",src:"/src/assets/toon-a.png",ingredients:["Wholegrain bun","Tuna patty","Lettuce","Sweet chilli sauce"]}],c={email:"virgo-burger@virgo-burger.net","phone number":"666-777-888",fax:"111-222-333",street:"5555 Sandwich way",city:"Burgtown","zip code":"999"},p=t=>{const r=e({type:"div",styles:{"min-width":"70%"},attributes:{class:"page"},appendTo:t});e({type:"h1",props:{textContent:"A magic factory for healthy food"},appendTo:r});const s=e({type:"div",attributes:{class:"page-content flex justify-center"},appendTo:r}),[o,i]=n(s,a);return d(o),u(i),r},d=n=>{r.forEach((t=>{const r=e({type:"h2",attributes:{class:"content"},appendTo:n});switch(t){case"Thursday":case"Friday":r.textContent=`${t}: 11:00AM - 12:00PM`;break;case"Saturday":case"Sunday":r.textContent=`${t}: 14:00PM - 02:00AM`;break;default:r.textContent=`${t}: 11:00AM - 10:00PM`}n.append(r)}))},u=n=>{e({type:"h2",attributes:{class:"about-us"},props:{textContent:"There is something magical here. This is Virgo's restaurant located in Burgtown. Every day many people come to this suburban street to support an idea, that in order to move forward it is sometimes necessary to look back. This is why our burgers are entirely home made."},appendTo:n}),e({type:"img",attributes:{class:"content-img",src:"/src/assets/home-burger.png"},appendTo:n}),e({type:"img",attributes:{class:"content-img",src:"/src/assets/home-french-fries.png"},appendTo:n})};var l=t(379),m=t.n(l),g=t(795),f=t.n(g),h=t(569),b=t.n(h),y=t(565),v=t.n(y),x=t(216),T=t.n(x),w=t(589),C=t.n(w),k=t(28),S={};S.styleTagTransform=C(),S.setAttributes=v(),S.insert=b().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=T(),m()(k.Z,S),k.Z&&k.Z.locals&&k.Z.locals,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p;const j=document.getElementById("content"),E=(n=>{const t=e({type:"header",attributes:{id:"header"},appendTo:n}),r=e({type:"div",attributes:{class:"logo-container flex justify-center"},appendTo:t});return e({type:"img",attributes:{class:"logo",src:"../src/assets/logo.png"},appendTo:r}),t})(j),M=e({type:"div",attributes:{class:"buttons-container flex justify-center",src:"/src/assets/logo.png"},appendTo:E}),B=e({type:"section",attributes:{class:"page-container flex justify-center"},appendTo:j});p(B);const z=t=>{switch(B.removeChild(B.firstChild),t.target.textContent){case"Home":p(B);break;case"Menu":(t=>{const r=e({type:"div",styles:{"min-width":"70%"},attributes:{class:"page"},appendTo:t});e({type:"h1",props:{textContent:"Menu"},appendTo:r});const a=e({type:"div",attributes:{class:"page-content flex justify-center"},appendTo:r}),[o]=n(a,s);((n,t)=>{const r=e({type:"div",attributes:{class:"burgers-container flex justify-center"},appendTo:n});t.forEach((n=>{const t=e({type:"div",attributes:{class:"burger-container"},appendTo:r}),a=e({type:"div",attributes:{class:"burger-svg-container flex justify-center"},appendTo:t});e({type:"img",attributes:{class:"burger-svg",src:n.src},appendTo:a});const s=e({type:"div",attributes:{class:"burger-info-container flex justify-center"},appendTo:t});e({type:"p",attributes:{class:"burger-name"},props:{textContent:n.name},appendTo:s});const o=e({type:"ul",appendTo:s,attributes:{class:"burger-ingredients-container"}});n.ingredients.forEach((n=>e({type:"li",props:{textContent:n},attributes:{class:"burger-ingredients"},appendTo:o})))}))})(o,i)})(B);break;case"Contacts":(t=>{const r=e({type:"div",styles:{"min-width":"70%"},attributes:{class:"page"},appendTo:t});e({type:"h1",props:{textContent:"Contacts"},appendTo:r});const a=e({type:"div",attributes:{class:"page-content flex justify-center"},appendTo:r}),[s,i]=n(a,o);((n,t)=>{Object.keys(t).forEach((r=>{e({type:"h2",attributes:{class:"contact"},props:{textContent:`${r.toUpperCase()}: ${t[r]}`},appendTo:n})}))})(s,c),e({type:"img",attributes:{class:"map-img",src:"/src/assets/map.png"},appendTo:i})})(B)}};["Home","Menu","Contacts"].forEach((n=>{e({type:"button",attributes:{class:"nav-btn"},props:{textContent:n},appendTo:M,eventHandlers:{click:z}})}))})()})();