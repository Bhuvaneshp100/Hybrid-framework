import { test,request } from '@playwright/test';


interface CallAPIParams {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' ;
  endPoint: string;
  payload?: any;
  headers?: Record<string, string>;
}

async function apiRequest(method: string, endPoint: string, payload = {}, headers = {}) {
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

const api = {

  async validateGetCall(params: CallAPIParams): Promise<void> {
    try {
      const response = await apiRequest(params.method, params.endPoint, {}, params.headers);
      console.log(
        'Response in  ================> ',
        '\n',
        response.body,
        '\n',
        'Response Status ==>',
        response.status,
        '\n',
        'Response Out  ================> '
      );
    } catch (error) {
      console.error('Error during API call:', error);
    }
  },
  async validatePostCall(params: CallAPIParams): Promise<void> {
    try {
      const response = await apiRequest(params.method, params.endPoint, params.payload, params.headers);

      console.log(
        'Response in  ================> ',
        '\n',
        response.body,
        '\n',
        'Response Status ==>',
        response.status,
        '\n',
        'Response Out  ================> '
      );
    } catch (error) {
      console.error('Error during API call:', error);
    }
  },

  // Add other methods for PUT, DELETE, PATCH as needed
};

// Usage example
test('Validate GET API call', async () => {
  const callParamsGet: CallAPIParams = {
    method: 'GET',
    endPoint: 'https://jsonplaceholder.typicode.com/posts/1',
  };

  await api.validateGetCall(callParamsGet);
});

test('Validate POST API call', async () => {
  const callParamsPost: CallAPIParams = {
    method: 'POST',
    endPoint: 'https://jsonplaceholder.typicode.com/posts',
    payload: { title: 'foo', body: 'bar', userId: 1 },
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  };

  await api.validatePostCall(callParamsPost);
});
