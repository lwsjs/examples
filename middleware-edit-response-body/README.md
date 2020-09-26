## Simple middleware plugin example

Run this command to launch a server running our example middleware:

```
$ ws --stack example.js
```

Make a request, our custom middleware creates the response.

```
$ curl http://127.0.0.1:8000
Hello from lws!
```

[See here](https://github.com/lwsjs/local-web-server/wiki/Creating-middleware) for full documentation.
