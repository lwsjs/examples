const users = [
  { id: 1, name: 'Lloyd', age: 40 },
  { id: 2, name: 'Mona', age: 34 },
  { id: 3, name: 'Francesco', age: 24 }
]

class Users {
  middleware () {
    const router = require('koa-route')
    return [
      router.get('/users', function (ctx) {
        ctx.response.type = 'json'
        ctx.response.body = users
      }),
      router.put('/users', function (ctx) {
        ctx.response.status = 405
      }),
      router.delete('/users', function (ctx) {
        ctx.response.status = 405
      }),
      router.post('/users', function (ctx) {
        const newUser = ctx.request.body
        users.push(newUser)
        newUser.id = users.length
        ctx.response.status = 201
        ctx.response.set('Location', `/users/${newUser.id}`)
      })
    ]
  }
}

module.exports = Users
