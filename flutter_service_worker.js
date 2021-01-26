'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"index.html": "6abb72ecc37ffa4296c8d96b2074dbec",
"/": "6abb72ecc37ffa4296c8d96b2074dbec",
"main.dart.js": "c0a0b8f2dce370123a299500224d9b46",
"favicon.png": "1debfe0d917b2cdd410a2156e285ea46",
"icons/favicon-16x16.png": "6a1208b903763089b580410bd6ce4f80",
"icons/favicon.ico": "776eedc9a1f9ca34cda6456f5360dc81",
"icons/apple-icon.png": "533179422c449f3dae81fd45dccf8f5b",
"icons/apple-icon-144x144.png": "417cfd6587b50df16130fcc01de616e7",
"icons/android-icon-192x192.png": "af7d84ca295d42c81435515970a405e4",
"icons/apple-icon-precomposed.png": "533179422c449f3dae81fd45dccf8f5b",
"icons/apple-icon-114x114.png": "e076ba574f564bc6ea85ea8f9b41a120",
"icons/ms-icon-310x310.png": "4cd2abf18870a6f9dda4584240e16932",
"icons/Icon-192.png": "f28275772518c3b288b46079e514967c",
"icons/ms-icon-144x144.png": "417cfd6587b50df16130fcc01de616e7",
"icons/apple-icon-57x57.png": "34c88d1e4c35b34ec085bf974c0d2612",
"icons/apple-icon-152x152.png": "2294c9a8de38aad9aa2e2c41ea6a2dec",
"icons/ms-icon-150x150.png": "66ca4d75b6de0f3c124de98d433bc6a7",
"icons/android-icon-72x72.png": "587e057030804be6c36f1beef0b56a18",
"icons/android-icon-96x96.png": "aa3eae05f61356138dbf7aa7025229a2",
"icons/android-icon-36x36.png": "4e94191add97c6b11607ff22903c2dfb",
"icons/apple-icon-180x180.png": "8f1b4f895b73962afd00c7389cc4e6fd",
"icons/favicon-96x96.png": "aa3eae05f61356138dbf7aa7025229a2",
"icons/android-icon-48x48.png": "0476ce626ee7ae4c9c2044e8c1f61abd",
"icons/apple-icon-76x76.png": "d3dd25a4f0a077cd8d997d357eb9f5e5",
"icons/apple-icon-60x60.png": "0744fdc45109a97b78b44c8037bfdafd",
"icons/android-icon-144x144.png": "417cfd6587b50df16130fcc01de616e7",
"icons/apple-icon-72x72.png": "587e057030804be6c36f1beef0b56a18",
"icons/apple-icon-120x120.png": "e62dcf6ebb119a12d2ad9564782ef3b5",
"icons/Icon-512.png": "7ec12738c9877e638e23167ebabf9b9f",
"icons/favicon-32x32.png": "cae87c6f13c903d0c106ddaefd376aaa",
"icons/ms-icon-70x70.png": "46b77a6d511de3838c909159ce3b7772",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"assets/AssetManifest.json": "999123bb69dc8b78abd242364cedd7e9",
"assets/NOTICES": "28c23674f32c224ff59cbb996603817c",
"assets/FontManifest.json": "268487b19d6105a548826f37cf0686ab",
"assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/images/bg_illustration.png": "a7f2050164cbd44830c9631876a0d7a3",
"assets/assets/images/chai.png": "8f9f1345cfb84d16876df2bfbdd29f86",
"assets/assets/images/illustration_mobile_dark.png": "edea2df0737cc57e555f69ef8d8c5895",
"assets/assets/images/illustration.png": "ae21750d47cd381ed8e654499bdb759d",
"assets/assets/images/placeholder.png": "006330e521b4e3e3f32906ee851a532f",
"assets/assets/images/upwork.png": "419e75bea0e205b42da15d41af0860b5",
"assets/assets/images/photo.png": "75729c6d66a15f08e1d5cfdf64e4d34b",
"assets/assets/images/flutter_icon.png": "1b1259227a721a796c57237f63c12cc3",
"assets/assets/images/logo.png": "f17036c703fcf23c48584c2dfd78b5f5",
"assets/assets/images/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/images/logo_light.png": "231b464477c0343c2297b851b2885e58"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
