/* @flow */
import http from 'http'
import finalhandler from 'finalhandler'
import path from 'path'

import assert from 'assert'
import { describe, before, beforeEach, it } from 'mocha'
import serveStatic from 'serve-static'

declare var browser: any

describe('auto-cookie', () => {
  const name = 'auto-cookie'

  before(() => {
    const serve = serveStatic(path.join(__dirname, '../example'))

    const server = http.createServer((req, res) => {
      serve(req, res, finalhandler(req, res))
    })

    server.listen(8000)
  })

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
