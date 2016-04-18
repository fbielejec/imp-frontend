/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var FileInput = require('../react-file-input/react-file-input');

//---MODULE EXPORTS---//

// TODO: loading indicator
// http://bootsnipp.com/snippets/featured/loading-button
var LoadTrees = React.createClass({

  propTypes : {
		handleChange : React.PropTypes.func.isRequired
	}, // END: propTypes

    render: function() {

      return (
          <FileInput
            name="Trees file"
            accept=".tree,.trees"
            placeholder="Load trees..."
            className="btn btn-lg btn-success"
            onChange={this.props.handleChange}/>
      )} //END: render
  });

  module.exports = LoadTrees;
