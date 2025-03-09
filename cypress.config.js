const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h3m3vo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
