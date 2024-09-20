// import http from 'k6/http';
// import { check, sleep } from 'k6';

// // Define a global configuration object
// let options = { stages: [] };

// // Function to set dynamic options
// export function setOptions(vus, durationMinutes) {
//   options = {
//     stages: [
//       { duration: `${durationMinutes}m`, target: vus }, // Ramp up to `vus` users
//     ],
//   };
// }

// // Main function to perform load test
// export function performLoadTest({
//   url,
//   method,
//   payload,
//   params,
//   vus,
//   durationMinutes,
// }) {
//   // Set the options dynamically
//   setOptions(vus, durationMinutes);

//   // Perform the load test for each VU
//   for (let i = 0; i < vus; i++) {
//     let response;
//     switch (method) {
//       case 'POST':
//         response = http.post(url, payload, params);
//         break;
//       case 'GET':
//         response = http.get(url, params);
//         break;
//       case 'PUT':
//         response = http.put(url, payload, params);
//         break;
//       case 'DELETE':
//         response = http.del(url, payload, params);
//         break;
//       default:
//         throw new Error(`Unsupported HTTP method: ${method}`);
//     }

//     check(response, {
//       [`status is ${params.expectedStatus}`]: (r) => r.status === params.expectedStatus,
//       [`response time < ${params.maxResponseTime}ms`]: (r) => r.timings.duration < params.maxResponseTime,
//     });
//     sleep(1); // Simulate user delay
//   }
// }

// // Export options to be used by K6
// export { options };
