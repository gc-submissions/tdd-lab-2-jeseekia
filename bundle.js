(()=>{var e={420:e=>{e.exports={calculateChange:function(e,t){return t-e},isSufficientPayment:function(e,t){return t>=e},calculateTotal:function(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n].price;return t},addItem:function(e,t,n){e.push({name:t,price:n})}}},842:()=>{}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{let{formatCurrency:e,getCoins:t}=n(842);const{addItem:r,calculateTotal:i,isSufficientPayment:a,calculateChange:c,removeItem:d}=n(420);e=e||(e=>e);const o=[{name:"Candy Bar",price:.95},{name:"Bag of Chips",price:1.29},{name:"Can of Soda",price:1.8},{name:"Bottle of Milk",price:3},{name:"Box of Cherries",price:5.13}];!function(){const n=document.getElementById("menu"),u=document.getElementById("selectedItems"),s=document.getElementById("total"),l=document.getElementById("cashInput"),m=document.getElementById("cashForm"),f=document.getElementById("changeDue"),g=document.getElementById("cashInserted"),p=document.getElementById("paymentInsufficientMessage"),h=document.getElementById("change"),x=h.querySelectorAll(".change-count"),I=document.getElementById("resetButton");o.forEach(((t,r)=>{n.insertAdjacentHTML("beforeend",`<li>${e(t.price)} - ${t.name}\n        <button data-index="${r}">Buy</button>\n      </li>`)}));let y=[];function B(){u.innerHTML="",y.forEach(((t,n)=>{u.insertAdjacentHTML("beforeend",`<tr>\n        <td>${t.name}</td>\n        <td>${e(t.price)}</td>\n        <td><button data-index="${n}">Remove</button></td>\n      </tr>`)}));const t=i(y);s.innerText=e(t)}n.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));if(!isNaN(t)){const e=o[t];r(y,e.name,e.price),B()}})),u.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(d(y,t),B())})),m.addEventListener("submit",(n=>{n.preventDefault();const r=Number(l.value)||0,d=i(y);let o=0;try{o=c(d,r)}catch(n){console.error(n)}if(g.innerText=e(r),f.innerText=e(o),a(d,r)){const e=t(Math.round(100*o));x[0].innerText=e.quarters,x[1].innerText=e.dimes,x[2].innerText=e.nickels,x[3].innerText=e.pennies,h.hidden=!1,p.hidden=!0}else h.hidden=!0,p.hidden=!1})),I.addEventListener("click",(()=>{y=[],B(),l.value="",g.innerText="",f.innerText="",h.hidden=!0,p.hidden=!0}))}()})()})();