const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: 'h3m3vo',
  e2e: {
    specPattern: 'cypress/E2E/**/*.cy.{js,jsx,ts,tsx}', // ✅ Add this line
    video: true,
    videosFolder: "cypress/videos",
    screenshotsFolder: 'cypress/screenshots',
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
