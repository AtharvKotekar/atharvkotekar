export default {
  async fetch(request, env, ctx) {
    let url = new URL(request.url);

    // check if the request is for a file (e.g., .css, .js, .png)
    if (url.pathname.includes(".")) {
      return env.ASSETS.fetch(request);
    }

    // if the request is for a route (e.g., /writings), return index.html
    return new Response(await env.ASSETS.fetch(new Request(url.origin + "/index.html")), {
      headers: { "Content-Type": "text/html" },
    });
  },
};
