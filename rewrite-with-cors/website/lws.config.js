/* The remote server has CORS enabled so `/some-data.json` response should include `Access-Control-Allow-Origin: http://127.0.0.1:8000` */
module.exports = {
  rewrite: [
    { from: '/some-data.json', to: 'http://localhost:9000/some-data.json' }
  ]
}
