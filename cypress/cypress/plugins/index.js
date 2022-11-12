/// <reference types="Cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
const fs = require('fs');

const options = {
  typescript: require.resolve('typescript'),
};
const b = browserify(options);

module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    // createFolder('cypress/results/json/screenshots');
  });

  const options = browserify.defaultOptions
  options.browserifyOptions.extensions.unshift('.ts');
  options.browserifyOptions.plugin.unshift(['tsify', { project: '/cypress/tsconfig.json' }]);

  const c = cucumber({
    ...browserify.defaultOptions,
    ...options,
  })

  on('file:preprocessor', file => {
    if (file.filePath.includes('.feature')) {
      return c(file);
    }
    return b(file);
  })

  on('after:screenshot', function (details) {
    const path = details.path.split("screenshots\\")[1]

    const teste = path.split('\\').filter(folders => {
      return !folders.includes('.png')
    });

    let browserPath = `cypress/results/json/screenshots/${browserName}`
    teste.forEach(folder => {
      browserPath += `/${folder}`;
      createFolder(browserPath)
    });

    const newPath = `cypress/results/json/screenshots/${browserName}/${path}`
    fs.rename(details.path, newPath)
  });
  function createFolder(folder) {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  }
}