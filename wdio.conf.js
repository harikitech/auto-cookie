exports.config = {
  specs: [
    './test/*.js'
  ],
  capabilities: [
    {browserName: 'firefox'}
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  baseUrl: 'http://localhost',
  connectionRetryCount: 3,
  framework: 'mocha',
  services: ['selenium-standalone'],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register']
  }
}
