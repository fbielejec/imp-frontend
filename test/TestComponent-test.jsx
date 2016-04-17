// Mocking window and document object:
require('./testdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var VeryFirstDiv = require('./TestComponent');


describe('Testing my div', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: Lovely! Here it is - my very first React component!', function() {
    var myDiv = TestUtils.renderIntoDocument(
      <VeryFirstDiv />
    );
    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'span');

    assert.equal(divText.textContent, 'Lovely! Here it is - my very first React component!');
  });
});
