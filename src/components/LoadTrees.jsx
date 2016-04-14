/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var FileInput = require('react-file-input');
var server = require('../utils/server.js');

//---MODULE EXPORTS---//

var LoadTrees = React.createClass({

  getInitialState: function() {
    return {treesfile: null};
  },//END: getInitialState

  handleChange: function(event) {

    event.preventDefault();

    var file = event.target.files[0];
    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');

    reader.onload = function(e) {
      var content = e.target.result;
       server.putTrees(content);
    }

  }, //END: handleChange

  render: function() {

    return (
      <form>
        <FileInput
          name="Trees file"
          accept=".tree,.trees"
          placeholder="Load trees..."
          className="btn btn-lg btn-success"
          onChange={this.handleChange}/>
      </form>
    )

  } //END: render
});

module.exports = LoadTrees;
