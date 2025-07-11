import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Autopen Documentation",
  description: "Plataforma de Credenciales Verificables W3C",
  // base: '/autopen-docs/',
  locales: {
    root: {
      label: 'Español',
      lang: 'es',
      title: 'Documentación Autopen',
      description: 'Plataforma de credenciales verificables W3C para firma digital segura',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' },
          { 
            text: 'Aprende', 
            items: [
              { text: 'Qué son las Firmas Digitales', link: '/aprende/firmas-digitales' },
              { text: 'Historia de las Firmas', link: '/aprende/historia' },
              { text: 'Estándares W3C', link: '/aprende/w3c-estandares' }
            ]
          },
          { 
            text: 'Plataforma', 
            items: [
              { text: 'Credenciales', link: '/plataforma/credenciales' },
              { text: 'Firmador', link: '/plataforma/firmador' },
              { text: 'Verificar', link: '/plataforma/verificar' }
            ]
          },
          { 
            text: 'Casos de Uso', 
            items: [
              { text: 'Colegios Profesionales', link: '/casos-uso/colegios' },
              { text: 'Instituciones Educativas', link: '/casos-uso/educacion' },
            ]
          },
          { 
            text: 'Devs', 
            items: [
              { text: 'Guía de Inicio', link: '/devs/inicio' },
              { text: 'API', link: '/devs/api' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Aprende',
            items: [
              { text: 'Qué son las Firmas Digitales', link: '/aprende/firmas-digitales' },
              { text: 'Historia de las Firmas', link: '/aprende/historia' },
              { text: 'Estándares W3C', link: '/aprende/w3c-estandares' }
            ]
          },
          {
            text: 'Plataforma',
            items: [
              { text: 'Credenciales', link: '/plataforma/credenciales' },
              { text: 'Firmador', link: '/plataforma/firmador' },
              { text: 'Verificar', link: '/plataforma/verificar' }
            ]
          },
          {
            text: 'Casos de Uso',
            items: [
              { text: 'Colegios Profesionales', link: '/casos-uso/colegios' },
              { text: 'Instituciones Educativas', link: '/casos-uso/educacion' },
            ]
          },
          {
            text: 'Devs',
            items: [
              { text: 'Guía de Inicio', link: '/devs/inicio' },
              { text: 'API Reference', link: '/devs/api' }
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
          {
            text: 'Learn',
            items: [
              { text: 'What are Digital Signatures', link: '/en/aprende/firmas-digitales' },
              { text: 'History of Signing', link: '/en/aprende/historia' },
              { text: 'W3C Standards', link: '/en/aprende/w3c-estandares' }
            ]
          },
          {
            text: 'Platform',
            items: [
              { text: 'Credentials', link: '/en/plataforma/credenciales' },
              { text: 'Signer', link: '/en/plataforma/firmador' },
              { text: 'Verifier', link: '/en/plataforma/verificar' }
            ]
          },
          {
            text: 'Use Cases',
            items: [
              { text: 'Professional Associations', link: '/en/casos-uso/colegios' },
              { text: 'Educational Institutions', link: '/en/casos-uso/educacion' },
            ]
          },
          {
            text: 'Devs',
            items: [
              { text: 'Getting Started Guide', link: '/en/devs/inicio' },
              { text: 'API Reference', link: '/en/devs/api' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Learn',
            items: [
              { text: 'What are Digital Signatures', link: '/en/aprende/firmas-digitales' },
              { text: 'History of Signing', link: '/en/aprende/historia' },
              { text: 'W3C Standards', link: '/en/aprende/w3c-estandares' }
            ]
          },
          {
            text: 'Platform',
            items: [
              { text: 'Credentials', link: '/en/plataforma/credenciales' },
              { text: 'Signer', link: '/en/plataforma/firmador' },
              { text: 'Verifier', link: '/en/plataforma/verificar' }
            ]
          },
          {
            text: 'Use Cases',
            items: [
              { text: 'Professional Associations', link: '/en/casos-uso/colegios' },
              { text: 'Educational Institutions', link: '/en/casos-uso/educacion' },
            ]
          },
          {
            text: 'Devs',
            items: [
              { text: 'Getting Started Guide', link: '/en/devs/inicio' },
              { text: 'API Reference', link: '/en/devs/api' }
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