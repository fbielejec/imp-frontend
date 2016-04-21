/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var nock = require("nock");
var $ = require('jquery');

var SelectAttributesContainer = require('../src/containers/SelectAttributesContainer');
var Selector = require('../src/components/Selector');

var renderedComponent;
describe('SelectAttributesContainer tests', function () {

  before(function(done) {
    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <SelectAttributesContainer attributes = {['location1', 'location2']} />
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

    var select = TestUtils.findRenderedDOMComponentWithTag(SelectorInstance, 'select');
    TestUtils.Simulate.change(select, { target: { value: 'location2' } });

    assert(renderedComponent.state.value == 'location2' );
  });

});
