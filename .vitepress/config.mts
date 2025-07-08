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
          { 
            text: 'Aprende', 
            items: [
              { text: 'Qué son las Firmas Digitales', link: '/es/aprende/firmas-digitales' },
              { text: 'Historia de las Firmas', link: '/es/aprende/historia' },
              { text: 'Estándares W3C', link: '/es/aprende/w3c-estandares' }
            ]
          },
          { 
            text: 'Plataforma', 
            items: [
              { text: 'Características', link: '/es/plataforma/caracteristicas' },
              { text: 'Beneficios Empresariales', link: '/es/plataforma/beneficios' },
              { text: 'Seguridad y Cumplimiento', link: '/es/plataforma/seguridad' }
            ]
          },
          { 
            text: 'Casos de Uso', 
            items: [
              { text: 'Colegios Profesionales', link: '/es/casos-uso/colegios' },
              { text: 'Instituciones Educativas', link: '/es/casos-uso/educacion' },
              { text: 'Empresas Corporativas', link: '/es/casos-uso/empresas' }
            ]
          },
          { 
            text: 'Documentación', 
            items: [
              { text: 'Guía de Inicio', link: '/es/docs/inicio' },
              { text: 'API Reference', link: '/es/docs/api' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Aprende',
            items: [
              { text: 'Qué son las Firmas Digitales', link: '/es/aprende/firmas-digitales' },
              { text: 'Historia de las Firmas', link: '/es/aprende/historia' },
              { text: 'Estándares W3C', link: '/es/aprende/w3c-estandares' }
            ]
          },
          {
            text: 'Plataforma',
            items: [
              { text: 'Características', link: '/es/plataforma/caracteristicas' },
              { text: 'Beneficios Empresariales', link: '/es/plataforma/beneficios' },
              { text: 'Seguridad y Cumplimiento', link: '/es/plataforma/seguridad' }
            ]
          },
          {
            text: 'Casos de Uso',
            items: [
              { text: 'Colegios Profesionales', link: '/es/casos-uso/colegios' },
              { text: 'Instituciones Educativas', link: '/es/casos-uso/educacion' },
              { text: 'Empresas Corporativas', link: '/es/casos-uso/empresas' }
            ]
          },
          {
            text: 'Documentación',
            items: [
              { text: 'Guía de Inicio', link: '/es/docs/inicio' },
              { text: 'API Reference', link: '/es/docs/api' }
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