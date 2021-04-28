'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "6893d44b0f75b7363d04fbad94e96f6b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6219c8d03bca8c0266a713aebead094c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ae7b3229d7fa4552048333cb21cb1ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29c5b6ee5a94e7e9ed95e1f23aa65040",
".git/logs/refs/heads/master": "29c5b6ee5a94e7e9ed95e1f23aa65040",
".git/logs/refs/remotes/origin/main": "671cda3f79af72781a6e1a97fba598d8",
".git/logs/refs/remotes/origin/master": "bb9162a3b122861f4e23d0b94a896e22",
".git/objects/07/175ed594c8b6988c4521adae8cc10eec2afe57": "5429369e19a6760dab13ab1f7b31b34b",
".git/objects/10/22240a111413d9dc982ee93bed959c6189ea2e": "c2d5193fa3c393c00c9c09db49a59509",
".git/objects/11/53465e2c5d8a6ebbe5f9388f39c94aa84c20b8": "9393b747bd2cde4b0ac11f129312a9d3",
".git/objects/12/573f8ded4bf6f9c2a98e4860d64fb6480b86d9": "964bfa3d6e858b59cf072808fcca5be2",
".git/objects/16/7ea8961e0f04c83d80ed5ca3ae7c696056a039": "54cb7b7edd661711adb672c7c1b3a5a6",
".git/objects/20/3b6547dd4a12e4f0828f1328c28d3a358d1a20": "e3c439253db170cf4150ffc20a4e7c9c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/4e0c0a93b385950d3069b26c59c22ab3414c89": "e1003730b4a168d8edeba4c48c8e950c",
".git/objects/3f/87552185fea9018e69e023c874c3edb140010d": "35946402887d0043d4774557a391cbb5",
".git/objects/3f/aed6bf49af7104f31934d4983c1cb8ee57de8b": "ff59469871ff829f51d923f3f77c2c1c",
".git/objects/67/3dfd4499816e61f9c5d428ec98b1747c3162b7": "8d63a898a1be0ffd9da0e2f3f4894aa2",
".git/objects/67/7ec6d81b38a2ff980982f3c7d7dbda6122904d": "b573712979385756878e8b533fd12ed8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/504e34b920436a5a0de2e84d2a9fc06dc42d8f": "53371f40a8fdcd4447fe218bb9f86109",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c3a9fd464cef2bef5316a0b509e9e58b60353d": "ea88e1ed9d8c24bd7f5c5bed8d5550ac",
".git/objects/96/a4a6a14a29bc7e29c9f25d1381555f7eaef2e3": "3a0c6527d7c325ad7bc1710f46c4018e",
".git/objects/99/b33b29337de5170944b6822961baeacf8c9102": "9812af8d3ff1eb179f7c596424f6acfe",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c8e98d7ec1a639e81b5e68f38303c723ef1c2f": "56229aeefc04905e1a8ec11346b660ef",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/b6031ddde99742464e5f173a8e0139c1d98230": "d1d3fd3b4fb1e0d15094d92257a0e138",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c1/9bfd26b62b68e969f3b35551b8975477764f93": "9f6aa9c4d78dae8fefe7de2153ca1767",
".git/objects/cb/043afc06c71bdf34263e530bdf1ba03afc7832": "268792c1ff7f34389bb294d1a23493f4",
".git/objects/d2/87e46a41a3d204ee71418c554d26980d561914": "857b7d02a373e1c7a9b33d717b06e695",
".git/objects/d9/513cab8f87245d11d1767a2927fe56a20e1ffd": "310d5c6f2bd23b9fd4a44aaaa29e2170",
".git/objects/da/8953e9efe33db04a55b840ab7edea61512cd48": "b039d7eeedaa0e9b1589d74c250a38db",
".git/objects/dd/7bd4a1d136615c78e12ce790b43b44633ca616": "9467ee3153da9ea044dc2fb3b4f85a65",
".git/objects/df/999c717946b46be1727de55039b595d9e9e537": "f5d7735101bf67275cd2a9abb14936f9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/b5376835a37e45a0483927c86e7faeabb12a1f": "aad37cc6c9b53d4747cf54abed609354",
".git/objects/f1/1ea183cd0d5532a6f7198f0dece28b15616cfc": "f2c252adc0c706a6c0c632f7fdee3c5c",
".git/objects/fc/fe47cae5c5c217890c889fc99f369e39ecebb5": "1b6da3add61c50df3cda62460f6a7793",
".git/objects/pack/pack-e9398bc32e94d1eb60167dd5198ad55831460b00.idx": "d4c25f2e5554e0278b7c64187da9f1b8",
".git/objects/pack/pack-e9398bc32e94d1eb60167dd5198ad55831460b00.pack": "b55e2e7086239a814e89dfe7fda3307b",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "687ca0740b4800d24b98224f39f7648a",
".git/refs/remotes/origin/main": "7b78e52b6321718b9aed8e12e80b9f13",
".git/refs/remotes/origin/master": "687ca0740b4800d24b98224f39f7648a",
"assets/AssetManifest.json": "b0461f0b55a81332a3dfb65abe3d73a3",
"assets/assets/alibaba.png": "c4eeb30c1cad3ad2d6d0201157bfbbdf",
"assets/assets/archdiagram.png": "82c25693219162957568b36adc96c2a6",
"assets/assets/bmw.png": "e9a549db37a24e5e8b10a8b11280efa4",
"assets/assets/chi.png": "201d0d27bea9d0cf9b0e9e0078647ba2",
"assets/assets/ebay.png": "93543fdb7169d0033851f9ffeac345e0",
"assets/assets/google.png": "bb795c74d0fc55db32f8b30a7dae2392",
"assets/assets/microsoft-5.png": "b676655667548ad9e617545481fc051d",
"assets/assets/tencent.png": "1ed1d7db7050f1463623642267675af9",
"assets/FontManifest.json": "b863944e4d61ddb18f17394d448af0a6",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/ZenDots-Regular.ttf": "d5ef58e040edd381b80081342f282af0",
"assets/NOTICES": "28c32bc1ac9fabe122b24c7006b019c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "20afcbc7dacd368d57ec5e2d779cf169",
"/": "20afcbc7dacd368d57ec5e2d779cf169",
"LICENSE": "834a6c9c56c49efb0d417c697a9618d8",
"main.dart.js": "7ebdf7d77efcf3e7198e15be7e3f5f22",
"manifest.json": "9432f3169231df869a380175565e0ecc",
"version.json": "6d85168016f4814f4228f583538a0b19"
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
