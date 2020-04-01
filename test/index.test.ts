import * as assert from 'assert'
import * as http from 'http'
import 'mocha'
import 'webdriverio'
import start from './helpers/server'

describe('auto-cookie', () => {
  let server: http.Server
  const COOKIE_NAME = 'auto-cookie'

  before((done) => {
    server = start(done)
  })

  after(() => server.close())
  beforeEach('clean cookies', () => browser.deleteCookie(COOKIE_NAME))

  it('should get cookie around xip.io', async () => {
    await browser.url('http://www.0.0.0.0.xip.io:8000')
    const [cookie] = await browser.getCookies([COOKIE_NAME])
    assert(cookie.value === 'data')
    assert(cookie.domain === '.xip.io')
  })

  it('should not set cookie around 0.0.0.0', async () => {
    await browser.url('http://0.0.0.0:8000')
    const [cookie] = await browser.getCookies([COOKIE_NAME])
    assert(!cookie)
  })

  it('should get cookie with path', async () => {
    await browser.url('http://www.0.0.0.0.xip.io:8000/path')
    const [cookie] = await browser.getCookies(['path-cookie'])
    assert(cookie.value === 'setPath')
    assert(cookie.domain === '.xip.io')
    assert(cookie.path === '/path')
  })

  it('should get cookie has object value', async () => {
    await browser.url('http://www.0.0.0.0.xip.io:8000')
    const [cookie] = await browser.getCookies(['object-cookie'])
    assert(
      cookie.value === '{%22s%22:%22string%22%2C%22n%22:99%2C%22b%22:true}',
    )
    assert(cookie.domain === '.xip.io')
  })
})
