!(function() {
  if (Array.isArray) return;
  Array.isArray = function (a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };
}());
