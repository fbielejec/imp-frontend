import React, {PropTypes} from 'react';

const Area = React.createClass({

  PropTypes : {
    path:  PropTypes.string.isRequired,
    fill:  PropTypes.string,
    opacity: PropTypes.number
  },

  getDefaultProps() {
    return {
      fill: 'black', //
      opacity: 1.0,
    }
  },

  render() {
    return (
      <path
        d={this.props.path}
        fill={this.props.fill}
        opacity={this.props.opacity}
        />
    );
  }

});

 export default Area
