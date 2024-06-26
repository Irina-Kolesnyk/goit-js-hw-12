import{A as E,i as M,s as O}from"./assets/vendor-3c004ab1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function h(a){return a.map(({largeImageURL:e,webformatURL:r,tags:n,likes:t,views:s,comments:i,downloads:q})=>`
    <li class="gallery-card">
      <a href="${e}" class="gallery-card-link">
        <img
          class="gallery-card-img"
          src="${r}"
          alt="${n}"
          width="360"
        />
      </a>
      <ul class="image-desc-list">
        <li class="image-desc-item">
          <p class="image-desc-title">Likes</p>
          <p class="image-desc-data">${t}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Views</p>
          <p class="image-desc-data">${s}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Comments</p>
          <p class="image-desc-data">${i}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Downloads</p>
          <p class="image-desc-data">${q}</p>
        </li>
      </ul>
    </li>
  `).join("")}const S=E.create({baseURL:"https://pixabay.com/api/",params:{key:"44443865-2fecc511f1b53cc9c5f157eba",image_type:"photo",orientation:"horizontal",safesearсh:!0,per_page:"15"}});async function y(a,e){return(await S.get("",{params:{q:a,page:e}})).data}const f=document.querySelector(".search-form"),o=document.querySelector(".gallery-list"),L=document.querySelector(".loader"),g=document.querySelector(".loadMore-button");let l="",c=1,u=1;const $=15;f.addEventListener("submit",async a=>{if(a.preventDefault(),l=a.target.elements.search.value.trim(),c=1,d(),p(),!l)m("Oops","You forgot to enter a search query!","#EF4040"),o.innerHTML="";else{v();try{const e=await y(l,c);u=e.total/$,e.hits.length===0&&(o.innerHTML="",d(),m("Sorry","there are no images matching your search query. Please try again!","#EF4040"));const r=h(e.hits);o.innerHTML=r,w(),b.refresh()}catch{}p(),f.reset(),P()}});g.addEventListener("click",async a=>{a.preventDefault(),c++,d(),v();try{const e=await y(l,c),r=h(e.hits);o.insertAdjacentHTML("beforeend",r),x()}catch{}b.refresh(),p(),P()});function m(a,e,r){M.error({title:a,message:e,backgroundColor:r,theme:"dark",position:"topRight"})}const b=new O(".gallery-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function v(){L.classList.remove("is-hidden")}function p(){L.classList.add("is-hidden")}function w(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}function P(){c>=u?(d(),u&&m("We're sorry,","but you've reached the end of search results.","#FFA000")):w()}function x(){const e=o.children[0].getBoundingClientRect().height;scrollBy({top:e*2+50,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
