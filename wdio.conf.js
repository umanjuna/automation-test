exports.config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the
    // directory from which `wdio` was called. Notice that, if you are calling
    // `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script)
    // then the current working directory is where your package.json resides, so
    // `wdio` will be called from there.
    //
    specs: [
        './src/features/**/*.feature',
    ],

    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check
    // out the Sauce Labs platform configurator - a great tool to configure your
    // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async
    // way e.g. using promises you can set the sync option to false.
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',

    waitforTimeout: 60000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'cucumber',

    reporters: ['spec'],

    cucumberOpts: {
        backtrace: false,
        compiler: [
            'js:babel-register',
        ],
        require: [
            './src/steps/*.js',
            './src/pageobjects/*.js',
        ],
        failAmbiguousDefinitions: true,
        failFast: true,
        ignoreUndefinedDefinitions: false,
        strict: true,
        tagExpression: 'not @Pending',
        timeout: 1800000,

    },

  'goog:chromeOptions': {
    prefs: {
      'profile.managed_default_content_settings.popups' : 1,
      'profile.managed_default_content_settings.notifications' : 1,
    },
  },

    before: function before() {
    /**
     * Setup the Chai assertion framework
     */
        const chai = require('chai');
      const chaiAsPromised = require('chai-as-promised');
      chai.use(chaiAsPromised);

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
};
