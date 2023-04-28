import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';

// const vitestConfig: VitestUserConfigInterface = {
//     test: {
//       // vitest config, with helpful vitest typing :)
//     }
//   };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    environment: 'jsdom',
    globals: true,
    deps: {
      inline: [/vite-test-utils/]
    },
    includeSource: ["src/**/*.{js,ts}"],
  },
})
