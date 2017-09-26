import * as http from 'http'
import * as path from 'path'
import * as finalhandler from 'finalhandler'
import * as serveStatic from 'serve-static'

declare var __dirname

export default function start () {
  const serve = serveStatic(path.join(__dirname, '../../example'))
  const server = http.createServer((req, res) => {
    serve(req, res, finalhandler(req, res))
  })
  server.listen(8000)
}
