/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var FileInput = require('react-file-input');

//---MODULE EXPORTS---//

// TODO: upload to server as binary string:
// http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api

var LoadTrees = React.createClass({

  getInitialState: function() {
    return {
      treesfile: null,
    };
  },

  handleChange: function(event) {

    var file = event.target.files[0];
    if (!file) {
      return;
    }

    var reader = new FileReader();

    reader.onload = function(e) {

      var contents = reader.result;
      this.setState({
        treesfile: contents
      });

    }.bind(this);

    reader.readAsText(file);

  },

  render: function() {

    return (
      <form>
        <FileInput
          name="Trees file"
          accept=".tree,.trees"
          placeholder="Browse..."
          className="btn btn-lg btn-success"
          onChange={this.handleChange} />
      </form>
    )

  },
});

module.exports = LoadTrees;
