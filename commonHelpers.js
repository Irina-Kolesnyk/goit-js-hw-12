import{a as m,S,i as y}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function h(e){return e.map(C).join(`
`)}function C(e){return`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
              <div class="gallery-image-thumb">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
              </div>
              <ul class="property">
                <li class="property__item">
                  <p class="property__name">Likes</p>
                  <p class="item-prop__quantity">${e.likes}</p>
                </li>
                <li class="property__item">
                  <p class="property__name">Views</p>
                  <p class="item-prop__quantity">${e.views}</p>
                </li>
                <li class="property__item">
                  <p class="property__name">Comments</p>
                  <p class="item-prop__quantity">${e.comments}</p>
                </li>
                <li class="property__item">
                  <p class="property__name">Downloads</p>
                  <p class="item-prop__quantity">${e.downloads}</p>
                </li>
              </ul>
            </a>
          </li>`}function _(e){e.classList.remove("loader-hidden")}function L(e){e.classList.add("loader-hidden")}async function b(e,r){m.defaults.baseURL="https://pixabay.com";const s={key:"44443865-2fecc511f1b53cc9c5f157eba",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:v,page:r};try{return(await m.get("/api/",{params:s})).data}catch(i){console.log(i)}}const P="/goit-js-hw-12/assets/icon-close-e3b9e9d3.svg",f=document.querySelector(".search-form");document.querySelector(".search-form__input");const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),p=document.querySelector(".load-more__button"),v=15;let a=1,n="",w=new S(".gallery a"),d;function g(){c.innerHTML=""}function M(){return a=a+1}function q(){p.classList.remove("active")}function O(){p.classList.add("active")}function k(){return a=1}function E(){if(a>=d)return q(),y.error({class:"izt-toast-message",message:"We're sorry, but you've reached the end of search results.",position:"topRight",titleColor:"#fff",titleSize:"16px",backgroundColor:"red",messageColor:"white",iconUrl:imageUrl,theme:"dark"});O()}function $(){const r=c.children[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}f.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements.query.value.trim();if(n=r,k(),q(),n.length!==0){_(l);try{const s=await b(n,a);if(d=Math.ceil(s.totalHits/v),r===""){y.error({class:"izt-toast-message",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16",messageLineHeight:"24",messageColor:"#ffffff",backgroundColor:"#b51b1b",iconUrl:P,position:"topRight",theme:"dark"});return}else g(),c.innerHTML=h(s.hits),w.refresh(),E()}catch(s){console.log(s)}L(l)}f.reset()});p.addEventListener("click",async()=>{try{const e=await b(n,a);_(l),c.insertAdjacentHTML("beforeend",h(e.hits)),w.refresh(),$(),L(l),M(),E(d)}catch(e){console.log(e)}});
//# sourceMappingURL=commonHelpers.js.map
