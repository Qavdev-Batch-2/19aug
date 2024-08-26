const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    requestTimeout: 6000,
    defaultCommandTimeout: 8000,


    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
