# inline-shims

apply shims with inline javascript code, cache with localStorage.

# why

Because we don't want the shim code come within our bundles. We expect the shim being downloaded as less as needed, as modern browser may not need any shims.

# usage

### step 1

inline the shim bootstrap code in your html document head. Here is code sample for Koa-v1:

```javascript
var fs = require('fs');
var shim = require('inline-shims');
module.exports = function* (next) {
  yield next;
  if (/html/.test(this.type) && typeof this.body == 'string') {
    this.body = this.body.replace('</head>', `
    <script name="shim_bootstrap">${shim.bootstrapCode}</script>
    <script name="shim_combo">${shim.comboCode}</script></head>`)
  }
}
```

note: You can change the combo endpoint by `shim.comboCode.replace('/_combo_shim', '/you/end/point')`.


### step 2

write an endpoint using `parseQuery` to handle the shim request. Code sample in `rekoa` way:

```javascript
var parseQuery = require('inline-shims').parseQuery;
module.exports = [
  {
    url: '/_combo_shim',
    controller: async function () {
      var files = this.query.files; 
      this.set('content-type', 'application/javascript');
      this.set('Cache-Control', 'max-age=' + 31536000);
      this.body = parseQuery(files);
    }
  }
];
```

## License

MIT
