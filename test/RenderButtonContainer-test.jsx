/**
* @fbielejec
*/

"use strict";

var React = require('react');
var chai = require('chai');
var assert = chai.assert;
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var RenderButtonContainer = require('../src/containers/RenderButtonContainer');

var renderedComponent;
describe('RenderButtomContainer tests', function () {

  before(function(done) {
    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <RenderButtonContainer />
    );
    done();
  });

  it("renders a view", function () {
        assert(TestUtils.isCompositeComponent(renderedComponent));
  });

// TODO: focus on Render tab

  // it("user action", function () {
  // });

});
