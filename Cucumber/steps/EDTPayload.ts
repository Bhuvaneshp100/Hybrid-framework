// import { Given, When, Then } from '@cucumber/cucumber';
// import { apiCommonUtils } from "../../../utils/apiCommonMethodModule";
// import { baseUrl } from '../base/commonStepDefination';
// const testSpec = apiCommonUtils.uxpartneraccountPage.uxpartneraccount;
// import { setDefaultTimeout } from '@cucumber/cucumber';
// // Set the default timeout to 10 seconds (or any other value in milliseconds)
// setDefaultTimeout(300000);

// export async function parseFlexibly(value) {
//   if (value === null || value === undefined || value === '') {
//     return value;  // Leave null/empty values as-is
//   } else if (!isNaN(value)) {
//     return parseFloat(value);  // Convert numeric strings to numbers
//   } else {
//     return value;  // Treat non-numeric strings as-is
//   }
// }

// Then('User Hit validate Token API for EDT with HttpsMethod{string} and {string} and {string}', async (HttpsMethod:string, payloadpath:string, ContentType:string) =>{
//     await testSpec.validateRegression(payloadpath, ContentType)
//     })



// Then('User validate the Token API Response with Status code {string} and validate {string} and validate the {string}', async(StatusCode:string, ResponseMessage:string, schemapath:string) =>{
//     await testSpec.validateSanity((StatusCode), ResponseMessage, schemapath )
// })

// Then('User Hit with Token in EDT and HttpsMethod {string} with the {string} with different values in {string} and changed values to {string} and {string}', async(HttpsMethod:string, payloadpath:string, AttributePath:string, NewValue:string, ContentType:string) =>{
//     await testSpec.hitRegistrationAPIWithToken(HttpsMethod, baseUrl, payloadpath, AttributePath, await parseFlexibly(NewValue), ContentType)
// })