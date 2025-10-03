const CACHE = 'uv-v2';
const PRECACHE = ['/home.html','/manifest.webmanifest'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)));
  self.skipWaiting();
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE && caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method!=='GET') return;
  if(req.destination==='document'){
    e.respondWith(fetch(req).catch(()=>caches.match('/home.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req)));
});
