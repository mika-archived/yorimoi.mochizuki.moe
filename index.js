const routes = [
  {
    route: "/",
    to: "http://yorimoi.com"
  },
  {
    route: "/abematv",
    to: "https://abema.tv/video/title/54-11"
  },
  {
    route: "/amazon",
    to: "https://www.amazon.co.jp/gp/video/detail/B078TQQQGL"
  },
  {
    route: "/bch",
    to: "https://www.b-ch.com/titles/5885/?ttl_c=5885"
  },
  {
    route: "/danime",
    to: "https://anime.dmkt-sp.jp/animestore/ci?workId=21949"
  },
  {
    route: "/dmm",
    to: "https://www.dmm.com/digital/videomarket/anime/-/detail/=/title_id=156310/"
  },
  {
    route: "/fod",
    to: "https://fod.fujitv.co.jp/s/genre/anime/ser5617/"
  },
  {
    route: "/hulu",
    to: "https://www.happyon.jp/a-story-that-leads-to-the-antarctica"
  },
  {
    route: "/movie-full",
    to: "http://mfplus.jp/channel/8103/sub_channel.php"
  },
  {
    route: "/niconico",
    to: "https://ch.nicovideo.jp/yorimoi"
  },
  {
    route: "/unext",
    to: "https://video.unext.jp/title/SID0032770?an_trans=search"
  },
  {
    route: "/video-market",
    to: "https://www.videomarket.jp/title/156310?cup=-VM_copyright_t156310_1&utm_source=copyright&utm_medium=seo"
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
