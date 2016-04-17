// Mocking window and document object:
require('./testdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
// var TestUtils = React.addons.TestUtils;

describe('Testing my div', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: Lovely! Here it is - my very first React component!', function() {
    var VeryFirstDiv = require('./TestComponent');
    var myDiv = TestUtils.renderIntoDocument(
      <VeryFirstDiv />
    );
    var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'span');

    assert.equal(divText.textContent, 'Lovely! Here it is - my very first React component!');
  });
});
