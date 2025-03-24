export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cache = caches.default;

    // check if request is for a static asset (js, css, images, etc.)
    if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|otf|json|txt|mp4|webm)$/)) {
      return env.ASSETS.fetch(request);
    }

    // check if the requested path is not the root
    if (url.pathname !== "/" && !url.pathname.startsWith("/#")) {
      // return index.html for all react routes
      const response = await env.ASSETS.fetch(new Request(url.origin + "/index.html", request));
      return new Response(response.body, response);
    }

    return env.ASSETS.fetch(request);
  },
};
