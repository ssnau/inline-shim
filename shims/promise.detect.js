try {
  var p = Promise.resolve(1);
  return true;
} catch (e) {
  return false;
}
