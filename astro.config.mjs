import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://which-filament.com',
  output: 'static',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  server: {
    // Lets the dev/preview server answer when reached over Tailscale (e.g. https://<machine>.<tailnet>.ts.net)
    allowedHosts: ['.ts.net'],
  },
});
