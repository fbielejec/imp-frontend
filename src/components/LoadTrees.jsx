/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var FileInput = require('react-file-input');
var server = require('../utils/server.js');

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

// TODO: path to file on disk
    var file = event.target.files[0];
    if (!file) {
      return;
    }

   var tmppath = URL.createObjectURL(file);
       this.setState({
         treesfile: tmppath
       });

server.putSetting(server.treesfile, tmppath);

  //   var reader = new FileReader();
  //
  //   reader.onload = function(e) {
  //
  //     var contents = reader.result;
  //     this.setState({
  //       treesfile: contents
  //     });
  //
  //     server.putSetting(server.treesfile, contents);
  //
  // }.bind(this);
  //
  // reader.readAsText(file);
},

render: function() {

  return (
    <form>
      <FileInput
        name="Trees file"
        accept=".tree,.trees"
        placeholder="Load trees..."
        className="btn btn-lg btn-success"
        onChange={this.handleChange} />
    </form>
  )

},
});

module.exports = LoadTrees;
