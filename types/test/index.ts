import { save, find } from '../'

const name = 'auto-cookie'
const expires = 1 / 48
save(name, 'data', expires)
console.log(find(name, expires))
