# node-rr

save redis data to riak

# example

Check example directory for a working example with poolee enabled in riak.

``` js
var redisClient = require("redis").createClient();
var riakClient = require('riak-js').getClient({host: "localhost", port: "8098"});
var rr = require('node-rr');

var rr = new rr({
  redisClient: redisClient,
  riakClient: riakClient
});

var key = 'node-rr';
var bucket = 'novanet';

// reads the key from redis and saves it in riak bucket
rr.save(key, bucket, function(err, result){
  // doing something with the result.
  console.log(result);
});
```

# install

With [npm](https://npmjs.org) do:

```
npm install node-rr
```

# license

(The MIT License)

Copyright (c) 2013 Chirag Jain <chiragrjain04@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
