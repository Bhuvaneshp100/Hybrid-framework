// import { Given, When, Then, Before, AfterAll } from '@cucumber/cucumber';
// import { Pact, Matchers } from '@pact-foundation/pact';
// import * as path from 'path';
// import fetch from 'node-fetch';
// import { expect } from "@playwright/test";

// // Define Pact mock server
// const provider = new Pact({
//   consumer: 'AccountServiceFrontend',  // Name of the consumer service
//   provider: 'AccountServiceAPI',       // Name of the provider service
//   port: 1234,
//   log: path.resolve(process.cwd(), 'logs', 'pact.log'),
//   dir: path.resolve(process.cwd(), 'pacts'),
//   logLevel: 'info',
// });

// Before(async function () {
//   await provider.setup();
// });

// AfterAll(async function () {
//   await provider.finalize();
// });

// Given('the account service is set up', async function () {
//   console.log('server setup succeeded');
// });

// When('a POST request is made to create an account at url {string} with accountId {string} and accountName {string} and initialDeposit {string}', async function (url: string, accountId: string, accountName: string, initialDeposit: string) {
//   let expectedResponse: any;
//   let statusCode: number;

//   // Define the expected response and status code based on input
//   if (accountId === 'valid') {
//     expectedResponse = {
//       accountId: 543536,
//       accountName: accountName || 'John Doe',
//       balance: parseInt(initialDeposit, 10) || 1000,
//     };
//     statusCode = 201;
//   } else if (accountId === 'invalid') {
//     expectedResponse = {
//       error: 'Invalid account ID provided',
//     };
//     statusCode = 400;
//   } else if (accountId === 'null') {
//     expectedResponse = {
//       error: 'Account ID cannot be null',
//     };
//     statusCode = 400;
//   } else if (accountId === '') {
//     expectedResponse = {
//       error: 'Account ID cannot be empty',
//     };
//     statusCode = 400;
//   } else if (accountName === '') {
//     expectedResponse = {
//       error: 'Account Name cannot be empty',
//     };
//     statusCode = 400;
//   } else {
//     expectedResponse = {
//       accountId: parseInt(accountId, 10),
//       accountName: accountName,
//       balance: parseInt(initialDeposit, 10),
//     };
//     statusCode = 201;
//   }

//   await provider.addInteraction({
//     state: 'account created',
//     uponReceiving: `a request to create an account with accountId=${accountId}`,
//     withRequest: {
//       method: 'POST',
//       path: '/accounts',
//       headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//       body: {
//         accountId: accountId === 'valid' ? 543536 : accountId,
//         accountName,
//         initialDeposit: parseInt(initialDeposit, 10),
//       },
//     },
//     willRespondWith: {
//       status: statusCode,
//       headers: { 'Content-Type': 'application/json' },
//       body: expectedResponse,
//     },
//   });

//   this.response = await fetch(url, {
//     method: 'POST',
//     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       accountId: accountId === 'valid' ? 543536 : accountId,
//       accountName,
//       initialDeposit: parseInt(initialDeposit, 10),
//     }),
//   });

//   this.responseBody = await this.response.json();
// });

// Then('the response should match the expected response for accountId {string}', function (accountId: string) {
//   if (accountId === 'invalid' || accountId === 'null' || accountId === '') {
//     expect(this.response.status).toBe(400);
//   } else {
//     expect(this.response.status).toBe(201);
//   }
  
//   expect(this.responseBody).toEqual({
//     accountId: accountId === 'valid' ? 543536 : accountId,
//     accountName: accountId === 'valid' ? 'John Doe' : this.responseBody.accountName,
//     balance: accountId === 'valid' ? 1000 : this.responseBody.balance,
//   });
// });
