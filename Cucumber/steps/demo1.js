// "use strict";
// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//     function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
//     return new (P || (P = Promise))(function (resolve, reject) {
//         function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//         function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//         function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
//         step((generator = generator.apply(thisArg, _arguments || [])).next());
//     });
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const cucumber_1 = require("@cucumber/cucumber");
// const playwright_1 = require("playwright");
// let browser;
// let page;
// (0, cucumber_1.Given)('I have an example', function () {
//     return __awaiter(this, void 0, void 0, function* () {
//         console.log('Given step is executed');
//         browser = yield playwright_1.chromium.launch({ headless: false }); // Launch the browser in non-headless mode
//         page = yield browser.newPage();
//     });
// });
// (0, cucumber_1.When)('I run the example', function () {
//     return __awaiter(this, void 0, void 0, function* () {
//         console.log('When step is executed');
//         yield page.goto('https://google.com'); // Navigate to example.com
//     });
// });
// (0, cucumber_1.Then)('I should see the example work', function () {
//     return __awaiter(this, void 0, void 0, function* () {
//         console.log('Then step is executed');
//     });
// });
// (0, cucumber_1.AfterAll)(function () {
//     return __awaiter(this, void 0, void 0, function* () {
//         yield browser.close(); // Close the browser after all scenarios
//     });
// });
