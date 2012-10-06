(function (){
  var root = this;

  var mio = {};

  // Export the mio object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports.mio = mio;
    }
    exports.mio = mio;
  } else {
    root['mio'] = mio;
  }
}).call(this);
