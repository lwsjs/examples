import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

/**
 * DEBUG=* ws2 --app app.js
 */
class ReverseProxyApplication {
  requestHandler () {
    const app = express()

    app.use('/', createProxyMiddleware({
      target: 'http://127.0.0.1:3000',
      changeOrigin: true,
      onError: (err, req, res) => {
        console.log(err)
        res.status(500).send('Something went wrong with the proxy' + err.message)
      }
    }))

    return app
  }
}

export default ReverseProxyApplication
