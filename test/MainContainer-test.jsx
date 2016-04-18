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
var Selector = require('../src/components/Selector');

// http://www.asbjornenge.com/wwc/testing_react_components.html
// https://www.toptal.com/react/how-react-components-make-ui-testing-easy
// http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

describe('MainContainer tests', function () {
  jsdom({ skipWindowCheck: true });

  it("renders a view", function () {
    var renderedComponent = TestUtils.renderIntoDocument(
      <MainContainer />
    );

    var _LoadTrees = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, LoadTrees
    );

    // there should be only one LoadTrees button rendered at this point
    assert(_LoadTrees.length == 1);
  });


  it("state change", function () {
    var renderedComponent = TestUtils.renderIntoDocument(
      <MainContainer />
    );

// change state
renderedComponent.setState({
  treesLoaded: true,
});

// assert if other elements have rendered
// var _selector = TestUtils.findRenderedComponentWithType(
//   renderedComponent, Selector
// );


  });

});
