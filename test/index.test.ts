import 'mocha'
import * as assert from 'power-assert'
import start from './helpers/server'

declare var browser: any

describe('auto-cookie', () => {
  const name = 'auto-cookie'

  before(() => {
    start()
  })

  beforeEach('clean cookies', () => {
    browser.deleteCookie()
  })

  it('should get cookie around xip.io', done => {
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie(name)
      .then(cookie => {
        assert(cookie.value === 'data')
        done()
      })
  })

  it('should not set cookie around 0.0.0.0', done => {
    browser
      .url('http://0.0.0.0:8000')
      .getCookie(name)
      .then(cookie => {
        assert(!cookie)
        done()
      })
  })

  const pathCookieName = 'path-cookie'
  it('should get cookie with path', done => {
    browser
      .url('http://www.0.0.0.0.xip.io:8000/path')
      .getCookie(pathCookieName)
      .then(cookie => {
        assert(cookie.value === 'setPath')
        done()
      })
  })
})
