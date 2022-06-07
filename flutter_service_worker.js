'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "9b079cabae47c2e94112afe51a952e09",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bfd6847fd593db1331373adcc9543208",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb58a369d246e31b0b0ed03ad47ef1f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e76536b8841ef9cdb6e68255c4690a21",
".git/logs/refs/heads/main": "68bee406949fbec0cc345ffbe92d2ca6",
".git/logs/refs/remotes/origin/main": "57aecc91fc0967783a7d4db606f4a655",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/0a/c10b6ab086e3b79b1826137daf1bf42e078493": "591443185d712713d9bc3213c7a6f907",
".git/objects/0c/ba102952965d3712c6fb5f86266cacebd76921": "62bce4f5b685db71306843e28abd0f15",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/4161c6b5788eaf1fba1b910b70b8efde3bd1fc": "9ec6caeb0fc6bd62ce2efa0fef0bf5cf",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/e5df76020ca30d64ee36be8ebf520b08becf7c": "14a93e9a10722179b8997b38af0a83fe",
".git/objects/15/b2a4d488bdc4ddf6a3a09edcc1cc3ed3687d1d": "ac24e9cd22bd6df242b35788e2992201",
".git/objects/16/7b1d27c8e87df127c11322ef4cca25cdbe4288": "51ade280aa5d2cb7ccd3f9cf92ffd01f",
".git/objects/17/9eae7a73630a7af76374c590555af8158e6145": "1988c2959091e1bf127d920f7db99fdc",
".git/objects/18/699d293105b261010d6f921ebe929c6a2b255e": "353e13b8c18d103ba658a678576a4fec",
".git/objects/1c/88164b9deb9e412ce21835b7f2f88c7e8f51dc": "a49d1219b05140794d211c2e65419492",
".git/objects/1c/c7e0603034511a0808fade43c7536d7abc5bff": "765958743dcaa906c06a086635f4a3bf",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/21/602c0c130bec047f1996779fc3cc684a8b8af9": "b2270884ac22db7e37bab846bb2da92c",
".git/objects/21/87ba31887252943e1adaff8020948a4df0eceb": "f11e484e33452d11ebb7782145325c22",
".git/objects/24/83dff463f4822d691d47e786af98f9dc9d4114": "2455910e775e481e98ad970ebae267d3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/1c471196503a74974f033fb5d90ff8b972343e": "15a7e1952043ba77c77fefe8084cabd6",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/d4ece814e10a30557776c1cf2d2f0a4377837d": "fc8275307fd4df8c45fd56c12667436d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/36160bf2408aa052a08535ffb38cc38f21b0a6": "ed1610b13d00c28d2fcf2f0b2c12465d",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/3a/30359dc759aac83f1750fd9804323930c47157": "7a18082afe2decf75321bdedd7c0af6a",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/3e/2e8f14442d76c60061e357d6348ae71d2825bc": "52d418e8e155d2cadbd78440a2d02c40",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/4c/628942c230f3e8c9f38cb3e28958b793813ddc": "8a5ceb3941327ba22b5427cfbf5626cd",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/f1f11c4a37cd7d6b0d55138809a0719a837f55": "6b7b65bd8764baadc056a6bb59321334",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/1cf98d2fa38bc9137c156949892774de85f25d": "5e339dcb5258cdb24777558f6169f18d",
".git/objects/57/995c430a3e9328fc7b710b52a5a4a963642a7a": "f646ab05df9910041512f509f1af89d4",
".git/objects/5b/85a25b49d005549c0af567f39874f3cd3e38d5": "33ea13d637fb623007a39c58c61c069c",
".git/objects/5c/7a88d28faff4d9b91c8b9ae378162655d6f84d": "f14444a8f427a247af20a9c82ec47876",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/fa99d790305669b93f671cc03f361e6ac1b32d": "ff8858237755620ca5c6ae24d1d694f5",
".git/objects/78/41b98fb9d9b6c2edef36897cc754c3e0548dfc": "57e78af581f901ac93b3831e6ff78a25",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/db53d0e02d64c97ab2dac1e10aea4219ca902c": "b93d9e56f8757267da0bcb14b502b202",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/5ab8700b467040b99fa523044803f37aae8f26": "c37ce8bd7d2015ba8481f28e2527b2f3",
".git/objects/8f/5e1f62303b044e0c1fe799395e4111c5adf5c9": "3792ef732dc5079fdc54c13616836369",
".git/objects/93/6ece25be1ee835793c04542952f12d5c911217": "a6c2f0b523f14c42e97878131e1e0b2c",
".git/objects/9c/f23e0ddf58df2ec13da2b791ecc44828222ab5": "095c2509664263784ebb6a4bf2f94ae7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/bc43ce1375cc1fc525a2977f87fb6e1a2ab6bf": "de4447c81959ea210704344cc0aa23f4",
".git/objects/ab/8cf485c8cd3e309571e4a84a02cbf8bc68d21f": "59a6839a33abfbf81dee9d96af9a82cf",
".git/objects/ad/56724f956a4e9c6c19657f5d9090f27277136e": "651041479b22adda12c827e9c44953ed",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/b3/2d9c42f5f904b8af1d24bc10ce761588dd763d": "d012432ffb347ad320d62039bf997879",
".git/objects/b3/5d7dbb733bf2583bdb26d43db39de31333daa9": "a9e2bcbf56b9ed5ae50453893e4ab904",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/6df52b129b571d93b5c8c52c86e0696011672d": "f9da0178986f223ca537bb8f8c071a20",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/292945734cdb70c18b6916f50bc2a8d2fb1008": "132c1c1ed58fe52873cdfbaba0964e45",
".git/objects/c6/17ac8164b1b92d7f95923b4c38883afb224338": "f0239b2401860b1c192028ac4e8a625e",
".git/objects/c6/8d746929deb81924c9f5e805bdbfc12bccbf46": "8935d08ad1ee134aa6beec6027513fa1",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/c9/249c367148e24df6a66d3cf65401e85e0ebc09": "9bc95ab0d3bde46fadb129879d218828",
".git/objects/cc/794072fe21d46585aa0d57c0b1e79fd0ce5193": "7ebe625534a1ee5978ec832f82143387",
".git/objects/cf/0f050cac19070112309aa7ff5311d0872481c3": "4e35688a7d1fc0bf5eeb565390419894",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d0/2cceb9929ba26237164692173e3a9921ba8838": "f23f957e2fb1ab8c148c1eb3e00f0c67",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/f6aedf225e1e8d5abcca7cac2e95b8df9bca93": "b68d8d9800c9c4794995cf1a457ad221",
".git/objects/de/66aa4c8025d6e8ae1b85045a4f351d1ef42182": "775c4887f172e9cfbf05fc45e46988d9",
".git/objects/df/d2b5ecd8df817e42ceb210a9c9ea55a75816e3": "98705548d1ee4e2d64ff1f9473142218",
".git/objects/e2/181f77435225e0150814390e9bf5a373daaff5": "656636833159fcb1f13fe2121501b832",
".git/objects/e4/fe5d0b0fdbaf0ba9d2f3bf1cc0ebeefef2dd59": "8125381578663e10ee7e2d98f18b2697",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/845a28576c6c77c31de65db4abbe463d6fcee9": "5561817988059a4b544e13a5638ca844",
".git/objects/e9/5b7b2a0f97e23040d65e2931061ff77a39aa73": "d67effa3f055a05668d0a66be8efa972",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9dc8a92362255cda920243b44aa5a421c7a93b": "8785a26170967ba882ebe5f77d16e82b",
".git/objects/f1/664ed1906f66c2f0e3bee4fa4f6a085aa54dfa": "e61f5f4ff98d277de2c5dff97e76b724",
".git/objects/f8/93b54c659ba9da2c19b4c4ed1f7172231313da": "ca7f846195cd8ca3732bfea66b17dafc",
".git/objects/fa/5ba961273217088fd693636db51394ddc69ab1": "8ef05662bc9e6fb41bd084d50f8fc11d",
".git/objects/fc/c7933c7a0be1a32057af45e53dbb1912dce842": "cd0b20114e3e54d0547c32e1e23cfbf0",
".git/ORIG_HEAD": "fb04970198b2ebfc6872c783fd307006",
".git/refs/heads/main": "5c18508dce41ccdf12b5466cb48c2885",
".git/refs/remotes/origin/main": "5c18508dce41ccdf12b5466cb48c2885",
"assets/AssetManifest.json": "005a443cabcd684e0107666b8aa58cd2",
"assets/assets/fonts/nunito/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/nunito/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/assets/fonts/nunito/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/nunito/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/assets/fonts/nunito/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/nunito/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/assets/fonts/nunito/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/assets/fonts/nunito/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/assets/fonts/nunito/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/fonts/nunito/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/assets/fonts/nunito/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/assets/fonts/nunito/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/nunito/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/nunito/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/assets/images/login_bg.png": "2405cc6795b62ecd8a8bd8052ee42da0",
"assets/assets/images/logo.png": "d1e679f3b8ff768ea9908ad7d3c1b46a",
"assets/assets/images/mourafik-icon.png": "bc5caa3a2e616dac3e2a83e948186308",
"assets/assets/images/mourafika-icon.png": "d6b517382cccf8f802dad82953e89eee",
"assets/assets/images/raster/man.png": "038044b52a3b38078fbec1d61af42639",
"assets/assets/images/raster/tel.png": "038044b52a3b38078fbec1d61af42639",
"assets/assets/images/thumbnail_admin-icon.png": "b77712ca66a816d74764ba4e3a761f17",
"assets/assets/images/thumbnail_hajj-icon.png": "24d53e5b81849a56083e536af6fa66df",
"assets/assets/images/thumbnail_hajja-icon.png": "1b3767af6498de35380f889c37593501",
"assets/assets/images/thumbnail_seik-icon.png": "f0fdbab8b58e873379d34f4bd847c515",
"assets/FontManifest.json": "b2dc9aadb7c86fd3e113b1189d4b5821",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "84f04923072f7d948f15d0fb71094032",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/sp.gif": "baeaf0c7f02777839e58eed62cc714c4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5e2b174f2ff4f8ff71f4e417b5fee772",
"/": "5e2b174f2ff4f8ff71f4e417b5fee772",
"main.dart.js": "67891078d1d952d3ed0f97956122ed32",
"manifest.json": "c674475108857f7f6f790d68a1c6886a",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/splash.json": "bcb7399c07ec8085f712ab667f96ecf9",
"splash/style.css": "192270c56052dfd03bc8466710de8e0c",
"version.json": "12f2acf6b803349b1afd40547cdde1d8"
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
