exports.config = {
  specs: [
    './test/*.js'
  ],
  capabilities: [
    {
      browserName: 'firefox'
    }
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  services: ['selenium-standalone'],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
