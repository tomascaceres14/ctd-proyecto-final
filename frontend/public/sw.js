if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/EHrtNuS38bTjwLiWTDJxp/_buildManifest.js",revision:"b3946b1f6f41bd262650ec23cba778e6"},{url:"/_next/static/EHrtNuS38bTjwLiWTDJxp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/031aa83e-d1682e854140047b.js",revision:"d1682e854140047b"},{url:"/_next/static/chunks/175-55f05ab57e5056f9.js",revision:"55f05ab57e5056f9"},{url:"/_next/static/chunks/1bfc9850-7b9909949e2de734.js",revision:"7b9909949e2de734"},{url:"/_next/static/chunks/1e7c12d4-f5560f37b3fc4f9f.js",revision:"f5560f37b3fc4f9f"},{url:"/_next/static/chunks/249.84d1a3fa9f3db97d.js",revision:"84d1a3fa9f3db97d"},{url:"/_next/static/chunks/281-0aab6b8d57c9805a.js",revision:"0aab6b8d57c9805a"},{url:"/_next/static/chunks/299-bb0ff020fed84715.js",revision:"bb0ff020fed84715"},{url:"/_next/static/chunks/317-efa8dcbaa81c611a.js",revision:"efa8dcbaa81c611a"},{url:"/_next/static/chunks/415-de6a41c03b9ea927.js",revision:"de6a41c03b9ea927"},{url:"/_next/static/chunks/464-1b6216f3cf5267ce.js",revision:"1b6216f3cf5267ce"},{url:"/_next/static/chunks/674a26a7-032050686108bb89.js",revision:"032050686108bb89"},{url:"/_next/static/chunks/698.6343bfd066c936de.js",revision:"6343bfd066c936de"},{url:"/_next/static/chunks/712-f23da922e1e6a6c8.js",revision:"f23da922e1e6a6c8"},{url:"/_next/static/chunks/framework-5bf7adaee39f6244.js",revision:"5bf7adaee39f6244"},{url:"/_next/static/chunks/main-2a1fd1151f7cf502.js",revision:"2a1fd1151f7cf502"},{url:"/_next/static/chunks/pages/_app-11a7ea16e6d24323.js",revision:"11a7ea16e6d24323"},{url:"/_next/static/chunks/pages/_error-59fabcc1fbcce757.js",revision:"59fabcc1fbcce757"},{url:"/_next/static/chunks/pages/discover-03e6a7d3488c9fc4.js",revision:"03e6a7d3488c9fc4"},{url:"/_next/static/chunks/pages/index-bb199124e6a13f40.js",revision:"bb199124e6a13f40"},{url:"/_next/static/chunks/pages/movies/%5Bid%5D-7086c1ef919a399e.js",revision:"7086c1ef919a399e"},{url:"/_next/static/chunks/pages/my-list-6ab3f80c52680161.js",revision:"6ab3f80c52680161"},{url:"/_next/static/chunks/pages/search-result-5f1f838e3201b890.js",revision:"5f1f838e3201b890"},{url:"/_next/static/chunks/pages/signIn-165990bc062dc1c3.js",revision:"165990bc062dc1c3"},{url:"/_next/static/chunks/pages/signUp-f52cdc55c40008ba.js",revision:"f52cdc55c40008ba"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-0a2a0d97f567a2c7.js",revision:"0a2a0d97f567a2c7"},{url:"/_next/static/css/960c3ae130cfde0e.css",revision:"960c3ae130cfde0e"},{url:"/_next/static/css/c5195364d8d987c5.css",revision:"c5195364d8d987c5"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/Inter-Bold.ttf",revision:"275bfea5dc74c33f51916fee80feae67"},{url:"/fonts/Inter-Light.ttf",revision:"d55f45d07cfe01e8797bd1566561f718"},{url:"/fonts/Inter-Regular.ttf",revision:"079af0e2936ccb99b391ddc0bbb73dcb"},{url:"/images/A.png",revision:"8459e45acc87dfc935e32b43e3f8051a"},{url:"/images/EcranLogo.png",revision:"ff97ad663ed0a9ae363659e6b69af1e9"},{url:"/images/Group.svg",revision:"f5a5aff8bb298a95f42e17272b26a059"},{url:"/images/Metacritic1.png",revision:"dc679f722fe59b970af5460dd99f6f7f"},{url:"/images/Not-found.png",revision:"7f5e811a86648363f674e9880ca36f1b"},{url:"/images/RottenTomatoes.png",revision:"2f5b432004c09ea96acc54a4c6fbe4db"},{url:"/images/home/A.png",revision:"6c2aa8b93f7217918408d12181a7c87c"},{url:"/images/home/Bg.svg",revision:"f1c232cf5eafced916fd80e695cb68cb"},{url:"/images/home/Profile.svg",revision:"02c29f1c1e2deed94d490b20511a9dd2"},{url:"/images/home/Section.svg",revision:"8e9c087b781a683bcb2790a293df2088"},{url:"/images/home/Star1.png",revision:"ed3d8a537b0d630b5c1c55999ada10da"},{url:"/images/home/Star6.png",revision:"57228f75ee53a3b7999fdb17c7c7f2c3"},{url:"/images/home/Temporal.svg",revision:"c9815a7253f2daf2de928cabfe71d850"},{url:"/images/home/custom.svg",revision:"8114d08483fe8a72c437a014c8a2bde6"},{url:"/images/home/ecran.svg",revision:"c037067ea1489bea437782b5c305d105"},{url:"/images/home/logos/amazon.svg",revision:"96c7ec69993ac78840ab65bcb24ed46a"},{url:"/images/home/logos/apple.svg",revision:"d90bc2d1ba104ba0cfcd388891ab3b7b"},{url:"/images/home/logos/disney.svg",revision:"8d0343aefc82d46174e16cbc476bb939"},{url:"/images/home/logos/hbo.svg",revision:"9149d7cc7af821c1995c2973c7a80c73"},{url:"/images/home/logos/netflix.svg",revision:"e45aaa6e7a198761158beff7626793c3"},{url:"/images/home/logos/paramount.svg",revision:"f35cb21550cbaca1a59a8e46fe000970"},{url:"/images/home/logos/star.svg",revision:"6378d4d37eca28e2f62ca6a07e285d2e"},{url:"/images/home/logos/vix.svg",revision:"c23ee0a7ebe345ecfc240f024f85915b"},{url:"/images/home/start2.svg",revision:"4795a534a2eb57f68247d7cbfa87287c"},{url:"/images/signLogo.png",revision:"1ef03384aea94b3674204b8c48e60ccf"},{url:"/manifest.json",revision:"268827b4415df396c0507e3e74039c04"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
