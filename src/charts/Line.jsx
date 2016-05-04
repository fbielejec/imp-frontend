var React = require('react');
var PropTypes = React.PropTypes;

var Line = React.createClass({

  propTypes : {
    path :  PropTypes.string.isRequired,
    color :  PropTypes.string,
    opacity: PropTypes.number,
    strokeWidth :  PropTypes.number
  },

  getDefaultProps: function() {
    return {
      color: 'black', //
      opacity: 1.0,
      strokeWidth: 2 //
    }
  },

  render: function() {
    return (
      <path
        d={this.props.path}
        stroke={this.props.color}
        opacity={this.props.opacity}
        strokeWidth={this.props.strokeWidth}
        fill="none"/>
    );
  }

});

module.exports = Line;
