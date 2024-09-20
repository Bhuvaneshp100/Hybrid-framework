// import { browser } from 'k6/experimental/browser';

// export const options = {
//   scenarios: {
//     ui: {
//       executor: 'shared-iterations',
//       options: {
//         browser: {
//           type: 'chromium',
//         },
//       },
//     },
//   }
// }

// export default async function () {
//   const page = browser.newPage();

//     await page.goto('https://www.google.com');
//     page.screenshot({ path: 'screenshot.png' });
//      page.close();

// }
