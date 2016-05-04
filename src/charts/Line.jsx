var React = require('react');
var PropTypes = React.PropTypes;

var Line = React.createClass({

  propTypes : {
    path :  PropTypes.string,
    color :  PropTypes.string,
    strokeWidth :  PropTypes.number
  },

  getDefaultProps: function() {
    return {
      path: '', //
      color: 'black', //
      strokeWidth: 2 //
    }
  },

  render: function() {
    return (
      <path
        d={this.props.path}
        stroke={this.props.color}
        strokeWidth={this.props.strokeWidth}
        fill="none"/>
    );
  }

});

module.exports = Line;
