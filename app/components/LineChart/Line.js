import React, {PropTypes} from 'react';

const Line = React.createClass({

  PropTypes : {
    path:  PropTypes.string.isRequired,
    color:  PropTypes.string,
    opacity: PropTypes.number,
    strokeWidth:  PropTypes.string
  },

  getDefaultProps() {
    return {
      color: 'black', //
      opacity: 1.0,
      strokeWidth: 2 //
    }
  },

  render() {
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

 export default Line
