/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');


var BurninSliderContainer = require('../src/containers/BurninSliderContainer');
var Slider = require('../src/components/Slider');


var renderedComponent;
describe('BurninSliderContainer tests', function () {

  before(function(done) {
    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <BurninSliderContainer maxValue = {100} />
    );
    done();
  });

  it("renders a view", function () {
    var SliderInstances = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, Slider
    );

    assert(SliderInstances.length == 1);
  });

  it("user action", function () {




  });

});
