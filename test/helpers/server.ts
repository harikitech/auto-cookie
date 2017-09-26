declare function require (path: string): any
declare var __dirname

const http = require('http')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')
const path = require('path')

export default function start () {
  const serve = serveStatic(path.join(__dirname, '../../example'))
  const server = http.createServer((req, res) => {
    serve(req, res, finalhandler(req, res))
  })
  server.listen(8000)
}
