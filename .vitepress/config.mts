import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Autopen Documentation",
  description: "Plataforma de Credenciales Verificables W3C",
  
  locales: {
    root: {
      label: 'Español',
      lang: 'es',
      link: '/es/',
      title: 'Documentación Autopen',
      description: 'Plataforma de credenciales verificables W3C para firma digital segura',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Ejemplos', link: '/es/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Ejemplos',
            items: [
              { text: 'Ejemplos Markdown', link: '/es/markdown-examples' },
              { text: 'Ejemplos API', link: '/es/api-examples' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Autopen Documentation',
      description: 'W3C verifiable credentials platform for secure digital signing',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Examples', link: '/en/markdown-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'API Examples', link: '/en/api-examples' }
            ]
          }
        ]
      }
    }
  },
  
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucerolabs/autopen' }
    ]
  }
})