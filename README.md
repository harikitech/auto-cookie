# auto-cookie

[![npm version][npm-image]][npm-url]
![Node CI](https://github.com/harikitech/auto-cookie/workflows/Node%20CI/badge.svg)

[![dependencies Status](https://david-dm.org/harikitech/auto-cookie/status.svg)](https://david-dm.org/harikitech/auto-cookie)
[![devDependencies Status](https://david-dm.org/harikitech/auto-cookie/dev-status.svg)](https://david-dm.org/harikitech/auto-cookie?type=dev)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

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
import { save } from "auto-cookie";

save(cookieName, data, options); // write
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

MIT © harikitech

[npm-image]: https://badge.fury.io/js/auto-cookie.svg
[npm-url]: https://www.npmjs.com/package/auto-cookie
