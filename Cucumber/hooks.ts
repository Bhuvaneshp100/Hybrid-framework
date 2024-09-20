import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';

BeforeAll(function () {
  // Code to run once before all scenarios
  console.log('Starting test suite');
});

Before(function () {
  // Code to run before each scenario
  console.log('Setting up before scenario');
});

After(function (scenario) {
  // Code to run after each scenario
//   if (scenario.result.status === 'failed') {
//     console.log(`Scenario failed: ${scenario.name}`);
//   }
  console.log('Cleaning up after scenario');
});

AfterAll(function () {
  // Code to run once after all scenarios
  console.log('Test suite finished');
});
