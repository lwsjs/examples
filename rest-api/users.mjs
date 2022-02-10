import router from 'koa-route'

const users = [
  { id: 1, name: 'Lloyd', age: 43 },
  { id: 2, name: 'Mona', age: 34 },
  { id: 3, name: 'Francesco', age: 24 }
]

class Users {
  middleware () {
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
      }),
      router.get('/users/:id', function (ctx, id) {
        ctx.response.type = 'json'
        ctx.response.body = users.find(user => user.id === Number(id))
      }),
      router.put('/users/:id', function (ctx, id) {
        const existingUserIndex = users.findIndex(user => user.id === Number(id))
        const existingUser = users.find(user => user.id === Number(id))
        const updatedUser = Object.assign({}, existingUser, ctx.request.body)
        users.splice(existingUserIndex, 1, updatedUser)
        ctx.response.status = 204
      }),
      router.delete('/users/:id', function (ctx, id) {
        const existingUserIndex = users.findIndex(user => user.id === Number(id))
        users.splice(existingUserIndex, 1)
        ctx.response.status = 204
      }),
      router.post('/users/:id', function (ctx) {
        ctx.response.status = 405
      })
    ]
  }
}

export default Users
