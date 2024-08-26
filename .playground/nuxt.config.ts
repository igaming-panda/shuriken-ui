import { addTemplate } from '@nuxt/kit'
import colors from 'tailwindcss/colors.js'
import { join, dirname } from 'pathe'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  extends: '..',
  sourcemap: true,
  tailwindcss: {
    // config: {
    //   content: [],
    //   theme: {
    //     fontFamily: {
    //       heading: ['Inter', 'sans-serif'],
    //       sans: ['Inter', 'sans-serif'],
    //       alt: ['Karla', 'sans-serif'],
    //       mono: [
    //         'ui-monospace',
    //         'SFMono-Regular',
    //         'Menlo',
    //         'Monaco',
    //         'Consolas',
    //         '"Liberation Mono"',
    //         '"Courier New"',
    //         'monospace',
    //       ],
    //     },
    //     extend: {
    //       colors: {
    //         primary: colors?.violet,
    //         muted: colors?.stone,
    //       },
    //     },
    //   },
    // },
  },
  hooks: {
    // @ts-ignore
    'tailwindcss:resolvedConfig'(config) {
      addTemplate({
        filename: 'tailwind.config.ts', // gets prepended by .nuxt/
        getContents: () => `export default ${JSON.stringify(config, null, 2)}`,
        write: true,
      })
    },
  },
})
