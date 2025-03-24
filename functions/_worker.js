export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle static files first
    if (
      url.pathname.endsWith('.js') ||
      url.pathname.endsWith('.css') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.gif') ||
      url.pathname.endsWith('.svg') ||
      url.pathname.endsWith('.ico')
    ) {
      return env.ASSETS.fetch(request);
    }

    // For all other routes, serve index.html
    return env.ASSETS.fetch(`${url.origin}/index.html`);
  }
}; 