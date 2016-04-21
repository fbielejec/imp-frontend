var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var RenderButton = React.createClass({

  render: function() {
    return (
    <Link to='/render'>
      <button
        type='button'
        className='btn btn-lg btn-danger'
        onClick={this.handleChange}>Render</button>
    </Link>
    );
  }

});

module.exports = RenderButton;
