var React = require('react');
var PropTypes = React.PropTypes;
var FileInput = require('react-file-input');
var server = require('../utils/server.js');
// var LoadTrees = require('../components/LoadTrees');
 var SelectAttributes = require('../components/SelectAttributes');

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

  console.log(self.state);

          });
        });

      }

    }, //END: handleChange

  render: function() {
    return (
      <div>
      <form>
        <FileInput
          name="Trees file"
          accept=".tree,.trees"
          placeholder="Load trees..."
          className="btn btn-lg btn-success"
          onChange={this.handleChange}/>
      </form>

      <div>
        {this.state.treesLoaded ?
          [
          <SelectAttributes attributes={this.state.attributes}/>,
            <p>REMAINING COMPONENTS</p>
          ]
        : null}
      </div>
        </div>
    );
  }

});

  // <SelectAttributes attributes={['Apple', 'Banana', 'Cranberry']}/>,

module.exports = LoadTreesContainer;
