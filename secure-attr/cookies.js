class Cookies {
  middleware (config, lws) {
    return function (ctx, next) {
      const secure = true
      const lastVisit = ctx.cookies.get('lastVisit')
      ctx.cookies.set('lastVisit', new Date().toLocaleString(), { secure })
      if (lastVisit) {
        ctx.body = { msg: 'lastVisit: ' + lastVisit }
      } else {
        ctx.body = { msg: 'First visit' }
      }

    }
  }
}

module.exports = Cookies
