/* Europe Tour Reference V1 — app shell and itinerary data work offline. */
const CACHE = 'europe-tour-reference-v1.0.4';
const MEDIA_FILES = [
  './media/atomium.jpg',
  './media/augustinergasse.jpg',
  './media/bahnhofstrasse.jpg',
  './media/beaune.jpg',
  './media/bogaarden.jpg',
  './media/cafe-paix.jpg',
  './media/canal.jpg',
  './media/coster.jpg',
  './media/crepes.jpg',
  './media/cube.jpg',
  './media/dewallen.jpg',
  './media/dijon-museum.jpg',
  './media/dijon-rue.jpg',
  './media/dubai-airport.jpg',
  './media/eiffel.jpg',
  './media/fourviere.jpg',
  './media/fragonard.jpg',
  './media/fresque.jpg',
  './media/gassan.jpg',
  './media/gevrey.jpg',
  './media/goldenpass.jpg',
  './media/grand-place.jpg',
  './media/hk-airport.jpg',
  './media/interlaken.jpg',
  './media/lavaux.jpg',
  './media/lucerne-dish.jpg',
  './media/lucerne.jpg',
  './media/maastricht.jpg',
  './media/macarons.jpg',
  './media/madame.jpg',
  './media/markthal.jpg',
  './media/montreux.jpg',
  './media/noordeinde.jpg',
  './media/noorderhuis.jpg',
  './media/orangerie.jpg',
  './media/outlet.jpg',
  './media/oysters.jpg',
  './media/potlood.jpg',
  './media/roesti.jpg',
  './media/schiphol.jpg',
  './media/skyview.jpg',
  './media/titlis.jpg',
  './media/vieux-lyon.jpg',
  './media/vosne.jpg',
  './media/waterloo.jpg',
  './media/zaanse.jpg',
  './media/zurich-airport.jpg',
  './media/zurich-lindenhof.jpg'
];
const APP_SHELL = [
  './',
  './index.html',
  './styles.css?v=1.0.4',
  './data.js?v=1.0.4',
  './media.js?v=1.0.4',
  './app.js?v=1.0.4',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  ...MEDIA_FILES
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
