import { Before, After, Given, When, Then } from "@cucumber/cucumber";
import fetch from "node-fetch";
import { Pact } from "@pact-foundation/pact";

// Initialize Pact
const provider = new Pact({
  consumer: "ConsumerName",
  provider: "ProviderName",
  port: 1234,
});

Before(async function () {
  await provider.setup();
  console.log('Server setup succeeded');
});

After(async function () {
  await provider.verify();
  await provider.finalize();
  console.log('Server finalized');
});

Given("User sets the API endpoint {string} and prepares interaction for account {string}", async function (url: string, accountId: string) {
  this.url = url;

  // Mock the interaction
  await provider.addInteraction({
    state: "account does not exist",
    uponReceiving: `a request to create an account with accountId=${accountId}`,
    withRequest: {
      method: "POST",
      path: "/accounts",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: {
        accountId: accountId,
        accountName: "John Doe",
        balance: 1000,
      },
    },
    willRespondWith: {
      status: 201,
      headers: { "Content-Type": "application/json" },
      body: {
        accountId: accountId,
        accountName: "John Doe",
        balance: 1000,
      },
    },
  });

  // Send the POST request
  this.response = await fetch(`${this.url}/accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      accountId: accountId,
      accountName: "John Doe",
      balance: 1000,
    }),
  });

  this.responseBody = await this.response.json();
});



Then(
  "user validate {string} and {string}",
  function (expectedStatusCode: string, expectedResult: string) {
    // Validate the response
    const statusCode = this.response.status;
    const responseBody = this.responseBody.accountName;

    // Assert the status code
    if (parseInt(expectedStatusCode, 10) !== statusCode) {
      throw new Error(
        `Expected status code ${expectedStatusCode} but got ${statusCode}`
      );
    }

    // Assert the result
    // if (expectedResult && expectedResult !== responseBody) {
    //   throw new Error(
    //     `Expected result "${expectedResult}" but got "${responseBody}"`
    //   );
    // }
  }
);
