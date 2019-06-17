class Websocket {
  middleware (config, lws) {
    const WebSocket = require('ws')
    const wss = new WebSocket.Server({ server: lws.server })

    wss.on('connection', socket => {
      socket.on('message', message => {
        console.log(`Received: ${message}`)
        const reply = 'Hello from the server'
        console.log(`Sending: ${reply}`)
        socket.send(reply)
      })
    })
  }
}

module.exports = Websocket
