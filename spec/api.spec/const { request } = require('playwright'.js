const { request } = require('playwright');

async function apiRequest(method, endPoint, payload = {}, headers = {}) {
    const context = await request.newContext();
    let response;
  
    switch (method.toUpperCase()) {
      case 'GET':
        response = await context.get(endPoint, { headers });
        break;
      case 'POST':
        response = await context.post(endPoint, { data: payload, headers });
        break;
      case 'PUT':
        response = await context.put(endPoint, { data: payload, headers });
        break;
      case 'DELETE':
        response = await context.delete(endPoint, { data: payload, headers });
        break;
      case 'PATCH':
        response = await context.patch(endPoint, { data: payload, headers });
        break;
      case 'OPTIONS':
        response = await context.options(endPoint, { headers });
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  
    const contentType = response.headers()['content-type'];
  
    let responseBody;
    if (contentType && contentType.includes('application/json')) {
      responseBody = await response.json().catch(() => null);
    } else if (contentType && (contentType.includes('text/xml') || contentType.includes('application/xml'))) {
      responseBody = await response.text().catch(() => null);
      // You can add XML parsing logic here if needed
    } else {
      // Assume plain text or other content types
      responseBody = await response.text().catch(() => null);
    }
  
    return {
      status: response.status(),
      headers: response.headers(),
      body: responseBody,
    };
}