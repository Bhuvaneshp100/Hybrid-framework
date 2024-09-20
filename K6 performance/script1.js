import grpc from 'k6/net/grpc';
import { check, sleep } from 'k6';
import { Counter } from 'k6/metrics';
import { generateHtmlReport } from '../dist/bundle.js'; // Adjust path as necessary
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

// Define a gRPC service and method
const service = new grpc.Service({
  address: 'localhost:50051', // Adjust this to your gRPC server address
  service: 'YourServiceName', // Replace with your gRPC service name
});

const method = 'YourMethodName'; // Replace with your gRPC method name

// Define metrics
const requestDuration = new Counter('request_duration');

// Define k6 options
export let options = {
  vus: 5, // Number of virtual users
  duration: '30s', // Duration of the test
};

export default function () {
  const requestPayload = {}; // Replace with your gRPC request payload
  
  // Send gRPC request
  const response = service.call(method, requestPayload);

  // Record request duration
  requestDuration.add(response.timings.duration);

  // Check response
  check(response, {
    'status is 200': (r) => r && r.status === 200,
  });

  sleep(1); // Pause for 1 second between iterations
}

// Handle test summary and generate HTML report
export function handleSummary(data) {
  return {
    'summary.htm2': generateHtmlReport(data),
    'stdout': textSummary(data, { indent: ' ', enableColors: true }),
  };
}
