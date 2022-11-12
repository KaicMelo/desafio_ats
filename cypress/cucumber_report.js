const report = require("multiple-cucumber-html-reporter");

// const generator = require('cucumber-html-report-generator');
// const report = require('cucumber-html-report');

report.generate({
    jsonDir: "cypress/cucumber-json/", // ** Path of .json file ** //
    reportPath: "./cypress/reports/cucumber-htmlreport.html",
});