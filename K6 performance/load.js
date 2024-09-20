// import http from 'k6/http';
// import { check, sleep } from 'k6';

// export const options = {
//   stages: [
//     { duration: '1m', target: 1 }, // Ramp up to 10 users over 2 minutes
//   ],
// };

// export default function () {
//   const url = __ENV.BASE_URL || 'https://example.com/api';
//   const method = __ENV.METHOD || 'GET';
//   const payload = JSON.stringify({
//     username: __ENV.USERNAME || 'defaultUser',
//     password: __ENV.PASSWORD || 'defaultPass',
//   });
//   const params = {
//     headers: {
//       'Content-Type': __ENV.HEADER_VALUE || 'application/json',
//     },
//   };

//   let response;
//   switch (method) {
//     case 'POST':
//       response = http.post(url, payload, params);
//       break;
//     case 'GET':
//       response = http.get(url, params);
//       break;
//     case 'PUT':
//       response = http.put(url, payload, params);
//       break;
//     case 'DELETE':
//       response = http.del(url, payload, params);
//       break;
//     default:
//       throw new Error(`Unsupported HTTP method: ${method}`);
//   }

//   check(response, {
//     [`status is ${__ENV.EXPECTED_STATUS || 200}`]: (r) => r.status === (parseInt(__ENV.EXPECTED_STATUS) || 200),
//     [`response time < ${__ENV.MAX_RESPONSE_TIME || 1000}ms`]: (r) => r.timings.duration < (parseInt(__ENV.MAX_RESPONSE_TIME) || 1000),
//   });

//   sleep(1); // Simulate user delay
// }