const routes = [
  {
    route: "/",
    to: "http://yorimoi.com"
  },
  {
    route: "/amazon",
    to: "https://www.amazon.co.jp/gp/video/detail/B078TQQQGL"
  }
];

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const route = routes.filter(w => w.route == url.pathname);

  return route.length > 0 ? Response.redirect(route[0].to, 301) : new Response("Invalid Routing", { status: 200 });
}
