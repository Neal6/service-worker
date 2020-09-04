//@ts-ignore
if ("function" === typeof importScripts) {
  //@ts-ignore
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
  );
  //@ts-ignore
  if (workbox) {
    console.log("Workbox is loaded");

    //@ts-ignore
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    //@ts-ignore
    workbox.routing.registerNavigationRoute("/index.html", {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });
    //@ts-ignore

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      //@ts-ignore
      new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
          //@ts-ignore
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    console.log(self);
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
