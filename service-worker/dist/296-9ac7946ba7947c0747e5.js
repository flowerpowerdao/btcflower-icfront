(()=>{var e={m:{},u:e=>e+"-b48f6944bbc4f6d4cc0f.js",o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p:"/"};e.b=document.baseURI||self.location.href,window.addEventListener("load",(async()=>{const t=[["serviceWorker",window.navigator.serviceWorker],["BigInt",window.BigInt],["WebAssembly",window.WebAssembly]].filter((e=>!e[1])).map((e=>e[0])).join(", ");if(t)!function(e){const t=document.getElementById("status");t&&(t.innerText=e)}(`This web browser cannot interact with the Internet Computer securely.  (No: ${t})\n       Please try new web browser software.`);else{console.log("Installing a service worker to proxy and validate raw content into the browser...");const t=await navigator.serviceWorker.register(new URL(e.p+e.u(862),e.b));if(t.installing){const e=t.installing||t.waiting;e.onstatechange=()=>{"installed"===e.state&&window.location.reload()}}else t.active&&setTimeout((function(){window.location.reload()}),800)}}))})();
//# sourceMappingURL=296-9ac7946ba7947c0747e5.js.map