// import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel/serverless';

// import react from "@astrojs/react";

// // https://astro.build/config
// export default defineConfig({
//   output: 'server',
//   adapter: vercel(),
//   integrations: [react()]
// });

// THIS IS TO EXPORT STATIC AND THE ABOVE TO EXPORT TO SERVER

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static', // Choose either 'server' or 'static' depending on your deployment target
  adapter: vercel(),
});
