const reports = require("multiple-cucumber-html-reporter");


reports.generate({
    jsonDir: "cucumberReport",
    reportPath: "./cucumberReport/test-result/monocart-reporter",
    openReportInBrowser: true,
    saveCollectedJSON: true, // Make it true if you run with multiple feature file
    pageFooter: '<p align="center">Automation Report</p>',
    pageTitle: "Automation Report",
    reportName: "Test Case Report",
    displayDuration: true,
    // useCDN:true,

    metadata: {
        browser: {
            name: "chrome",
            version: "120",
        },
        device: "Local test machine",
        platform: {
            name: "ios",
            version: "16.04",
        },
    },
    // customData: {
    //     title: "Run info",
    //     data: [
    //         { label: "Project", value: "Custom project" },
    //         { label: "Release", value: "1.2.3" },
    //         { label: "Cycle", value: "B11221.34321" },
    //         { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
    //         { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    //     ],
    // },
});