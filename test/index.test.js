/* @flow */
import assert from 'assert'
import { describe, beforeEach, it } from 'mocha'

declare var browser: any

describe('auto-cookie', () => {
  const name = 'auto-cookie'

  beforeEach(() => {
    browser.deleteCookie()
  })

  it('should get cookie around xip.io', (done) => {
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie(name)
      .then((cookie) => {
        assert.equal(cookie.value, 'data')
        done()
      })
  })

  it.skip('should not set cookie around 0.0.0.0', (done) => {
    browser
      .url('http://0.0.0.0:8000')
      .getCookie(name)
      .then((cookie) => {
        assert(!cookie.value)
        done()
      })
  })
})
