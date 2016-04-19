/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');


var SelectSlicesContainer = require('../src/containers/SelectSlicesContainer');
var Selector = require('../src/components/Selector');


var renderedComponent;
describe('SelectSlicesContainer tests', function () {

  before(function(done) {
    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <SelectSlicesContainer />
    );
    done();
  });

  it("renders a view", function () {
    var SelectorInstances = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, Selector
    );

    assert(SelectorInstances.length == 1);
  });

  it("user action", function () {
    var SelectorInstance = TestUtils.findRenderedComponentWithType(
      renderedComponent, Selector
    );

    var values = SelectorInstance.props.values

    var select = TestUtils.findRenderedDOMComponentWithTag(SelectorInstance, 'select');
    TestUtils.Simulate.change(select, { target: { value: values[0] } });

    assert(renderedComponent.state.value == values[0] );
  });

});
