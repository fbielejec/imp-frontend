// Mocking window and document object:
require('./testdom')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var TestComponent = require('./TestComponent');

// http://www.asbjornenge.com/wwc/testing_react_components.html
// http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

describe('TestComponent tests', function() {
  jsdom({ skipWindowCheck: true });

  it("renders a shallow of TestComponent", function () {

    var renderer = TestUtils.createRenderer();
    renderer.render(
      <TestComponent />
    );
    var result = renderer.getRenderOutput();
    assert(result.props.children.props.children == 'FUBAR');

  });

  it('should contain text: FUBAR', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <TestComponent />
    );

    var divText = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'span');
    assert.equal(divText.textContent, 'FUBAR');
  });

});
