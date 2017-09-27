import { save, find } from '../src'
const expires = 1 / 48
const path = '/path'
const secure = true

const nameBasic = 'auto-cookie'
save(nameBasic, 'data', { expires })

const nameObject = 'object-cookie'
const s = 'string'
const n = 999
const b = true
save(nameObject, { s, n, b }, { expires })

const namePath = 'path-cookie'
save(namePath, 'setPath', { expires, path })

const nameSecure = 'secure-cookie'
save(nameSecure, 'setPath', { expires, path, secure })
console.log(find(name, { expires }))
