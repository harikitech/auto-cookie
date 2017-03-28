'use strict';

var _powerAssert = require('power-assert');

var _powerAssert2 = _interopRequireDefault(_powerAssert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('auto-cookie', function () {
  var name = 'auto-cookie';
  it('set cookie', function () {
    browser.url('http://www.0.0.0.0.xip.io:8000');
    (0, _powerAssert2.default)(browser.getCookie(name) === 'data');
  });
});