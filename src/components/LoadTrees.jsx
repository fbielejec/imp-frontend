/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var FileInput = require('react-file-input');

var LoadTrees = React.createClass({

  propTypes : {
		handleChange : React.PropTypes.func.isRequired
	}, // END: propTypes

    render: function() {

      return (
        <form>
          <FileInput
            name="Trees file"
            accept=".tree,.trees"
            placeholder="Load trees..."
            className="btn btn-lg btn-success"
            onChange={this.props.handleChange}/>
        </form>
      )} //END: render
  });

  module.exports = LoadTrees;
