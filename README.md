# auto-cookie

[![npm version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependencies Status](https://david-dm.org/uncovertruth/auto-cookie/status.svg)](https://david-dm.org/uncovertruth/auto-cookie) [![devDependencies Status](https://david-dm.org/uncovertruth/auto-cookie/dev-status.svg)](https://david-dm.org/uncovertruth/auto-cookie?type=dev) [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme) [![Greenkeeper badge](https://badges.greenkeeper.io/uncovertruth/auto-cookie.svg)](https://greenkeeper.io/)

[![Build Status](https://saucelabs.com/browser-matrix/UNCOVERTRUTH-AUTO-COOKIE.svg)](https://saucelabs.com/open_sauce/user/UNCOVERTRUTH-AUTO-COOKIE/builds)

> auto set cookie domain like google analytics

TBA

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```sh
npm install auto-cookie js-cookie --save
```

## Usage

```js
import { find, save } from 'auto-cookie'

find(cookieName, expires)  // read
save(cookieName, data, expires)  // write
```

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © UNCOVER TRUTH Inc.

[npm-image]: https://badge.fury.io/js/auto-cookie.svg
[npm-url]: https://www.npmjs.com/package/auto-cookie
[travis-image]: https://travis-ci.org/uncovertruth/auto-cookie.svg?branch=master
[travis-url]: https://travis-ci.org/uncovertruth/auto-cookie
