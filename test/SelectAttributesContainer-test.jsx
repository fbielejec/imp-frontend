/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');

var SelectAttributesContainer = require('../src/containers/SelectAttributesContainer');
var Selector = require('../src/components/Selector');
// var BurninSliderContainer = require('../src/containers/BurninSliderContainer');
// var SelectSlicesContainer = require('../src/containers/SelectSlicesContainer');
// var DecimalDateContainer = require('../src/containers/DecimalDateContainer');

var renderedComponent;
describe('SelectAttributesContainer tests', function () {

  before(function(done) {
    renderedComponent = TestUtils.renderIntoDocument(
      <SelectAttributesContainer attributes = {["rate", "location"]} />
    );
    done();
  });

  it("render a view", function () {
    var _Selector = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, Selector
    );

    assert(_Selector.length == 1);
  });

  it("change state", function () {
    // change state
    renderedComponent.setState({
      value: "location",
    });

    var _Selector = TestUtils.findRenderedComponentWithType(
      renderedComponent, Selector
    );

    var select = TestUtils.
    findRenderedDOMComponentWithTag(_Selector, 'select');


    // console.log(select.selectedIndex);



  });

});
