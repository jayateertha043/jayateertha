'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.ico": "5084a72722289d30a3eadd5ca28da5f5",
"canvaskit/chromium/canvaskit.js": "36d162e8f857ceeacbf01ed75a382f56",
"canvaskit/chromium/canvaskit.wasm": "b3fabff5b6c1cb4d4e81f4551eba9ba2",
"canvaskit/canvaskit.js": "dd5b7e38ac853fcf41faa69cf49aa175",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/canvaskit.wasm": "6e7859012ffcf1d482a8bbc473b8171f",
"canvaskit/skwasm.wasm": "4ca73baf420612f1657d5b2be4b7467d",
"poc/upload.html": "3170d5b036b578d9420d28034e92e508",
"poc/child.html": "68b329da9893e34099c7d8ad5cb9c940",
"poc/bingmapsapicsrf.html": "e47cd5f710ccfd94ad8e9d69473313ce",
"poc/scripts.html": "9d94f67ea6fde548d9242ecd0edbaa1a",
"poc/parent.html": "68b329da9893e34099c7d8ad5cb9c940",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/assets/img/avatar.jpg": "4769eba43b46c4ff59f43b1e9bc205be",
"assets/AssetManifest.json": "68976447b079190a5abf949f93321cff",
"assets/NOTICES": "1140652f5f22383555c0375949e744d2",
"assets/AssetManifest.bin": "f4ec0221e62ef5679edd079f10ebce72",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/JayateerthaResume.pdf": "a80fe077ba05a0b475aff4ea052f1d2c",
"assets/fonts/MaterialIcons-Regular.otf": "cdf1bb374e6dcd258fae0c69c9f18023",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"CNAME": "b9c4f8e0218cfdd38c6f42289bc2a321",
"sitemap.xml": "85a9a3cc1cbabd5ed980d644035b594c",
"version.json": "4fc48fa2d61562ed8e9c7f0f7f45417c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"_config.yml": "dc8fe32f8ea298553d3e80fa2759af45",
"index.html": "e14fd53fec3e610e002fe460923f6dd1",
"/": "950556968b8c481524a22d7c8deefbd0",
"404.html": "9033069743105a2722e3504542b66b0b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "71b7e7bb46dd34d86b2ff0a8d5049292",
"shrt.html": "d9240574589dbaf0d93c07bc579160cf",
"brave-rewards-verification.txt": "9762024b88ea9b8e904af2aa5721956d",
"vr/vig/assets/5.jpg": "de753803145125fb6a5e972e590ba271",
"vr/vig/assets/3.jpg": "cd9daa05d389a332e848aeecc91467f0",
"vr/vig/assets/7.jpg": "b1a1d2f6ab4b0e62ed1d98a669247124",
"vr/vig/assets/9.gif": "548069429bbdaec1992a9d3bc3c68785",
"vr/vig/assets/6.jpg": "ad3a44edd0ce86d7d674357424ea8071",
"vr/vig/assets/8.jpg": "d0aa16ec306419f00da9ae320d2f28ff",
"vr/vig/assets/1.jpg": "d881410176cdd8fde74b598d3da0eb06",
"vr/vig/assets/2.jpg": "a4ebc5ce68310058cd73fbad64f79984",
"vr/vig/assets/4.jpg": "7df2cd43985b5e2f6250040f3c49069b",
"vr/vig/index.html": "1fa3a401985bbab645e47b44c0ec4c70",
"vr/assets/g6.jpg": "0c9d814e87a04ad4c2d16053e97d8658",
"vr/assets/g9.jpg": "4a986616c7dcf065ba2a381092011c7b",
"vr/assets/g4.jpg": "c1dfd1a8822367388c5f4f258783e64e",
"vr/assets/g10.jpg": "f65917a00beec23b7e2ce446e3fc37fb",
"vr/assets/g7.jpg": "42a32681eb53fc532fef7adc69ca0ccf",
"vr/assets/g3.jpg": "55c75d5cead4344741b8c93659945151",
"vr/assets/g1.jpg": "88853b3cf209ab8127fc75f1a1f45fd7",
"vr/assets/g2.jpg": "4769eba43b46c4ff59f43b1e9bc205be",
"vr/assets/g5.jpg": "32754e9cb12a85c13869e6a157f9797d",
"vr/assets/g8.jpg": "28e1447f25bcfa9f9cbe2e8b4758a949",
"vr/index.html": "950556968b8c481524a22d7c8deefbd0",
"manifest.json": "e05cf23bc0a7b09605abf46d4f7e722e",
"robots.txt": "fa1ded1ed7c11438a9b0385b1e112850"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
