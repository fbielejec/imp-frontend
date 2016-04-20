/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var nock = require("nock");
var $ = require('jquery');


var DecimalDateContainer = require('../src/containers/DecimalDateContainer');
var DecimalDate = require('../src/components/DecimalDate');


var renderedComponent;
describe('DecimalDateContainer tests', function () {

  before(function(done) {
    var api = nock("http://localhost:8080")
             .persist()
             .get("/mrsd")
             .reply(200, "SUCCESS");

    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <DecimalDateContainer />
    );
    done();
  });

  it("renders a view", function () {
    var DecimalDateInstances = TestUtils.scryRenderedComponentsWithType(
      renderedComponent, DecimalDate
    );

    assert(DecimalDateInstances.length == 1);
  });

  it("user action", function () {
    var DecimalDateInstance = TestUtils.findRenderedComponentWithType(
      renderedComponent, DecimalDate
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(DecimalDateInstance, 'input');

    // event is a string
    TestUtils.Simulate.change(input, { target: { value: '2001.3' } });

    // container converts to Number
    assert(renderedComponent.state.value == 2001.3 );
  });

});
