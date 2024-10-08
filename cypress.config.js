const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://automationexercise.com/',
    //baseUrl:'https://opensource-demo.orangehrmlive.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    env:{
          adminURL:'https://google.com/',
    }
  },
});
