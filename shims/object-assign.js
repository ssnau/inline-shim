(function(){
  if (Object.assign) return;
  function assign() {
    var dest = arguments[0], a = arguments;
    for (var i = 1; i < a.length; i++) {
      if (!a[i]) continue;
      for (var k in a[i]) {
        if (!a[i].hasOwnProperty(k)) continue;
        dest[k] = a[i][k];
      }
    }
    return dest;
  };
  Object.assign = assign;

  console.info(assign({a: 1}, {b: 2}))
})();
