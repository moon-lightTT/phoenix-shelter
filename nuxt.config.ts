export default defineNuxtConfig({
  compatibilityDate: '2025-04-02',
  
  ssr: false,
  
  css: ['~/App.css'],
  
  nitro: {
    preset: 'static',
    output: {
      dir: '.output/public'
    },
    
    publicAssets: [
      {
        baseURL: '/phoenix-shelter/',
        dir: 'public'
      }
    ]
  },
  
  app: {
    baseURL: '/phoenix-shelter/',
    head: {
      title: 'Приют Феникс',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/phoenix-shelter/icons/avatar.svg' }
      ]
    }
  }
})