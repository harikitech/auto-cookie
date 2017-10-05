import 'mocha'
import * as assert from 'assert'
import start from './helpers/server'

declare var browser: any

describe('auto-cookie', () => {
  let server
  const COOKIE_NAME = 'auto-cookie'

  before(() => {
    server = start()
    return server
  })

  after(() => server.close())
  beforeEach('clean cookies', () => browser.deleteCookie())

  it('should get cookie around xip.io', () =>
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie(COOKIE_NAME)
      .then((cookie: any) => {
        assert(cookie.value === 'data')
        assert(cookie.domain === '.xip.io')
      }))

  it('should not set cookie around 0.0.0.0', () =>
    browser
      .url('http://0.0.0.0:8000')
      .getCookie(COOKIE_NAME)
      .then((cookie: any) => {
        assert(!cookie)
      }))

  it('should get cookie with path', () =>
    browser
      .url('http://www.0.0.0.0.xip.io:8000/path')
      .getCookie('path-cookie')
      .then((cookie: any) => {
        assert(cookie.value === 'setPath')
        assert(cookie.domain === '.xip.io')
        assert(cookie.domain === 'path')
      }))

  it('should get cookie has object value', () =>
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie('object-cookie')
      .then((cookie: any) => {
        assert(
          cookie.value === '{%22s%22:%22string%22%2C%22n%22:99%2C%22b%22:true}'
        )
        assert(cookie.domain === '.xip.io')
      }))
})
