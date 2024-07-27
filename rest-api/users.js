import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const users = [
  { id: 1, name: 'Lloyd', age: 43 },
  { id: 2, name: 'Mona', age: 34 },
  { id: 3, name: 'Francesco', age: 24 }
]

/**
 * ws2 --app users.js --port 3000
 */
class RestAPIApplication {
  requestHandler () {
    const app = express()
    const router = express.Router()

    /*
    Example command:
    $ curl http://127.0.0.1:8000/users
    */
    router.get('/users', function (req, res) {
      res.json(users)
    }),

    /*
    Example command:
    $ curl http://127.0.0.1:8000/users -d '{ "name": "Rodney", "age": 28 }' -H 'content-type: application/json' -i
    */
    router.post('/users', function (req, res) {
      const newUser = req.body
      users.push(newUser)
      newUser.id = users.length
      res.status(201)
      res.set('Location', `/users/${newUser.id}`)
      res.end()
    })

    /*
    Example command:
    $ curl http://127.0.0.1:8000/users/2
    */
    router.get('/users/:id', function (req, res) {
      res.json(users.find(user => user.id === Number(req.params.id)))
      res.end()
    })

    // router.put('/users/:id', function (ctx, id) {
    //   const existingUserIndex = users.findIndex(user => user.id === Number(id))
    //   const existingUser = users.find(user => user.id === Number(id))
    //   const updatedUser = Object.assign({}, existingUser, ctx.request.body)
    //   users.splice(existingUserIndex, 1, updatedUser)
    //   ctx.response.status = 204
    // }),
    // router.delete('/users/:id', function (ctx, id) {
    //   const existingUserIndex = users.findIndex(user => user.id === Number(id))
    //   users.splice(existingUserIndex, 1)
    //   ctx.response.status = 204
    // }),
    // router.post('/users/:id', function (ctx) {
    //   ctx.response.status = 405
    // })


    app.use(cors())
    app.use(bodyParser.json())
    app.use('/', router)
    return app
  }
}

export default RestAPIApplication
