/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
require('../styles/slices-slider.css');
var server = require('../utils/server.js');

//---MODULE EXPORTS---//

var Slider = React.createClass({

  propTypes: {
    maxValue: React.PropTypes.number.isRequired,
    value: React.PropTypes.number.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    label: React.PropTypes.string.isRequired
  },

  render: function() {
    var min=0;
    var step=1;
    return (
      <div className="wrapper">
        <input
          type="range"
          id="slider"
          min={min}
          max={this.props.maxValue}
          step={step}
          value={this.props.value}
          onInput={this.props.handleChange}
          onChange={this.props.handleChange}
          />
        <span>
          {this.props.label}: {this.props.value}
        </span>
      </div>
    );
  }
});


module.exports = Slider;
