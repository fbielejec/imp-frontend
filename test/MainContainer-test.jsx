/**
* @fbielejec
*/

var React = require('react');
var assert = require('chai').assert;
var TestUtils = require('react-addons-test-utils');
var nock = require("nock");
// var http = require("http");

var MainContainer = require('../src/containers/MainContainer');
var LoadTrees = require('../src/components/LoadTrees');
var FileInput = require('../src/react-file-input/react-file-input');
// var SelectAttributesContainer = require('../src/containers/SelectAttributesContainer');
// var BurninSliderContainer = require('../src/containers/BurninSliderContainer');
// var SelectSlicesContainer = require('../src/containers/SelectSlicesContainer');
// var DecimalDateContainer = require('../src/containers/DecimalDateContainer');

var renderedComponent;
describe('MainContainer tests', function () {

  before(function(done) {
    renderedComponent = TestUtils.renderIntoDocument(
      <MainContainer />
    );
    done();
  });

  it("should exists", function () {
        assert(TestUtils.isCompositeComponent(renderedComponent));
  });


// http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/#.VxeRbeAvDmg

// http://javascriptplayground.com/blog/2013/08/mocking-web-requests/

// TODO: sends .trees server way
it("user action", function () {

  var api = nock("http://localhost:8080/")
            .put("/trees/")
            .reply(200, "SUCCESS");

var fileInput = TestUtils.findAllInRenderedTree(renderedComponent, function(comp) { return(comp.type == "text");});


var fs = require('fs') ;
var filename = "/home/filip/Dropbox/JavaScriptProjects/imp-frontend/public/WNV_small.trees";//process.argv[2];
var fakeF = fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  // console.log('OK: ' + filename);
  // console.log(data)
});

// console.log(fakeF);

// TestUtils.Simulate.change(fileInput, { target: { value: fakeF } });
//
// assert(renderedComponent.state.treesLoaded === true);
});



  // it("render a view", function () {
  //   var _LoadTrees = TestUtils.scryRenderedComponentsWithType(
  //     renderedComponent, LoadTrees
  //   );
  //
  //   // there should be exacly one LoadTrees button rendered at this point
  //   assert(_LoadTrees.length == 1);
  // });

  // it("change state", function () {
  //
  //   // change state
  //   renderedComponent.setState({
  //     treesLoaded: true,
  //   });
  //
  //   var _SelectAttributesContainer = TestUtils.scryRenderedComponentsWithType(
  //     renderedComponent, SelectAttributesContainer
  //   );
  //   assert(_SelectAttributesContainer.length == 1);
  //
  //   var _BurninSliderContainer = TestUtils.scryRenderedComponentsWithType(
  //     renderedComponent, BurninSliderContainer
  //   );
  //   assert(_BurninSliderContainer.length == 1);
  //
  //   var _SelectSlicesContainer = TestUtils.scryRenderedComponentsWithType(
  //     renderedComponent, SelectSlicesContainer
  //   );
  //   assert(_SelectSlicesContainer.length == 1);
  //
  //   var _DecimalDateContainer = TestUtils.scryRenderedComponentsWithType(
  //     renderedComponent, DecimalDateContainer
  //   );
  //   assert(_DecimalDateContainer.length == 1);
  //
  // });

});
