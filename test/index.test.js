/* @flow */
import assert from 'assert'
import { describe, before, beforeEach, it } from 'mocha'

declare var browser: any

describe('auto-cookie', () => {
  const name = 'auto-cookie'

  before(() => {
    const start = require('./helpers/server')
    start()
    browser.pause(3000)
  })

  beforeEach('clean cookies', () => {
    browser.deleteCookie()
  })

  it('should get cookie around xip.io', (done) => {
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie(name)
      .then((cookie) => {
        assert(cookie.value === 'data')
        done()
      })
  })

  it('should not set cookie around 0.0.0.0', (done) => {
    browser
      .url('http://0.0.0.0:8000')
      .getCookie(name)
      .then((cookie) => {
        assert(!cookie)
        done()
      })
  })
})
