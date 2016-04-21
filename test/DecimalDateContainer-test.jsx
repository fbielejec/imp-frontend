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
var DecimalDateContainer = require('../src/containers/DecimalDateContainer');
var DecimalDate = require('../src/components/DecimalDate');

var api;
var renderedComponent;
describe('DecimalDateContainer tests', function () {

  before(function(done) {
    api = nock("http://localhost:8080")
    .persist()
    .put("/settings", {id: server.settings.mrsd})
    .reply(200, {
    });

    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <DecimalDateContainer />
    );
    done();
  });

  it("renders a view", function () {
    assert(TestUtils.isCompositeComponent(renderedComponent));
  });

  it("user action", function () {
    var DecimalDateInstance = TestUtils.findRenderedComponentWithType(
      renderedComponent, DecimalDate
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(DecimalDateInstance, 'input');

    it("ignores non-numeric values", function () {
      TestUtils.Simulate.change(input, { target: { value: 'FUBAR' } });
      assert(renderedComponent.state.value == 0 );
    });

    // here we simulate a change
    TestUtils.Simulate.change(input, { target: { value: '2002.5' } });
    assert(renderedComponent.state.value == 2002.5 );

    // here we simulate a blur
    TestUtils.Simulate.blur(input, { target: { value: '2001.3' } });
    assert(renderedComponent.state.value == 2001.3 );
  });

  it("server accepts", function () {
    assert(api.isDone() );
  });

});
