import { save } from '../src'
const expires = 1 / 48
save('auto-cookie', 'data', { expires })
save('object-cookie', { s: 'string', n: 99, b: true }, { expires })

const path = '/path'
save('path-cookie', 'setPath', { expires, path })
save('secure-cookie', 'setPath', { expires, path, secure: true })
