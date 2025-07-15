# Presentación Verificable

## Descripción General

Esta API permite la creación y gestión de solicitudes de presentación verificable para flujos de trabajo de verificación de credenciales.

[Postman collection](https://www.postman.com/bold-meteor-943453/workspace/autopen-admin-api/collection/32694298-d373e9a7-9e55-438b-bd72-41ab245ac480?action=share&source=copy-link&creator=32694298)

## Primeros Pasos

### URL Base
```
https://message-manager-production.up.railway.app
```

### Autenticación
Todas las solicitudes requieren una clave API pasada en el encabezado `x-api-key`.

## Referencia de API

### Crear Solicitud de Presentación

Crea una nueva solicitud de presentación con requisitos específicos de verificación de campos.

**Endpoint:** `POST /message`

**Encabezados:**
- `Content-Type: application/json`
- `x-api-key: TU_CLAVE_API`

**Cuerpo de la Solicitud:**

```json
{
  "goalCode": "streamlined-vp",
  "presentationData": [
    {
      "id": "schema-fields-verification",
      "name": "Verificación de Campos del Esquema",
      "purpose": "Para verificar los campos de nombre y startup de una credencial.",
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.givenName"],
            "filter": {
              "type": "string"
            }
          },
          {
            "path": ["$.credentialSubject.familyName"],
            "filter": {
              "type": "string"
            }
          }
        ]
      },
      "webhookUrl": "https://webhook.site/TU_ID_WEBHOOK"
    }
  ]
}
```

**Respuesta:**
Devuelve un objeto de solicitud de presentación que puede convertirse en una invitación DIDComm.

## Verificación de Campos

### Expresiones JSONPath Soportadas

El sistema soporta expresiones JSONPath para la verificación de campos:

- `$.credentialSubject.givenName` - Verifica el campo de nombre
- `$.credentialSubject.familyName` - Verifica el campo de apellido

Estos elementos son para las credenciales de Crecimiento y DevConnect. Esencialmente estamos solicitando al cliente que muestre al usuario sus credenciales que satisfacen estas propiedades. Si emitiste tu credencial, puedes especificar las propiedades utilizadas en tu esquema.

### Tipos de Filtro

Tipos de filtro actualmente soportados:
- `string` - Valida que el campo contenga un valor de cadena

## Integración DIDComm

### Convertir Respuesta a Invitación DIDComm

Después de recibir una respuesta exitosa, convertirla a una invitación DIDComm:

```javascript
const responseJson = pm.response.json();

// Convertir respuesta a invitación codificada en base64
const invitationString = JSON.stringify(responseJson);
const base64Invitation = Buffer.from(invitationString)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=/g, '');

// Crear invitación DIDComm formateada
const formattedResponse = {
  invitationId: responseJson.id,
  oobContentData: `didcomm://?_oob=${base64Invitation}`
};
```

## Ejemplo Completo

### Implementación en Node.js

```javascript
const axios = require('axios');

const data = JSON.stringify({
  "goalCode": "streamlined-vp",
  "presentationData": [
    {
      "id": "schema-fields-verification",
      "name": "Verificación de Campos del Esquema",
      "purpose": "Para verificar los campos de nombre y startup de una credencial.",
      "constraints": {
        "fields": [
          {
            "path": ["$.credentialSubject.givenName"],
            "filter": { "type": "string" }
          },
          {
            "path": ["$.credentialSubject.familyName"],
            "filter": { "type": "string" }
          }
        ]
      },
      "webhookUrl": "https://webhook.site/TU_ID_WEBHOOK"
    }
  ]
});

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://message-manager-production.up.railway.app/message',
  headers: { 
    'Content-Type': 'application/json', 
    'x-api-key': 'TU_CLAVE_API'
  },
  data: data
};

axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
```

## Integración de Webhook

### Configuración del Webhook

Configura tu URL de webhook para recibir resultados de verificación de presentación:

```json
{
  "webhookUrl": "https://tu-dominio.com/webhook/resultado-presentacion"
}
```

### Carga Útil del Webhook

Tu webhook recibirá resultados de verificación cuando se complete el proceso de presentación.

## Manejo de Errores

Escenarios de error comunes y cómo manejarlos:

- **401 No Autorizado**: Clave API inválida o faltante
- **400 Solicitud Incorrecta**: Carga útil de solicitud inválida
- **500 Error Interno del Servidor**: Error de procesamiento del lado del servidor

## Mejores Prácticas

1. **Seguridad**: Siempre usa HTTPS para URLs de webhook
2. **Validación**: Valida todos los campos requeridos antes de enviar solicitudes
3. **Manejo de Errores**: Implementa manejo adecuado de errores para todas las llamadas a la API
4. **Limitación de Tasa**: Respeta los límites de tasa de la API (contacta soporte para límites actuales)