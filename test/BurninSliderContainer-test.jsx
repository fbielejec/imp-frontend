/**
* @fbielejec
*/

"use strict";

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var nock = require("nock");
var $ = require('jquery');

var server = require('../src/utils/server');
var BurninSliderContainer = require('../src/containers/BurninSliderContainer');
var Slider = require('../src/components/Slider');

var api;
var renderedComponent;
describe('BurninSliderContainer tests', function () {

  before(function(done) {
    api = nock("http://localhost:8080")
    .persist()
    .put("/settings", {id: server.settings.burnin})
    .reply(200, {
    });

    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <BurninSliderContainer maxValue = {100} />
    );
    done();
  });

  after(function() {
    nock.cleanAll();
  });

  it("renders a view", function () {
    assert(TestUtils.isCompositeComponent(renderedComponent));
  });

  it("user action", function () {
    var SliderInstance = TestUtils.findRenderedComponentWithType(
      renderedComponent, Slider
    );

    var slider = TestUtils.findRenderedDOMComponentWithTag(SliderInstance, 'input');

    it("state change", function () {
      TestUtils.Simulate.change(slider, { target: { value: 50 } });
      assert(renderedComponent.state.value === 50 );
    });

    it("state is numeric", function () {
      TestUtils.Simulate.change(slider, { target: { value: "50" } });
      assert(renderedComponent.state.value === 50 );
    });

  });

  it("server accepts", function () {
    assert(api.isDone() );
  });

});
