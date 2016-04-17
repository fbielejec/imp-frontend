/**
* @fbielejec
*/

require('./testdom')('<html><body></body></html>');

var React = require('react');
var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var MainContainer = require('../src/containers/MainContainer');
var LoadTrees = require('../src/components/LoadTrees');

// http://www.asbjornenge.com/wwc/testing_react_components.html
// https://www.toptal.com/react/how-react-components-make-ui-testing-easy
// http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

describe('MainContainer tests', function () {
  jsdom({ skipWindowCheck: true });

  it("renders a view", function () {
    var renderedComponent = TestUtils.renderIntoDocument(
      <MainContainer />
    );

    var buttons = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, LoadTrees
    );

    // there should be only one LoadTrees button rendered
assert(buttons.length == 1);
  });

} );
