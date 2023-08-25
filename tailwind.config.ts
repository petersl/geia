import pluginAspectRatio from '@tailwindcss/aspect-ratio';
import pluginContainerQueries from '@tailwindcss/container-queries';
import pluginForms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [pluginForms, pluginAspectRatio, pluginContainerQueries],
} satisfies Config;
