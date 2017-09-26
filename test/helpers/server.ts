import * as http from 'http'
import * as path from 'path'

declare var __dirname
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')

export default function start () {
  const serve = serveStatic(path.join(__dirname, '../../example'))
  const server = http.createServer((req, res) => {
    serve(req, res, finalhandler(req, res))
  })
  server.listen(8000)
}
