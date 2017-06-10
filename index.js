var fs = require('fs');
var path = require('path');
module.exports = {
  bootstrapCode: fs.readFileSync(path.join(__dirname, 'utils', 'bootstrap.js'), 'utf8'),
  comboCode: fs.readFileSync(path.join(__dirname, 'utils', '_combo_get.js'), 'utf8'),
  parseQuery: require('./parse-query')
};
