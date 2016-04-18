/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');

var MainContainer = require('../src/containers/MainContainer');
var LoadTrees = require('../src/components/LoadTrees');
var SelectAttributesContainer = require('../src/containers/SelectAttributesContainer');
var BurninSliderContainer = require('../src/containers/BurninSliderContainer');
var SelectSlicesContainer = require('../src/containers/SelectSlicesContainer');
var DecimalDateContainer = require('../src/containers/DecimalDateContainer');

var renderedComponent;
describe('MainContainer tests', function () {

  before(function(done) {
    renderedComponent = TestUtils.renderIntoDocument(
      <MainContainer />
    );
    done();
  });

  it("render a view", function () {
    var _LoadTrees = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, LoadTrees
    );

    // there should be exacly one LoadTrees button rendered at this point
    assert(_LoadTrees.length == 1);
  });

  it("change state", function () {

    // change state
    renderedComponent.setState({
      treesLoaded: true,
    });

    var _SelectAttributesContainer = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, SelectAttributesContainer
    );
    assert(_SelectAttributesContainer.length == 1);

    var _BurninSliderContainer = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, BurninSliderContainer
    );
    assert(_BurninSliderContainer.length == 1);

    var _SelectSlicesContainer = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, SelectSlicesContainer
    );
    assert(_SelectSlicesContainer.length == 1);

    var _DecimalDateContainer = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, DecimalDateContainer
    );
    assert(_DecimalDateContainer.length == 1);

  });

});
