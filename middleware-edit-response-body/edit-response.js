const streamReadAll = require('stream-read-all')

class EditResponse {
  middleware (config) {
    return async function (ctx, next) {
      /* First, execute downstream middleware to create the response */
      await next()

      /* Edit the response */
      const responseBodyBuffer = await streamReadAll(ctx.response.body)
      const body = responseBodyBuffer.toString().replace('The White Album', 'Abbey Road')
      ctx.response.body = body
    }
  }
}

module.exports = EditResponse
