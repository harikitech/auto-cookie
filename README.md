# auto-cookie

[![npm version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![dependencies Status](https://david-dm.org/harikitech/auto-cookie/status.svg)](https://david-dm.org/harikitech/auto-cookie)
[![devDependencies Status](https://david-dm.org/harikitech/auto-cookie/dev-status.svg)](https://david-dm.org/harikitech/auto-cookie?type=dev)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

[![Build Status](https://saucelabs.com/browser-matrix/harikitech-AUTO-COOKIE.svg)](https://saucelabs.com/open_sauce/user/harikitech-AUTO-COOKIE/builds)

> auto set cookie domain like google analytics

## Table of Contents

- [Code Example](#code-example)
- [Installation](#install)
- [Usage](#usage)
- [Tests](#tests)
- [Contribute](#contribute)
- [License](#license)

## Code Example

see [examples](https://github.com/harikitech/auto-cookie/tree/master/example)

## Install

```sh
npm install auto-cookie js-cookie --save
```

## Usage

```js
import { save } from 'auto-cookie'

save(cookieName, data, options) // write
```

## Tests

Tests depends on [webdriver](http://webdriver.io/).
See setup it.

```sh
npm run test
```

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © UNCOVER TRUTH Inc.

[npm-image]: https://badge.fury.io/js/auto-cookie.svg
[npm-url]: https://www.npmjs.com/package/auto-cookie
[travis-image]: https://travis-ci.org/harikitech/auto-cookie.svg?branch=master
[travis-url]: https://travis-ci.org/harikitech/auto-cookie
