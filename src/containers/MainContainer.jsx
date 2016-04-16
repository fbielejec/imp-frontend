var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var LoadTrees = require('../components/LoadTrees');
var SelectAttributesContainer = require('./SelectAttributesContainer');
var BurninSliderContainer = require('./BurninSliderContainer');
var SelectSlicesContainer = require('./SelectSlicesContainer');

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      // TODO: debugging
      treesLoaded: false,
      // treesLoaded: true,
      attributes: [],
      ntrees: 1
    };
  },//END: getInitialState

  handleChange: function(event) {

    event.preventDefault();

    var file = event.target.files[0];
    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    var self = this;

    reader.onload = function(e) {
      var content = e.target.result;

      $.when(server.putTrees(content)).done(function() {
        // chaining multiple AJAX calls
        var attributes_call = server.getAttributes();
        var ntrees_call = server.getnTrees();

        $.when(attributes_call, ntrees_call).done(function(attributes, ntrees) {
          self.setState({
            treesLoaded: true,
            attributes: attributes[0],
            ntrees: ntrees[0]
          });
        });
      });
    }//END: onLoad
  }, //END: handleChange

  render: function() {
    return (
      <div
        className="jumbotron col-sm-12 text-center"
        style={{background: "transparent"}}>

        <div className='col-sm-8 col-sm-offset-2'>
          <LoadTrees handleChange={this.handleChange}/>
        </div>

        {this.state.treesLoaded ?
          [
            <div
              key={0}
              className='col-sm-8 col-sm-offset-2'
              style={{marginTop: '25px'}}>
              <SelectAttributesContainer attributes={this.state.attributes}/>
            </div>
            ,

            <div
              key={1}
              className='col-sm-8 col-sm-offset-2'
              style={{marginTop: '25px'}}>
              <BurninSliderContainer maxValue={this.state.ntrees - 1}/>
            </div>
            ,

            <div
              key={2}
              className='col-sm-8 col-sm-offset-2'
              style={{marginTop: '25px'}}>
              <SelectSlicesContainer/>
            </div>

          ]
          : null}

        </div>
      );
    }

  });

  module.exports = MainContainer;
