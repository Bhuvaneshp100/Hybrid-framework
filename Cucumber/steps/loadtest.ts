import { Given, When, Then, After } from '@cucumber/cucumber';
import { exec } from 'child_process';
import { writeFileSync } from 'fs';
import { expect } from 'chai';
import { Pact } from '@pact-foundation/pact';
import path from 'path';

// Initialize Pact for contract testing
const pact = new Pact({
  consumer: 'Consumer',
  provider: 'Provider',
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  port: 1234,
 
});

// Global variables for API details
let baseUrl: string;
let method: string;
let username: string;
let password: string;
let headers: any;
let vus: number;
let duration: number;

Given('I have the API with base URL {string} and HTTP method {string}', function (baseUrlInput: string, methodInput: string) {
  baseUrl = baseUrlInput;
  method = methodInput;
});

Given('I have the credentials with username {string} and password {string}', function (usernameInput: string, passwordInput: string) {
  username = usernameInput;
  password = passwordInput;
});

Given('I set the request headers {string} as {string}', function (headerKey: string, headerValue: string) {
  headers = { [headerKey]: headerValue };
});

When('I perform a load test with {int} virtual users for {int} minutes', function (vusInput: number, durationInput: number) {
  vus = vusInput;
  duration = durationInput;
  
  // Generate K6 test script content
  const scriptContent = `
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '${duration}m', target: ${vus} },
  ],
};

export default function () {
  const url = '${baseUrl}/login';
  const payload = JSON.stringify({
    username: '${username}',
    password: '${password}',
  });
  const params = {
    headers: ${JSON.stringify(headers)},
  };

  let response;
  switch ('${method}') {
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
  `;

  // Save the script content to a file
  writeFileSync('loadTest.js', scriptContent);

  // Add a delay before starting the load test
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const command = 'k6 run loadTest.js';
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing k6 test: ${error}`);
          reject(error);
        } else {
          console.log(`k6 output: ${stdout}`);
          if (stderr) {
            console.error(`k6 stderr: ${stderr}`);
          }
          resolve();
        }
      });
    }, 70000); // Delay of 5 seconds (5000 milliseconds)
  });
});

Then('the response status should be {int} for all users', function (expectedStatus: number) {
  // Add logic to validate response status if necessary
});

Then('the response time should be less than {int}ms for all users', function (maxResponseTime: number) {
  // Add logic to validate response time if necessary
});

// Pact verification
After(async function () {
  try {
    await pact.verify(); // Verifies Pact interactions
  } catch (error) {
    console.error('Pact verification failed:', error);
    throw error;
  }
});
