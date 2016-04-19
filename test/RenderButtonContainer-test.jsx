/**
* @fbielejec
*/

var React = require('react');
var chai = require('chai');
var assert = chai.assert;
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

// http://www.undefinednull.com/2015/05/03/react-tdd-example-unit-testing-and-building-a-react-component-with-jest-gulp-and-react-test-utils/

var RenderButtonContainer = require('../src/containers/RenderButtonContainer');
var RenderButton = require('../src/components/RenderButton');

var renderedComponent;
describe('RenderButtomContainer tests', function () {

  before(function(done) {
    require('./setup.js');
    renderedComponent = TestUtils.renderIntoDocument(
      <RenderButtonContainer />
    );
    done();
  });

  it("should exists", function () {
        assert(TestUtils.isCompositeComponent(renderedComponent));
  });

  it("renders a component", function () {

    var RenderButtonInstance = TestUtils.findRenderedComponentWithType(
      renderedComponent, RenderButton
    );

        assert(TestUtils.isCompositeComponent(RenderButtonInstance));
  });


// TODO: when clicked gets the settings from all (and sends server side);

  // it("user action", function () {
  // });

});
