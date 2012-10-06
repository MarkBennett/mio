describe("mio.js", function() {
  var mio = require('../mio').mio;

  it("should define a version", function() {
    expect(mio.VERSION).toEqual("0.0.1");
  });
});
