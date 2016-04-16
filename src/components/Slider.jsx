/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
require('../styles/slices-slider.css');

//---MODULE EXPORTS---//

var Slider = React.createClass({

  propTypes: {
    maxValue: React.PropTypes.number,
    value: React.PropTypes.number,
    handleChange: React.PropTypes.func,
    label: React.PropTypes.string
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
