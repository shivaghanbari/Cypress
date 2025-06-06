const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: 'h3m3vo',
  e2e: {
    video: true,
    videosFolder: "/Users/shiva/Cypress/video",
    // Add these for better realPress support
    screenshotsFolder: 'cypress/screenshots',
    reporter: 'spec',
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      on('before:run', () => {
        console.log("Cypress test started...");
      });

      on('after:run', () => {
        console.log("Cypress test completed!");
      });

      // Add browser launch options
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--disable-features=VizDisplayCompositor');
        }
        return launchOptions;
      });
    },
  },
});