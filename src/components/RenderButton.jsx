var React = require('react');
var PropTypes = React.PropTypes;

var RenderButton = React.createClass({

  propTypes : {
    handleChange : PropTypes.func.isRequired
  },

  render: function() {
    return (
      <button
        type='button'
        className='btn btn-lg btn-danger'
        onClick={this.props.handleChange}>Render</button>
    );
  }

});

module.exports = RenderButton;
