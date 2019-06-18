module.exports = {
  rewrite: [
    { from: '/css/(.*)', to: '/build/styles/$1' },
    { from: '/npm/(.*)', to: 'http://registry.npmjs.org/$1' },
    { from: '/broken/(.*)', to: 'http://localhost:9999' },
    { from: '/gov', to: 'https://www.gov.uk' },
    { from: '/:user/repos/:name', to: 'https://api.github.com/repos/:user/:name' },
    { from: '/img1/(.*)', to: 'https://img.theculturetrip.com/$1' }
  ]
}
