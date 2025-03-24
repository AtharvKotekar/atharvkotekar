export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle static assets
    if (url.pathname.startsWith('/assets/')) {
      return env.ASSETS.fetch(request);
    }

    try {
      // Try to serve the requested path
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404) {
        // If not found, serve index.html
        return env.ASSETS.fetch(`${url.origin}/index.html`);
      }
      return response;
    } catch {
      // On error, serve index.html
      return env.ASSETS.fetch(`${url.origin}/index.html`);
    }
  }
}; 