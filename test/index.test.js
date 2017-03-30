/* @flow */
import assert from 'assert'
import { describe, it } from 'mocha'

declare var browser: any

describe('auto-cookie', () => {
  const name = 'auto-cookie'
  it('set cookie', (done) => {
    browser
      .url('http://localhost:8000')
      .getCookie(name)
      .then((cookie) => {
        assert(cookie.value === 'data')
        done()
      })
  })
})
