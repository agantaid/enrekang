if (!self.define) {
  let e,
    i = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    i[a] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = i), document.head.appendChild(e);
        } else (e = a), importScripts(a), i();
      }).then(() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const s = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (i[s]) return;
    let r = {};
    const d = (e) => a(e, s),
      o = { module: { uri: s }, exports: r, require: d };
    i[s] = Promise.all(n.map((e) => o[e] || d(e))).then((e) => (c(...e), r));
  };
}
define(['./workbox-588899ac'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/G5wTbVqVqQIYo4XQeEeI8/_buildManifest.js',
          revision: 'ff9972163793f69b33dd669bb64d3005',
        },
        {
          url: '/_next/static/G5wTbVqVqQIYo4XQeEeI8/_ssgManifest.js',
          revision: '5352cb582146311d1540f6075d1f265e',
        },
        { url: '/_next/static/chunks/0b7b90cd.d0138cbfae6ae884.js', revision: 'd0138cbfae6ae884' },
        { url: '/_next/static/chunks/128-38c95b0519e35b98.js', revision: '38c95b0519e35b98' },
        { url: '/_next/static/chunks/462-86a68e450817d18c.js', revision: '86a68e450817d18c' },
        { url: '/_next/static/chunks/635-9e7f215b567a2774.js', revision: '9e7f215b567a2774' },
        { url: '/_next/static/chunks/907-8abd73b037b1e384.js', revision: '8abd73b037b1e384' },
        { url: '/_next/static/chunks/972.fe323c7dd7e5e687.js', revision: 'fe323c7dd7e5e687' },
        { url: '/_next/static/chunks/framework-9b5d6ec4444c80fa.js', revision: '9b5d6ec4444c80fa' },
        { url: '/_next/static/chunks/main-b2616eea889b0f38.js', revision: 'b2616eea889b0f38' },
        {
          url: '/_next/static/chunks/pages/_app-8f2f3749abdd2786.js',
          revision: '8f2f3749abdd2786',
        },
        {
          url: '/_next/static/chunks/pages/_error-7397496ca01950b1.js',
          revision: '7397496ca01950b1',
        },
        {
          url: '/_next/static/chunks/pages/event-48ade2378148ca5f.js',
          revision: '48ade2378148ca5f',
        },
        {
          url: '/_next/static/chunks/pages/explore-1d8ae89739cf6dc6.js',
          revision: '1d8ae89739cf6dc6',
        },
        {
          url: '/_next/static/chunks/pages/index-51df4e00ab81f671.js',
          revision: '51df4e00ab81f671',
        },
        {
          url: '/_next/static/chunks/pages/viewDestinasi-4ba47b40c9d7f909.js',
          revision: '4ba47b40c9d7f909',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        { url: '/_next/static/chunks/webpack-8efe6daacdfcf2d6.js', revision: '8efe6daacdfcf2d6' },
        { url: '/_next/static/css/404c04e48e69af77.css', revision: '404c04e48e69af77' },
        { url: '/_next/static/css/5674832e1468d24d.css', revision: '5674832e1468d24d' },
        { url: '/_next/static/css/ae4ed9c503fd1e33.css', revision: 'ae4ed9c503fd1e33' },
        { url: '/_next/static/css/c89eed449d4591a7.css', revision: 'c89eed449d4591a7' },
        { url: '/_next/static/media/ajax-loader.0b80f665.gif', revision: '0b80f665' },
        { url: '/_next/static/media/layers-2x.9859cd12.png', revision: '9859cd12' },
        { url: '/_next/static/media/layers.ef6db872.png', revision: 'ef6db872' },
        {
          url: '/_next/static/media/marker-icon-2x.93fdb12c.png',
          revision: '401d815dc206b8dc1b17cd0e37695975',
        },
        { url: '/_next/static/media/marker-icon.d577052a.png', revision: 'd577052a' },
        {
          url: '/_next/static/media/marker-icon.d577052a.png',
          revision: '2273e3d8ad9264b7daa5bdbf8e6b47f8',
        },
        {
          url: '/_next/static/media/marker-shadow.612e3b52.png',
          revision: '44a526eed258222515aa21eaffd14a96',
        },
        { url: '/_next/static/media/slick.25572f22.eot', revision: '25572f22' },
        { url: '/_next/static/media/slick.653a4cbb.woff', revision: '653a4cbb' },
        { url: '/_next/static/media/slick.6aa1ee46.ttf', revision: '6aa1ee46' },
        { url: '/_next/static/media/slick.f895cfdf.svg', revision: 'f895cfdf' },
        { url: '/bg-comment.png', revision: 'c758cbdc3ef8047c66004613a669ef4a' },
        { url: '/bg-download.png', revision: '67ca6c2f57ddcddfaaaeaa57ed5797dd' },
        { url: '/bg-hero-home.jpg', revision: 'a0483744a4243367dd6ce93959b99140' },
        { url: '/culture-tour.png', revision: 'f8e0a2b95dce6d41d168db5fddb2cf2f' },
        { url: '/event1.png', revision: '05c85856a93c7e85ea2ca6aca25bb537' },
        { url: '/event2.png', revision: '07cf70f42615f0c82cc4cc771138d00a' },
        { url: '/event3.png', revision: '4270aa6f2972b87ca3b808fb7f068a29' },
        { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
        { url: '/favicon/android-icon-144x144.png', revision: '81e4b26ee1841e5bae32c1910c7625cd' },
        { url: '/favicon/android-icon-192x192.png', revision: '932bcdb066a1136ce279b6561aa62cbe' },
        { url: '/favicon/android-icon-36x36.png', revision: '8f608f4a43d71c8868e3d65325d08a94' },
        { url: '/favicon/android-icon-48x48.png', revision: '7dbf874f3ffbaca4b4fcac63a54efcbb' },
        { url: '/favicon/android-icon-72x72.png', revision: '9ba11452a9bb917024ddea52dabcbd02' },
        { url: '/favicon/android-icon-96x96.png', revision: 'a85bbdcc6b13c7e64612032b154808a3' },
        { url: '/favicon/apple-icon-114x114.png', revision: 'a9f7aa1ce5c2901100ac68ee6ef89169' },
        { url: '/favicon/apple-icon-120x120.png', revision: '49084130ba528f7d46bcddd115b79bf9' },
        { url: '/favicon/apple-icon-144x144.png', revision: '81e4b26ee1841e5bae32c1910c7625cd' },
        { url: '/favicon/apple-icon-152x152.png', revision: '8852bb5fa3170369319ecbe0069d630a' },
        { url: '/favicon/apple-icon-180x180.png', revision: '81a3b5739bb19e7f076470d2d9949eed' },
        { url: '/favicon/apple-icon-57x57.png', revision: '06ed91b8db63cad658ee45066a19b8b0' },
        { url: '/favicon/apple-icon-60x60.png', revision: 'bf797279fcb97219d2cb3aa44bc0c14c' },
        { url: '/favicon/apple-icon-72x72.png', revision: '9ba11452a9bb917024ddea52dabcbd02' },
        { url: '/favicon/apple-icon-76x76.png', revision: '5b260ac1b9a1211e6cb4f5b3e12fe0fb' },
        {
          url: '/favicon/apple-icon-precomposed.png',
          revision: 'f388d7a19228de8bd9e0700b08a3b41e',
        },
        { url: '/favicon/apple-icon.png', revision: 'f388d7a19228de8bd9e0700b08a3b41e' },
        { url: '/favicon/browserconfig.xml', revision: '97775b1fd3b6e6c13fc719c2c7dd0ffe' },
        { url: '/favicon/favicon-16x16.png', revision: '2cb89e62a0f7643ca77c92826ec24689' },
        { url: '/favicon/favicon-32x32.png', revision: '6e1e9f656c7b90ae6ebf6f1828608a45' },
        { url: '/favicon/favicon-96x96.png', revision: 'a85bbdcc6b13c7e64612032b154808a3' },
        { url: '/favicon/favicon.ico', revision: '96c3b127c6b11ea16f1c4c8ba73776dc' },
        { url: '/favicon/manifest.json', revision: '042786ae3d29ebe1b272f54ad9991ba2' },
        { url: '/favicon/ms-icon-144x144.png', revision: '81e4b26ee1841e5bae32c1910c7625cd' },
        { url: '/favicon/ms-icon-150x150.png', revision: '0c177e2ca9534e918d728d561ab9b30b' },
        { url: '/favicon/ms-icon-310x310.png', revision: '907018bd21b5ecfe8523227d7c4a96c3' },
        { url: '/favicon/ms-icon-70x70.png', revision: 'a07ab35feb26b65b02dba30105d2ca4c' },
        { url: '/heroSlider1.png', revision: '04dd69c553462af1b0e1d6131bf36d2d' },
        { url: '/heroSlider2.png', revision: '2738246c70a22617abad24d19e93e7c6' },
        { url: '/heroSlider3.png', revision: 'a0483744a4243367dd6ce93959b99140' },
        { url: '/icon-culture.png', revision: '5c25836340de53b703c60f0a75e40925' },
        { url: '/icon-downloadapp.png', revision: 'e7c2eac3fbf60f983a94792a8b4ab28e' },
        { url: '/icon-drawer-menus-logo.png', revision: '4f0f1d9c69d23cafafa22b0e7e7dad82' },
        { url: '/icon-faq.png', revision: '9b4ffa981d7b221f5ce9550dd3507a97' },
        { url: '/icon-fin2.png', revision: 'b9b76a8c49c59781d246a771430c8683' },
        { url: '/icon-find.png', revision: 'fbbc8f9f8d162234848ddc37c60a2f55' },
        { url: '/icon-hr.png', revision: '3c7954c12762bd8037bb749aa5754dad' },
        { url: '/icon-nature.png', revision: '5a00dfeb09faac5a2b4a5cfa1cc2ad62' },
        { url: '/icon-tourist.png', revision: '35237c5e58dd1986cc60fbbcdfab5c21' },
        { url: '/logo-dispopar.png', revision: '44835517bb220ce48ddb4e840acf503e' },
        { url: '/manifest.json', revision: '31ed7dcf74fd378e78d54d77fc4e48d5' },
        { url: '/map-spot.png', revision: '35a7efb6cb58e54f00960d38d5dcb95d' },
        { url: '/maps-destinasi.png', revision: '7690e78ddac67bf197b74814427968d1' },
        { url: '/marker-icon-2x.png', revision: '2273e3d8ad9264b7daa5bdbf8e6b47f8' },
        { url: '/marker-shadow.png', revision: '44a526eed258222515aa21eaffd14a96' },
        { url: '/nature-tour.png', revision: 'f6104cb7346519b8acaf5ec5fa39b8f7' },
        { url: '/testimonial-profile.png', revision: 'ac51c70562749c8f4bd3b17a4f821aca' },
        { url: '/testimonial-view.png', revision: '55ce0b65a2d4f7d5436359f841757148' },
        { url: '/travel-inpirasi1.png', revision: 'c638076b1bf5c6203df54cbbbde4ecf1' },
        { url: '/travel-inpirasi2.png', revision: '257ac64faeff380e1f3f33d1bab7e325' },
        { url: '/travel-inpirasi3.png', revision: 'a44e399b16499fdb8af8b821c7de3c24' },
        { url: '/travel-inpirasi4.png', revision: 'f06d5d6a88ea2a7861e645893a33f24a' },
        { url: '/travel-inpirasi5.png', revision: '4dfc7735dcbfd5589c3839983493c595' },
        { url: '/trip-ideas1.png', revision: '51e36efc954321c016734a018a793995' },
        { url: '/trip-ideas2.png', revision: '56ee94aaee97e035be9202ffb9567f53' },
        { url: '/trip-ideas3.png', revision: 'f72c877c011deda73a8549afc3ee0d18' },
        { url: '/trip-ideas4.png', revision: 'cb01b89dfe3d8b7d37e3b75e8c654c95' },
        { url: '/vercel.svg', revision: '26bf2d0adaf1028a4d4c6ee77005e819' },
        { url: '/view-destinasi.png', revision: 'f3843caae32dc9e3364b991183ad369c' },
        { url: '/view-facilities1.png', revision: 'f57b281eed2033bc730fa06d625f6afc' },
        { url: '/view-facilities2.png', revision: '6330c4842f3b90eca4667edcb6b41ecb' },
        { url: '/view-facilities3.png', revision: '07c0d06e80f3861dab4ea015f4196a16' },
        { url: '/view-facilities4.png', revision: '80311c2dd0f232a93a155c0552e7cd0d' },
        { url: '/wisata1.png', revision: 'ce2103c2889968012b70bebbbf6dfadd' },
        { url: '/wisata2.png', revision: '79dc15318944c19a62039a1d286bc107' },
        { url: '/wisata3.png', revision: 'c93eefafbab938e27321ca2455e6995c' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: i, event: a, state: n }) =>
              i && 'opaqueredirect' === i.type
                ? new Response(i.body, { status: 200, statusText: 'OK', headers: i.headers })
                : i,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const i = e.pathname;
        return !i.startsWith('/api/auth/') && !!i.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    );
});
