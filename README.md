# user-ip
Simple NPM to know your user's IP Address

## Install

```
npm install user-ip --save
```

## Usage

```js
const http = require('http');
const userIP = require('user-ip');

http.createServer(function (req, res) {
  const ip = userIP(req);
  res.end(ip);
}).listen(3000);
```

### userIP(req)

* `req` - REQUIRED: http/https server request object

###

Please Contribute And Improve It To Handle Much More Edge Cases..