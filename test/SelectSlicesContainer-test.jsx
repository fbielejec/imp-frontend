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
var SelectSlicesContainer = require('../src/containers/SelectSlicesContainer');
var Selector = require('../src/components/Selector');

var api;
var renderedComponent;
describe('SelectSlicesContainer tests', function () {

  before(function(done) {
    api = nock("http://localhost:8080")
            .persist()
            .put("/settings", {id: server.settings.nslices})
            .reply(200, {
            });

    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <SelectSlicesContainer values = {[10,20,30,40,50]}/>
    );
    done();
  });

  it("renders a view", function () {
      assert(TestUtils.isCompositeComponent(renderedComponent));
  });

  it("user action", function () {
    var SelectorInstance = TestUtils.findRenderedComponentWithType(
      renderedComponent, Selector
    );

    var values = SelectorInstance.props.values;

    var select = TestUtils.findRenderedDOMComponentWithTag(SelectorInstance, 'select');
    TestUtils.Simulate.change(select, { target: { value: values[0] } });

    assert(renderedComponent.state.value == values[0]);
  });

  it("server accepts", function () {
    assert(api.isDone() );
  });

});
