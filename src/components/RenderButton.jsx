var React = require('react');
var PropTypes = React.PropTypes;

var RenderButton = React.createClass({

  propTypes : {
		handleChange : React.PropTypes.func.isRequired
	}, // END: propTypes

  render: function() {
    return (
  <button type='button' className='btn btn-lg btn-danger' onClick={this.props.handleChange}>Render</button>
    );
  }

});

module.exports = RenderButton;
