import 'mocha'
import * as assert from 'assert'
import start from './helpers/server'

declare var browser: any

describe('auto-cookie', () => {
  const COOKIE_NAME = 'auto-cookie'

  before(() => start())
  beforeEach('clean cookies', () => browser.deleteCookie())

  it('should get cookie around xip.io', () =>
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie(COOKIE_NAME)
      .then((cookie: any) => {
        assert(cookie.value === 'data')
      })
      .execute(() => document.cookie)
      .then((data: string) => {
        assert(data === '')
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
      }))

  it('should get cookie has object value', () =>
    browser
      .url('http://www.0.0.0.0.xip.io:8000')
      .getCookie('object-cookie')
      .then((cookie: any) => {
        assert(cookie.value === { s: 'string', n: 999, b: true })
      }))
})
