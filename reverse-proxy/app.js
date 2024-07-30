import http from 'node:http'
import https from 'node:https'

/**
 * DEBUG=* ws2 --app app.js
 */
class ReverseProxyApplication {
  requestHandler () {
    const map = new Map([
      ['www.example.com:8000', function (req) {
        const targetUrl = new URL(req.url, 'https://127.0.0.1:3000')
        return https.request(targetUrl, {
          method: req.method,
          headers: req.headers,
          rejectUnauthorized: false
        })
      }],
      ['img.example.com:8000', function (req) {
        const targetUrl = new URL(req.url, 'http://127.0.0.1:3010')
        return http.request(targetUrl, {
          method: req.method,
          headers: req.headers
        })
      }],
      ['api.example.com:8000', function (req) {
        const targetUrl = new URL(req.url, 'http://127.0.0.1:3020')
        return http.request(targetUrl, {
          method: req.method,
          headers: req.headers
        })
      }]
    ])
    return function forwardRequest (req, res) {
      const target = map.get(req.headers.host)
      if (!target) {
        res.statusCode = 500
        res.end(`No target defined for this source host: ${req.headers.host}`)
      }
      const remoteReq = target(req)
      remoteReq.on('response', remoteRes => {
        res.writeHead(remoteRes.statusCode, remoteRes.headers)
        remoteRes.pipe(res)
      })
      remoteReq.on('error', err => {
        res.statusCode = remoteRes.statusCode
        res.end(err.stack)
      })
      req.pipe(remoteReq)
    }
  }
}

export default ReverseProxyApplication
