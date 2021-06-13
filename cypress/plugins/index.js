/// <reference types="cypress" />
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
// eslint-disable-next-line no-unused-vars

const path = require('path');
const fs = require('fs-extra');
const cucumber = require('cypress-cucumber-preprocessor').default

const optionalPlugins = [];
const { IgnorePlugin } = require('webpack');

if (process.platform !== "darwin") { // don't ignore on OSX
  optionalPlugins.push(new IgnorePlugin({ resourceRegExp: /^fsevents$/ }));
}



module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())
  plugins: [ ...optionalPlugins ]
}

// const browserify = require("@cypress/browserify-preprocessor");

// module.exports = (on) => {
//     const options = {
//         browserifyOptions: {
//             extensions: [".js", ".ts"]
//         }
//     };
//     on("file:preprocessor", browserify(options));
// };

// const browserify = require('@cypress/browserify-preprocessor')
// module.exports = (on) => {
//   on('file:preprocessor', browserify())
// }
