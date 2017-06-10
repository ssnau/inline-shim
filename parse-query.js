const BUILD_DIR = 'build';
var fs = require('fs');
var fs = require('fs');
var path = require('path');
var root = __dirname;
var files = fs.readdirSync(path.join(root, BUILD_DIR));
var fileMap = files.reduce((o, f) => {
  content = fs.readFileSync(path.join(root, BUILD_DIR, f), 'utf8');
  o[shim_name(f)] = content;
  return o;
}, {});

function shim_name(f) {
  return f
    .replace('/', '')
    .replace('.detect', '')
    .replace(/.js$/, '');
}

module.exports = function parseQuery(query) {
  var files = query.split(';');
  return files.reduce((str, f) => {
    return str + ';' + (fileMap[shim_name(f)] || '');
  }, '');
};
