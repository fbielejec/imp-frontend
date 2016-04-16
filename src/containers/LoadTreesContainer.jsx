var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var LoadTrees = require('../components/LoadTrees');
var SelectAttributes = require('../components/SelectAttributes');
var SlicesSlider = require('../components/SlicesSlider');

var LoadTreesContainer = React.createClass({

  getInitialState: function() {
    return {
      treesLoaded: false,
      attributes: []
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

      server.putTrees(content)
      .then(
        function() {
          server.getAttributes().done(function(attributes) {

            self.setState({
              treesLoaded: true,
              attributes: attributes
            });

            // console.log(self.state);

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
              <div key={0}
                className='col-sm-8 col-sm-offset-2'
                style={{marginTop: '25px'}}>
                <SelectAttributes attributes={this.state.attributes}/>
              </div>
              ,

              <div key={1}
                className='col-sm-8 col-sm-offset-2'
                style={{marginTop: '25px'}}>
                <SlicesSlider/>
              </div>

            ]
            : null}

          </div>
        );
      }

    });

    module.exports = LoadTreesContainer;
