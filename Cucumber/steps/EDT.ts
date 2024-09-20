// import { Before, After, Given, When, Then } from "@cucumber/cucumber";
// import fetch from "node-fetch";
// import { Pact } from "@pact-foundation/pact";


// // Initialize Pact
// const provider = new Pact({
//   consumer: "ConsumerName",
//   provider: "ProviderName",
//   port: 1234,
// });

// Before(async function () {
//   await provider.setup();
//   console.log('Server setup succeeded');
// });

// After(async function () {
//   await provider.verify();
//   await provider.finalize();
//   console.log('Server finalized');
// });
 
// Given("User this API end point {string}", function (url: string) {
//     this.url = url;
//   });

//   When(
//     "User Modify BaseURL With following Resources:",
//     async function (dataTable: any) {
//       // Convert the dataTable to an array of arrays
//       const rows = dataTable.raw();
//       const accountId = rows[1][0]; // The value is in the second row, first column
  
//       // Mock the interaction
//       await provider.addInteraction({
//         state: "account exists",
//         uponReceiving: `a request for account details with accountId=${accountId}`,
//         withRequest: {
//           method: "POST",
//           path: "/contacts",
//           query: { accountId: accountId.toString() },
//           headers: {
//             Accept: "application/json",
//           },
        
//         body: {
//             // The request body should be an object, not a string
//             Contact: {
//               type: 'visitor',
//               reference: '123456',
//               gender: 'Male',
//               title: 'Mr.',
//               'first-name': 'John',
//               'last-name': 'Doe',
//               company: 'Example Corp',
//               'job-function': 'Software Engineer',
//               phone1: '+1234567890',
//               email: 'johndoe@example.com',
//               addresses: [
//                 {
//                   'address-type': 'postal',
//                   name: 'John Doe',
//                   address: '123 Main St',
//                   'house-number': '10A',
//                   'postal-code': '12345',
//                   city: 'Metropolis',
//                   country: 'USA',
//                   state: 'NY',
//                 },
//               ],
//             }},
//             reference: 'ORD123456',
//             'registrant-state': 'invited',
//             'attendance-state': 'no-show',
//             method: 'online',
//             'register-time': '2023-12-01T09:00:00Z',
//             event_code: 'EVT001',
//             'registration-type-code': 'REG001',
//             tags: ['SAP'],
//           },
//         },
        
//         willRespondWith: {
//             status: 200,
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: {
//               // The expected response body should be defined here
//             },
//           },
//         });
 
// // Fetch the data
// this.response = await fetch(`${this.url}?accountId=${accountId}`, {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   this.responseBody = await this.response.json();

  
//  //export default {EDT}