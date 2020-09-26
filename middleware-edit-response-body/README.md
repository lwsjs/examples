## middleware-edit-response-body

A custom middleware showing how the response body from a downstream middleware (in this case `lws-static`) can be edited.

Install dependencies.

```
$ npm install
```

Launch the server. Notice how the `edit-response` middleware is deployed _before_ the `lws-static` middleware ([response editing middleware](https://github.com/koajs/koa/blob/master/docs/guide.md#response-middleware) must appear higher in the Koa stack than the downstream middleware which created the response).

```
$ npx lws --stack ./edit-response.js lws-static
```

Request the index page. Notice our custom middleware has forcefully changed the best Beatles album from "The White Album" to "Abbey Road".

```
$ curl http://localhost:8000
<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
</head>
<body>
  <p>Best album by The Beatles: Abbey Road</p>
</body>
</html>
```

[See here](https://github.com/lwsjs/local-web-server/wiki/Creating-middleware) for full documentation on how to create middleware.
