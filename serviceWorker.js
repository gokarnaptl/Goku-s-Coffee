const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffe3.jpg",
  "/images/coffe3.jpg",
  "/images/coffe3.jpg",
  "/images/coffe5.jpg",
  "/images/coffe5.jpg",
  "/images/coffe3.jpg",
  "/images/coffe5.jpg",
  "/images/coffe3.jpg",
  "/images/coffe3.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
	  caches.match(fetchEvent.request).then(res => {
		return res || fetch(fetchEvent.request)
	  })
	)
  })