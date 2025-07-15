# Verifiable Presentation

## Overview

This API enables the creation and management of verifiable presentation requests for credential verification workflows.

## Getting Started

### Base URL
```
https://message-manager-production.up.railway.app
```

### Authentication
All requests require an API key passed in the `x-api-key` header.

## API Reference

### Create Presentation Request

Creates a new presentation request with specified field verification requirements.

**Endpoint:** `POST /message`

**Headers:**
- `Content-Type: application/json`
- `x-api-key: YOUR_API_KEY`

**Request Body:**

```json
{
  "goalCode": "streamlined-vp",
  "presentationData": [
    {
      "id": "schema-fields-verification",
      "name": "Schema Fields Verification",
      "purpose": "To verify the name and startup fields from a credential.",
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
      "webhookUrl": "https://webhook.site/YOUR_WEBHOOK_ID"
    }
  ]
}
```

**Response:**
Returns a presentation request object that can be converted to a DIDComm invitation.

## Field Verification

### Supported JSONPath Expressions

The system supports JSONPath expressions for field verification:

- `$.credentialSubject.givenName` - Verifies the given name field
- `$.credentialSubject.familyName` - Verifies the family name field

These items are for the Crecimiento and DevConnect credentials. We are essentially requesting the client to display the user their credentials that satisfy these properties. If you issued your credential, you can specify the properties used in your schema.

### Filter Types

Currently supported filter types:
- `string` - Validates that the field contains a string value

## DIDComm Integration

### Converting Response to DIDComm Invitation

After receiving a successful response, convert it to a DIDComm invitation:

```javascript
const responseJson = pm.response.json();

// Convert response to base64 encoded invitation
const invitationString = JSON.stringify(responseJson);
const base64Invitation = Buffer.from(invitationString)
  .toString('base64')
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=/g, '');

// Create formatted DIDComm invitation
const formattedResponse = {
  invitationId: responseJson.id,
  oobContentData: `didcomm://?_oob=${base64Invitation}`
};
```

## Complete Example

### Node.js Implementation

```javascript
const axios = require('axios');

const data = JSON.stringify({
  "goalCode": "streamlined-vp",
  "presentationData": [
    {
      "id": "schema-fields-verification",
      "name": "Schema Fields Verification",
      "purpose": "To verify the name and startup fields from a credential.",
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
      "webhookUrl": "https://webhook.site/YOUR_WEBHOOK_ID"
    }
  ]
});

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://message-manager-production.up.railway.app/message',
  headers: { 
    'Content-Type': 'application/json', 
    'x-api-key': 'YOUR_API_KEY'
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

## Webhook Integration

### Webhook Configuration

Configure your webhook URL to receive presentation verification results:

```json
{
  "webhookUrl": "https://your-domain.com/webhook/presentation-result"
}
```

### Webhook Payload

Your webhook will receive verification results when the presentation process completes.

## Error Handling

Common error scenarios and how to handle them:

- **401 Unauthorized**: Invalid or missing API key
- **400 Bad Request**: Invalid request payload
- **500 Internal Server Error**: Server-side processing error

## Best Practices

1. **Security**: Always use HTTPS for webhook URLs
2. **Validation**: Validate all required fields before sending requests
3. **Error Handling**: Implement proper error handling for all API calls
4. **Rate Limiting**: Respect API rate limits (contact support for current limits)