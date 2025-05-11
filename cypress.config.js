const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: 'h3m3vo',
  e2e: {
    video: true,
    videosFolder: "/Users/shiva/Cypress/video", // Change video folder
    setupNodeEvents(on, config) {
      on('before:run', () => {
        console.log("Cypress test started...");
      });

      on('after:run', () => {
        console.log("Cypress test completed!");
      });
    },
  },
});
