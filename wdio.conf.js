exports.config = {
  specs: [
    '.tmp/*.js'
  ],
  capabilities: [
    {browserName: 'chrome'}
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  baseUrl: 'http://localhost',
  connectionRetryCount: 3,
  framework: 'mocha',
  services: ['selenium-standalone']
}
