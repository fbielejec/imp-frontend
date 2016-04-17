// Mocking window and document object:
require('./testdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var TestComponent = require('./TestComponent');

describe('TestComponent tests', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: FUBAR', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <TestComponent />
    );

// console.log(renderedComponent);

    var divText = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'span');
    assert.equal(divText.textContent, 'FUBAR');
  });

});
