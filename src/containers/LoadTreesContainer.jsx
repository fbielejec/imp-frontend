var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var LoadTrees = require('../components/LoadTrees');
var SelectAttributesContainer = require('./SelectAttributesContainer');
var BurninSlider = require('../components/BurninSlider');

var LoadTreesContainer = React.createClass({

  getInitialState: function() {
    return {
      treesLoaded: false,
      attributes: [],
      ntrees: 0
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

          // console.log(attributes[0]);
          // console.log(ntrees[0]);

          self.setState({
            treesLoaded: true,
            attributes: attributes[0],
            ntrees: ntrees[0]
          });

        });

      });


    }


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
              <BurninSlider maxValue={this.state.ntrees - 1}/>
            </div>

          ]
          : null}

        </div>
      );
    }

  });

  module.exports = LoadTreesContainer;
