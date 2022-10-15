'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "df736a03d87c96904fb944fbea4eb22e",
"assets/assets/Aboreto-Regular.ttf": "cb4c7aaa6ca3d17c6a103c709538397e",
"assets/assets/CinzelDecorative-Black.ttf": "9a2d88fdd78655d13ff1c93e62b998da",
"assets/assets/CinzelDecorative-Bold.ttf": "a388d4f6e855b334da95b975bb30bf4d",
"assets/assets/CinzelDecorative-Regular.ttf": "82162fab2e5b2e53e84c1f6762f33012",
"assets/assets/Comforta.ttf": "0f0ea204488f7d0bbaa7451c312f4db5",
"assets/assets/Comfortaa-VariableFont_wght.ttf": "0f0ea204488f7d0bbaa7451c312f4db5",
"assets/assets/CormorantGaramond-Bold.ttf": "d2f41939e8d24b563077bdc4a8137e91",
"assets/assets/CormorantGaramond-BoldItalic.ttf": "634124fb5152b8db4773cab0894cb5c2",
"assets/assets/CormorantGaramond-Italic.ttf": "6f96488d4a6352608c20b2621e5b2227",
"assets/assets/CormorantGaramond-Light.ttf": "23e4d6b7457958d1023e5f26b3f3d5d2",
"assets/assets/CormorantGaramond-LightItalic.ttf": "50347e073ffa8d55ff58d03e41baa266",
"assets/assets/CormorantGaramond-Medium.ttf": "5e7d2ba2f6b625a7cbfcc293d2ec247b",
"assets/assets/CormorantGaramond-MediumItalic.ttf": "7babb6914ac2320e91adec11ecabb54a",
"assets/assets/CormorantGaramond-Regular.ttf": "8d38bcc84080a67c9d1630fd3141f7f3",
"assets/assets/CormorantGaramond-SemiBold.ttf": "7a44ea381bbb72965efb8d515d558621",
"assets/assets/CormorantGaramond-SemiBoldItalic.ttf": "ac1eb755211b8c89fb45e556f1b8eb9e",
"assets/assets/FasterOne-Regular.ttf": "4b2c44897685444c06b44a7b70b37801",
"assets/assets/Kalam-Bold.ttf": "c753b7274d6a2dab75f5c44b8e5c7b25",
"assets/assets/Kalam-Light.ttf": "4c79496352e7ef6dc4956f60ce095408",
"assets/assets/Kalam-Regular.ttf": "b3d0cb8286497ecfe76846476495927c",
"assets/assets/MajorMonoDisplay-Regular.ttf": "e7acc228230d22332855765872b0a3bf",
"assets/assets/NanumPenScript-Regular.ttf": "6dca00a888adddce462113561de691b7",
"assets/assets/PoiretOne-Regular.ttf": "8d15f9c0d468e1de889e81fae1087b61",
"assets/assets/RubikGlitch-Regular.ttf": "31084a1e50a2f7d4ac413234d0e674c1",
"assets/FontManifest.json": "61c3a945e1e7646c3e64bf3df734c97c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/aaa.png": "066dc7a8cbd7f27ecb2940832e1dd49e",
"assets/images/bann1.png": "17e0c8b4d296af1383ea21e029a2ffdd",
"assets/images/bmi%2520app%2520icon.jpg": "d2d310f581e86c8ba421b004cfb0d7c7",
"assets/images/clima%2520app%2520icon.jpg": "1f21747007500ee109f096a7b79ab6c6",
"assets/images/cpp.png": "ec0516f9a464025fca6a3db21bfcf733",
"assets/images/dart.png": "2109d2f308656c0aa309dbf8c48c4445",
"assets/images/design.PNG": "0e3c0c9e15ad12a3466753a8061076d6",
"assets/images/facebook%2520app%2520icon.PNG": "df675f02a43204c9733f6efbb81afcde",
"assets/images/github%2520app%2520icon.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/images/icon.jpg": "80e498c191872c2faddeae47c56f565e",
"assets/images/icon.png": "4537b9e394f92564e6922b1ac5bc13be",
"assets/images/instagram%2520app%2520icon.PNG": "679406177aa1dee79257c4c0531e16de",
"assets/images/java.png": "4353d5ef8699a336a94ffa61e4ee824a",
"assets/images/linkdin%2520app%2520icon.png": "f249e7bb19b0534a175cfb01e12819ec",
"assets/images/portfolio.PNG": "30a7ecaf06c4c254a4b9f3aa326c7908",
"assets/images/programme.png": "2ba6744e61a45302f337e57d851bcb5f",
"assets/images/quiz%2520app%2520icon.PNG": "db533e8d14a77c3ee5caf04255e48b35",
"assets/images/zz-removebg-preview.png": "f0cb59a5b4239efb76171daa2ed1d873",
"assets/images/zzz.PNG": "3fe3da51cd2f29e7319eab1d465db39c",
"assets/NOTICES": "cbc238962dbdd77f39f118df55456062",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "cdc15fc0e34cc8ddbb20a7ee058b17a2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d14c2e9c5b89274dd7fc8302addf7723",
"/": "d14c2e9c5b89274dd7fc8302addf7723",
"main.dart.js": "ad39abc7cc1d9841d21004d5da98b877",
"manifest.json": "3007f6f91696ab4fdcbac61853ee0764",
"version.json": "cc1fa9cce5af273c0909d105387fee89"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
