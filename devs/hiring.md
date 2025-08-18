# Programa de Pasantías en Ingeniería SSI

**Construyendo el Futuro de la Identidad Digital**

**Duración**: Septiembre 2025 - Diciembre 2025 (4 meses, extensible a 6 meses)
**Compromiso**: Medio tiempo, 20 horas/semana (4h/día)
**Compensación**: $1,000 USD/mes + $150 créditos de API
**Ubicación**: Híbrido (coworking en Colegiales + remoto)

## 1. Sobre Lucero Labs

Somos Lucero Labs, una startup que moderniza la confianza a través de soluciones de identidad de vanguardia. Nuestro producto estrella, Autopen, es una plataforma de firma digital respaldada por blockchain construida sobre QuarkID para la Ciudad de Buenos Aires.

**Nuestro Respaldo**
- Financiado por la Fundación Avalanche
- Parte del movimiento Crecimiento
- Misión: Mover a Argentina on-chain

**Impacto Actual**
- Desplegado en universidades de Buenos Aires para control de asistencia y emisión de certificados
- Procesando firmas digitales del mundo real con verificación en blockchain
- Construyendo infraestructura para la transformación digital de Argentina

## 2. El Desafío

Necesitamos modernizar nuestro stack de Identidad Auto-Soberana (SSI). Nuestra implementación actual de QuarkID, aunque funcional, fue construida como una prueba de concepto. Ahora estamos escalando para servir a millones de residentes de Buenos Aires.

**La Misión**: Modernizar el stack SSI de QuarkID de una prueba de concepto a una infraestructura de grado de producción. Esto implica evaluar frameworks existentes (como Credo-TS de Hyperledger), construir potencialmente soluciones personalizadas y asegurar una compatibilidad perfecta con las integraciones existentes de Buenos Aires.

**Por Qué Esto Importa**
- Impacto real: Tu código servirá a la población de Buenos Aires
- Código abierto: Contribuyendo a proyectos de la Fundación Linux
- Vanguardia: Trabajando con estándares W3C, DIDs, Pruebas de Conocimiento Cero

## 3. Lo Que Construirás

**Proyecto Principal: Modernización del Stack QuarkID**
- Investigar y evaluar frameworks SSI modernos (Credo-TS, Veramo, soluciones personalizadas)
- Diseñar una estrategia de migración desde la prueba de concepto actual a una arquitectura de grado de producción
- Implementar la solución elegida con compatibilidad total con el gobierno de Buenos Aires
- Contribuir con mejoras al ecosistema SSI más amplio

**Stack Tecnológico que Dominarás**
- **Lenguajes**: TypeScript/Node.js (principal), Go (secundario)
- **Criptografía**: Firmas BBS+, Pruebas de Conocimiento Cero, firmas digitales
- **Estándares**: W3C DIDs, Credenciales Verificables, protocolo DIDComm
- **Blockchain**: Protocolo Sidetree, Ethereum EVM, Contratos Inteligentes
- **Framework**: Frameworks SSI modernos (Credo-TS, Veramo, o arquitectura personalizada)

## 4. Áreas de Enfoque Potenciales

Elige según tus intereses y fortalezas:

**Pista de Arquitectura**
- Evaluar y comparar frameworks SSI (Credo-TS vs Veramo vs personalizado)
- Diseñar una arquitectura escalable para el despliegue gubernamental
- Construir capas de compatibilidad agnósticas al framework

**Pista de Criptografía**
- Actualizar esquemas de firma a los últimos estándares (BBS+, etc.)
- Implementar divulgación selectiva y presentaciones de conocimiento cero
- Optimizar el rendimiento criptográfico para dispositivos móviles

**Pista de Integración**
- Desarrollo de SDK móvil para React Native
- Integraciones con API gubernamentales
- Optimización del rendimiento para escenarios de alto rendimiento

## 5. Tu Viaje de Aprendizaje

**Mes 1-2: Fundación**
- Dominar los conceptos de SSI y los estándares W3C
- Profundizar en la arquitectura de QuarkID y sus limitaciones actuales
- Investigar y evaluar frameworks SSI modernos
- **Entregable**: Recomendación de arquitectura técnica con estrategia de migración

**Mes 3-4: Implementación**
- Construir un stack SSI de grado de producción utilizando el enfoque elegido
- Implementar capas de compatibilidad para las integraciones de Buenos Aires
- Crear una suite completa de pruebas y validación
- **Entregable**: Sistema funcional listo para producción

**Mes 5-6: Avanzado (Si se extiende)**
- Liderar contribuciones a los frameworks de código abierto elegidos
- Optimizar para la escala de despliegue de Buenos Aires (rendimiento, seguridad)
- Documentar mejores prácticas y mentorizar a la próxima cohorte
- **Entregable**: Contribuciones reconocidas al ecosistema SSI

## 6. A Quién Buscamos

**Formación Académica**
- Estudiantes de último año de Ciencias de la Computación, Ingeniería de Software o campos relacionados
- Sólida base teórica en algoritmos y estructuras de datos
- Exposición previa a criptografía o sistemas distribuidos (preferido)

**Habilidades Técnicas**
- **Competente**: TypeScript/JavaScript, Node.js
- **Familiar**: Flujos de trabajo de Git, frameworks de pruebas, programación asíncrona
- **Bonus**: Go, React Native, desarrollo blockchain, criptografía

**Cualidades Personales**
- **Autodirigido**: Puede navegar por desafíos técnicos ambiguos
- **Comunicación**: Capacidad para documentar y explicar conceptos complejos
- **Mentalidad de crecimiento**: Emocionado por aprender tecnologías de vanguardia
- **Impulsado por el impacto**: Motivado por aplicaciones del mundo real

## 7. Mentoría y Apoyo

**Mentoría Directa del CEO**
- Standups diarios: Orientación técnica y eliminación de bloqueos
- Inmersiones profundas quincenales: Decisiones de arquitectura y revisión de código
- Soporte en tiempo real: Slack/Discord para preguntas inmediatas

**Entorno Profesional**
- Espacio de coworking premium en Colegiales
- Arreglo de trabajo híbrido flexible
- Acceso directo a la toma de decisiones de la startup
- Networking con el ecosistema tecnológico de Buenos Aires

**Desarrollo de Carrera**
- Contribuciones de código abierto dignas de un portafolio
- Experiencia directa con despliegues a escala gubernamental
- Oportunidad potencial de tiempo completo basada en el rendimiento
- Cartas de recomendación de fundadores de startups financiadas

## 8. Proceso de Aplicación

**Paso 1: Evaluación Técnica**
**Escenario**: QuarkID utiliza métodos DID personalizados que Credo-TS no reconoce. Necesitas implementar un resolver.
**Contexto**: Los DIDs (Identificadores Descentralizados) son como nombres de dominio descentralizados para la identidad, y diferentes "métodos" (did:web, did:key, etc.) definen cómo se crean y resuelven.
**Tu Desafío**: Eres nuevo en SSI y necesitas entender estos conceptos primero.
Crea un prompt que te ayude a:
- Entender qué son los métodos y resolvers de DID
- Aprender cómo Credo-TS implementa la resolución de DID
- Diseñar un resolver personalizado para el formato DID de QuarkID

**Entregables**:
- El prompt de IA (300-400 palabras)
- Tu análisis (100-150 palabras): Explica por qué estructuraste el prompt de esta manera y qué esperas aprender
**Queremos ver**: Cómo abordas el aprendizaje de dominios técnicos desconocidos

**Paso 2: Entrevista Técnica**
- Discusión técnica de 45 minutos
- Revisión de código de un pequeño desafío para llevar a casa
- Evaluación de la arquitectura y el pensamiento de diseño

**Paso 3: Proyecto de Prueba Remunerado**
- Compromiso remunerado de 1 semana ($300)
- Contribución real a la integración de QuarkID/Credo-TS
- Evaluación mutua de la relación de trabajo

## 9. Requisitos de Aplicación

**Enviar antes del 28 de agosto de 2025**:
- CV destacando la experiencia técnica relevante
- Perfil de GitHub mostrando tu mejor código
- Respuesta al Prompt Técnico (ver Paso 1 arriba)
- Breve carta de presentación explicando tu interés en SSI y Lucero Labs

**Enviar a**: hello@lucerolabs.xyz
**Asunto**: "Pasantía en Ingeniería SSI - [Tu Nombre]"

## 10. ¿Por Qué Elegir Lucero Labs?

- **Impacto Real**: Tu código sirve a la infraestructura gubernamental real
- **Tecnología de Vanguardia**: Trabaja con tecnologías 2-3 años por delante de la industria
- **Fama en Código Abierto**: Contribuye a importantes proyectos de la Fundación Linux
- **Experiencia en Startups**: Aprende cómo operan y escalan las startups financiadas
- **Mentoría Directa**: Trabaja directamente con los fundadores técnicos
- **Lanzamiento de Carrera**: Sólida base para una carrera en blockchain/identidad

## 11. Conclusión

¿Listo para ayudar a construir el futuro digital de Argentina? Aplica ahora y únete a nosotros para modernizar la confianza para millones de personas. Esta pasantía ofrece una oportunidad única para trabajar en tecnología de vanguardia que tendrá un impacto en el mundo real mientras contribuyes a proyectos de código abierto que dan forma al futuro de la identidad digital.

Lucero Labs es un empleador que ofrece igualdad de oportunidades y está comprometido con la diversidad y la inclusión.

hello@lucerolabs.xyz https://www.lucerolabs.xyz/