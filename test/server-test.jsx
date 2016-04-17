var assert = require('chai').assert;
var request = require('request');
var server = require('../src/utils/server.js');

describe("Mocha tests", function() {

  var url = server.rootURL;
  it("server returns status 200", function(done) {
    request(url, function(error, response, body) {
      assert(response.statusCode === 200);
      done();
    });
  });

  // it('should return an array', function() {
  //   assert(Array.isArray('a,b,c'.split(',')));
  // });


});
