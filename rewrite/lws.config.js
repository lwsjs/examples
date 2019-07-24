module.exports = {
  rewrite: [
    { from: '/css/(.*)', to: '/build/styles/$1' },
    { from: '/npm/(.*)', to: 'http://registry.npmjs.org/$1' },
    { from: '/broken/(.*)', to: 'http://localhost:9999' },
    { from: '/gov', to: 'https://www.gov.uk' },
    { from: '/:user/repos/:name', to: 'https://api.github.com/repos/:user/:name' },
    { from: '/img1/(.*)', to: 'https://img.theculturetrip.com/$1' },
    { from: '/ws/(.*)', to: 'http://127.0.0.1:8100/$1' },
    { from: '/posts', to: 'http://jsonplaceholder.typicode.com/posts' },
    { from: '/images', to: 'http://jsonplaceholder.typicode.com/posts' }
  ],
  stack: [
      'lws-basic-auth',
      'lws-body-parser',
      'lws-request-monitor',
      'lws-log',
      'lws-cors',
      'lws-json',
      'lws-compress',
      'lws-rewrite',
      'lws-blacklist',
      'lws-conditional-get',
      'lws-mime',
      'lws-range',
      'lws-spa',
      'lws-static',
    'lws-index'
    ]
}
