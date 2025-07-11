# Admin API Documentation

The Admin API provides programmatic access to manage credentials and templates. Authentication is required via an API key passed in the `X-API-Key` header.

## Getting Started

1. **Create an account** at [autopen.lucerolabs.xyz](https://autopen.lucerolabs.xyz)
2. **Go to Admin** section in your dashboard
3. **Use the AutoPen code** to activate admin features
4. **Navigate to the API tab** to get your API key

## Authentication

Include your API key in every request:

```http
X-API-Key: your_api_key_here
```

## Base URL

```
https://autopen.lucerolabs.xyz/api
```

## Endpoints

### Get Template

Retrieve information about a credential template.

**GET** `/admin/credential-templates/{id}`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `id` | integer | Template ID |

#### Example Request

```bash
curl -X GET "https://autopen.lucerolabs.xyz/api/admin/credential-templates/40" \
  -H "X-API-Key: your_api_key_here"
```

#### Response

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

### Issue Credential

Issue a new credential to a recipient.

**POST** `/admin/issue-credential`

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `templateId` | integer | Yes | Template ID to use |
| `recipientEmail` | string | Yes | Recipient's email |
| `credentialFields` | object | Yes | Field values for the credential |

#### Example Request

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

#### Response

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

## Use Cases

- **Automated credential issuance** - Integrate with your systems
- **Batch processing** - Issue multiple credentials programmatically  
- **Template management** - Retrieve template information
- **Real-time verification** - Use verification URLs

## Status Codes

| Code | Description |
|------|-------------|
| `200` | Success |
| `400` | Bad Request |
| `401` | Unauthorized |
| `404` | Not Found |
| `500` | Server Error |