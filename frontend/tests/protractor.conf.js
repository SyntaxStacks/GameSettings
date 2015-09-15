var path = require('path');

exports.config = {
    rootElement: 'html',
    // The address of a running selenium server. If this is specified,
    // seleniumServerJar and seleniumPort will be ignored.
    seleniumServerJar: __dirname + '/../../node_modules/webdriver-manager/selenium/selenium-server-standalone-2.46.0.jar',

    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'localhost:9000',

    specs: [
        path.resolve(__dirname + '/stories/**/*.test.js')
    ],

    params: {},

    framework: 'mocha',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'firefox'
    },

    allScriptsTimeout: (1000 * 60 * 4),
    getPageTimeout: 60000,
    // Options to be passed to mocha
    mochaOpts: {
        slow: 5000,
        timeout: 60000,
        ui: 'bdd'
    },

    onPrepare: function () {
        testDir = __dirname;
        var chai = require('chai')
            .use(require('chai-as-promised'));
        chai.config.truncateThreshold = 0;
        expect = chai.expect;
        _ = require('lodash');
        browser.driver.get(browser.baseUrl);
    }
};
