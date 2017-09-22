/* @flow */
import { save, find } from '../src'
const expires = 1 / 48

const name_basic = 'auto-cookie'
save(name_basic, 'data', expires)

const name_path = 'path-cookie'
save(name_path, 'setPath', expires, '/path')

const name_secure = 'secure-cookie'
save(name_secure, 'setPath', expires, '/path', true)
console.log(find(name, expires))
