import assert from 'power-assert'

describe('auto-cookie', () => {
  const name = 'auto-cookie'
  it('set cookie', () => {
    browser.url('http://www.0.0.0.0.xip.io:8000')
    assert(browser.getCookie(name) === 'data')
  })
})
