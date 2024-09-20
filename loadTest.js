
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 10 },
  ],
};

export default function () {
  const url = 'https://example.com/api/login';
  const payload = JSON.stringify({
    username: 'testUser1',
    password: 'testPass1',
  });
  const params = {
    headers: {"Content-Type":"application/json"},
  };

  let response;
  switch ('POST') {
    case 'POST':
      response = http.post(url, payload, params);
      break;
    case 'GET':
      response = http.get(url, params);
      break;
    case 'PUT':
      response = http.put(url, payload, params);
      break;
    case 'DELETE':
      response = http.del(url, payload, params);
      break;
    default:
      throw new Error('Unsupported HTTP method');
  }

  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 1500ms': (r) => r.timings.duration < 1500,
  });

  sleep(1);
}
  