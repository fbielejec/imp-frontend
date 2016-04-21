/**
* @fbielejec
*/

"use strict";

var React = require('react');
var chai = require('chai');
var assert = chai.assert;
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var RenderButton = require('../src/components/RenderButton');
var RenderPanelContainer = require('../src/containers/RenderPanelContainer');

var renderedComponent;
describe('RenderButtonLink tests', function () {

  before(function(done) {
    require('./setup.js');

    renderedComponent = TestUtils.renderIntoDocument(
      <RenderButton />
    );
    done();
  });

  it("renders a view", function () {
        assert(TestUtils.isCompositeComponent(renderedComponent));
  });

// TODO: test Link
// https://github.com/reactjs/react-router/blob/v0.13.3/docs/guides/testing.md
  it("test Link", function () {

    var button = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'button');
    TestUtils.Simulate.click(button);

    // console.log(TestUtils.scryRenderedComponentsWithType(renderedComponent, RenderButton).length);


  });

});
