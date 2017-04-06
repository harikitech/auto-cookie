const config = {
  specs: [
    './test/*.js'
  ],
  capabilities: [
    {
      browserName: 'firefox'
    }
  ],
  exclude: [],
  bail: 0,
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot', 'spec'],
  services: ['firefox-profile', 'selenium-standalone'],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}

let override = {}
if (process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY && process.env.CI_MODE === 'sauce') {
  override = {
    capabilities: [
      {browserName: 'iphone', version: '10.0'},
      {browserName: 'android', version: '5.1'},
      {browserName: 'chrome', platform: 'Linux', version: '46'},
      {browserName: 'chrome', version: 'beta'},
      {browserName: 'firefox', platform: 'Linux', version: '44'},
      {browserName: 'safari', version: '10.0'},
      {browserName: 'internet explorer', platform: 'Windows 8.1', version: '11'},
      {browserName: 'MicrosoftEdge', platform: 'Windows 10', version: '13.10586'}
    ],
    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: false
  }
}

exports.config = Object.assign({}, config, override)
