const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5bxvgv',
  video: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
