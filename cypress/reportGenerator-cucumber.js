const report = require("multiple-cucumber-html-reporter");
const fs = require('fs')
const path = require('path')
const jsonFolder = path.resolve(__dirname, './cypress/cucumber-json/');
const jsonFiles = []
fs.readdirSync(jsonFolder).filter(file => file.includes('.json')).forEach(file => jsonFiles.push(path.resolve(__dirname, './cypress/cucumber-json/', file)))

report.generate({
  jsonDir: "cypress/cucumber-json/",  // ** Path of .json file ** //
  reportPath: "./reports/cucumber-htmlreport.html",
});