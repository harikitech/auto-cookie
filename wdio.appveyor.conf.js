exports.config = {
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
  logLevel: 'verbose',
  coloredLogs: true,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot', 'spec'],
  services: ['selenium-standalone'],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
