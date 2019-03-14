import providers from "./providers.json";

fly.http.respondWith(function(request) {
  const path = new URL(request.url);
  const { url } = providers.find(w => w.id === path.pathname.substr(1)) || {
    url: "http://yorimoi.com"
  };

  return new Response("redirecting...", {
    headers: {
      Location: url
    },
    status: 302
  });
});
