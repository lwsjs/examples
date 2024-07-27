class Custom404 {
  middleware (config) {
    return async (ctx, next) => {
      ctx.response.body = 'Hello'
      await next()
    }
  }
}

export default Custom404
