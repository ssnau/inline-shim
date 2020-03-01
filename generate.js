const SHIM_DIR = 'shims';
var fs = require('fs');
var path = require('path');
var root = __dirname;
var UglifyJS = require('uglify-js');
var files = fs.readdirSync(path.join(root, SHIM_DIR));

var uglify = function (str) {
  const t = UglifyJS.minify(str);
  if (t.error) throw t.error;
  return t.code
}

var shimMap = files.reduce((o, f) => {
  content = fs.readFileSync(path.join(root, SHIM_DIR, f), 'utf8');
  var name = shim_name(f);
  o[name] = o[name] || {};
  if (/.detect.js/.test(f)) {
    o[name].detect = uglify(`(function(){${content}}())`);
  } else {
    o[name].shim = (`!(function(){var code = ${JSON.stringify(uglify(content))}; eval(code); try {localStorage.setItem('_shim-${name}', code);}catch(e){} }())`);
  }
  return o;
}, {});
Object
  .keys(shimMap)
  .forEach(key => {
    var m = shimMap[key];
    if (!m.detect) throw new Error(`${key} doesn't have detect code`);
    if (!m.shim) throw new Error(`${key} doesn't have shim code`);
    fs.writeFileSync(path.join(root, 'build', key + '.js'), m.shim);
  });


function shim_name(f) {
  return f
    .replace('/', '')
    .replace('.detect', '')
    .replace(/.js$/, '');
}

function getBootstrapCode() {
  // detect code
  var keys = Object.keys(shimMap);
  var detectCode = 'window.__SHIM_SUPPORT = {};' +
    keys.map(k => `window.__SHIM_SUPPORT['${k}'] = ${shimMap[k].detect};`).join('');
  debugger;
  var detectFn = `function detect() { ${detectCode} }`

  // load from localstorage
  var loadCode = `
    ;(function () {
      detect();
      if (typeof localStorage == 'undefined') return;
      var s = window.__SHIM_SUPPORT;
      var unsupported = [];
      for (var k in s) {
        if (!s.hasOwnProperty(k)) continue;
        if (!s[k]) unsupported.push(k);
      }
      for (var i = 0; i < unsupported.length; i++) {
        var code = localStorage.getItem('_shim-' + unsupported[i]);
        if (code) eval(code);
      }
      detect();
    }());
  `;

  var all_the_code = uglify(detectFn + loadCode);

  return `;(function(){ ${all_the_code} }());`;
}

fs.writeFileSync(path.join(root, 'utils', 'bootstrap.js'), getBootstrapCode());
fs.writeFileSync(path.join(root, 'utils', '_combo_get.js'), uglify(`
!(function(){
    var s = window.__SHIM_SUPPORT;
    var unsupported = [];
    for (var k in s) {
      if (!s.hasOwnProperty(k)) continue;
      if (!s[k]) unsupported.push(k);
    }
    if (!unsupported.length) return;
    document.write(('<script src="/_combo_shim?v=VERSION&files=' + unsupported.join(';') + '"></$cript>').replace('$cript', 'script'));
}());
`.replace("VERSION", require('./package.json').version)));
