import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), tunnel()]
});