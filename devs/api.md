# Documentación de la API de Administración

La API de Administración proporciona acceso programático para gestionar credenciales y plantillas. Se requiere autenticación a través de una clave API pasada en el encabezado `X-API-Key`.

## Primeros Pasos

1. **Crea una cuenta** en [autopen.lucerolabs.xyz](https://autopen.lucerolabs.xyz)
2. **Ve a la sección Admin** en tu panel de control
3. **Usa el código de AutoPen** para activar las funciones de administración
4. **Navega a la pestaña API** para obtener tu clave API

## Autenticación

Incluye tu clave API en cada solicitud:

```http
X-API-Key: your_api_key_here
```

## URL Base

```
https://autopen.lucerolabs.xyz/api
```

## Endpoints

### Obtener Plantilla

Recupera información sobre una plantilla de credencial.

**GET** `/admin/credential-templates/{id}`

#### Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `id` | integer | ID de la plantilla |

#### Ejemplo de Solicitud

```bash
curl -X GET "https://autopen.lucerolabs.xyz/api/admin/credential-templates/40" \
  -H "X-API-Key: your_api_key_here"
```

#### Respuesta

```json
{
  "id": 40,
  "adminId": 10,
  "didIssuerId": 17,
  "name": "Colegio Arquitectos",
  "description": "Agrupacion de arquitectos",
  "schema": {
    "types": [],
    "fields": [
      {
        "name": "name",
        "type": "text",
        "label": "Nombre",
        "required": false,
        "description": ""
      },
      {
        "name": "Matricula",
        "type": "text",
        "label": "matricula",
        "required": false,
        "description": ""
      }
    ],
    "oneTimeUse": true,
    "displayOptions": {
      "textColor": "#000000",
      "backgroundColor": "#ffffff"
    },
    "expirationDays": 7
  },
  "publicToken": "dcd88a68f6ea",
  "createdAt": "2025-03-27T19:20:17.482Z",
  "updatedAt": "2025-03-27T19:20:17.482Z"
}
```

---

### Emitir Credencial

Emite una nueva credencial a un destinatario.

**POST** `/admin/issue-credential`

#### Cuerpo de la Solicitud

| Campo | Tipo | Requerido | Descripción |
|-------|------|----------|-------------|
| `templateId` | integer | Sí | ID de la plantilla a usar |
| `recipientEmail` | string | Sí | Correo electrónico del destinatario |
| `credentialFields` | object | Sí | Valores de los campos de la credencial |

#### Ejemplo de Solicitud

```bash
curl -X POST "https://autopen.lucerolabs.xyz/api/admin/issue-credential" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key_here" \
  -d '{
    "templateId": 75,
    "recipientEmail": "lain@example.com",
    "credentialFields": {
      "name": "Lain Calvo",
      "company": "caba"
    }
  }'
```

#### Respuesta

```json
{
  "credential": {
    "id": 535,
    "templateId": 75,
    "recipientEmail": "lain@example.com",
    "credentialId": "urn:uuid:978f69fe-44a4-4e29-aa4c-b9b1fbacebdd",
    "status": "pending",
    "oobContent": "didcomm://?_oob=eyJ0eXBlIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9vdXQtb2YtYmFuZC8yLjAvaW52aXRhdGlvbiIsImlkIjoiOTc4ZjY5ZmUtNDRhNC00ZTI5LWFhNGMtYjliMWZiYWNlYmRkIiwiZnJvbSI6ImRpZDpxdWFya2lkOkVpQVpvSHhwR0d4bnZUMUdjWmFIUkNIb1I0LUV5VUpVbUJCTVZDU0ZaZVZUQ2ciLCJib2R5Ijp7ImdvYWxfY29kZSI6InN0cmVhbWxpbmVkLXZjIiwiYWNjZXB0IjpbImRpZGNvbW0vdjIiXX0sImludml0YXRpb25JZCI6Ijk3OGY2OWZlLTQ0YTQtNGUyOS1hYTRjLWI5YjFmYmFjZWJkZCJ9",
    "verificationOobContent": "didcomm://?_oob=eyJ0eXBlIjoiaHR0cHM6Ly9kaWRjb21tLm9yZy9vdXQtb2YtYmFuZC8yLjAvaW52aXRhdGlvbiIsImlkIjoiMTAxODE2NGQtMWNkNS00ZGNjLWI3YjItZTY5MzkxNzU4ODc3IiwiZnJvbSI6ImRpZDpxdWFya2lkOkVpQVpvSHhwR0d4bnZUMUdjWmFIUkNIb1I0LUV5VUpVbUJCTVZDU0ZaZVZUQ2ciLCJib2R5Ijp7ImdvYWxfY29kZSI6InN0cmVhbWxpbmVkLXZwIiwiYWNjZXB0IjpbImRpZGNvbW0vdjIiXX0sImludml0YXRpb25JZCI6IjEwMTgxNjRkLTFjZDUtNGRjYy1iN2IyLWU2OTM5MTc1ODg3NyJ9",
    "holderDID": null,
    "vcData": null,
    "createdAt": "2025-07-11T15:25:16.430Z",
    "updatedAt": "2025-07-11T15:25:16.430Z"
  },
  "issuePageUrl": "https://de096d23-d01d-406f-aaea-5658118c714b-00-myew7c61kh4.worf.replit.dev/minting/credential/978f69fe-44a4-4e29-aa4c-b9b1fbacebdd"
}
```

## Casos de Uso

- **Emisión automatizada de credenciales** - Integra con tus sistemas
- **Procesamiento por lotes** - Emite múltiples credenciales programáticamente
- **Gestión de plantillas** - Recupera información de plantillas
- **Verificación en tiempo real** - Usa URLs de verificación

## Códigos de Estado

| Código | Descripción |
|------|-------------|
| `200` | Éxito |
| `400` | Solicitud Incorrecta |
| `401` | No Autorizado |
| `404` | No Encontrado |
| `500` | Error del Servidor |