// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  //@ts-ignore
  tailwindcss: {
    configPath: './config/tailwind.js',
    viewer: true,
  },
  googleFonts: {
    families: {
      'Shantell+Sans': [300, 400],
    },
  },
});
