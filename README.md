# require-skip-cache
Require a module without adding it to the cached modules

## Why?

You probably don't have a use for it, but I use it to dynamically create sandboxes for Node's `vm` module. 

## Usage

```javascript
var _require = require('require-skip-cache')
var request = _require('request') // will not be added to Module._cache

request('http://google.com/', function (err, res, body) {
  ...
})

```


## References

```Module._load at module.js``` [https://github.com/nodejs/node/blob/master/lib/module.js#L295-L333](https://github.com/nodejs/node/blob/master/lib/module.js#L295-L333)
