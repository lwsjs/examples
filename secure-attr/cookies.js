class CookieApp {
  requestHandler () {
    return function (req, res) {
      // console.log(req.headers)
      const reqCookie = req.headers.cookie
      res.setHeader('set-cookie', `lastVisit=${new Date().toLocaleString()}; Secure; SameSite=None`)
      res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8020')
      res.setHeader('Access-Control-Allow-Credentials', 'true')
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify(reqCookie ? { msg: 'lastVisit: ' + reqCookie } : { msg: 'First visit' }))
    }
  }
}

export default CookieApp
