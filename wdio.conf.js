const config = {
  specs: ["./test/*.ts"],
  capabilities: [
    {
      browserName: "firefox"
    }
  ],
  exclude: [],
  bail: 0,
  sync: false,
  logLevel: "verbose",
  coloredLogs: true,
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["dot", "spec"],
  services: ["selenium-standalone"],
  mochaOpts: {
    ui: "bdd",
    require: ["espower-typescript/guess"],
    timeout: 100000
  }
};

let override = {};
if (
  process.env.SAUCE_USERNAME &&
  process.env.SAUCE_ACCESS_KEY &&
  process.env.CI_MODE === "sauce"
) {
  override = {
    logLevel: "silent",
    capabilities: [
      { browserName: "iphone", version: "10.0" },
      { browserName: "android", version: "5.1" },
      { browserName: "chrome", platform: "Linux", version: "46" },
      { browserName: "chrome", version: "beta" },
      { browserName: "firefox", platform: "Linux", version: "44" },
      { browserName: "safari", version: "10.0" },
      {
        browserName: "internet explorer",
        platform: "Windows 8.1",
        version: "11"
      },
      {
        browserName: "MicrosoftEdge",
        platform: "Windows 10",
        version: "13.10586"
      }
    ],
    waitforTimeout: 100000,
    services: ["sauce"],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnectOpts: {
      options: {
        "selenium-version": "3.1.0",
        "command-timeout": 600,
        "idle-timeout": 600,
        "max-duration": 5400
      },
      downloadRetries: 3,
      connectRetries: 3,
      connectRetryTimeout: 5000,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER
    },
    sauceConnect: false
  };
}

exports.config = Object.assign({}, config, override);
