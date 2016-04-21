/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var nock = require("nock");
var $ = require('jquery');

var server = require('../src/utils/server');
var SelectAttributesContainer = require('../src/containers/SelectAttributesContainer');
var Selector = require('../src/components/Selector');

var api;
var renderedComponent;
describe('SelectAttributesContainer tests', function () {

  before(function(done) {
    api = nock("http://localhost:8080")
    .persist()
    .put("/settings", {id: server.settings.attribute})
    .reply(200, {
    });

    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <SelectAttributesContainer attributes = {['location1', 'location2']} />
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

    var select = TestUtils.findRenderedDOMComponentWithTag(SelectorInstance, 'select');
    TestUtils.Simulate.change(select, { target: { value: 'location2' } });

    assert(renderedComponent.state.value == 'location2' );
  });

  it("server accepts", function () {
    assert(api.isDone());
  });

});
