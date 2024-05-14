// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", [ "@vee-validate/nuxt",
    {
      autoImports: true,
      componentNames: {
        Form: 'VeeForm',
        Field: 'VeeField',
        FieldArray: 'VeeFieldArray',
        ErrorMessage: 'VeeErrorMessage'
      }
    }
  ], "@nuxt/fonts", "@nuxt/eslint",
  '@nuxt/test-utils/module'
  ],
  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/all.css',
  ],
})
