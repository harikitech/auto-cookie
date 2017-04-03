/* @flow */
import assert from 'assert'
import { describe, it } from 'mocha'

declare var browser: any

describe('auto-cookie', () => {
  const name = 'auto-cookie'
  it('set cookie', (done) => {
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie(name)
      .then((cookie) => {
        assert.equal(cookie.value, 'data')
        done()
      })
  })
})
