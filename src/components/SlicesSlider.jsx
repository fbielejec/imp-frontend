/**
* @fbielejec
*/

//---MODULE IMPORTS---//
var React = require('react');
require('../styles/slices-slider.css');

//---MODULE EXPORTS---//

var SlicesSlider = React.createClass({

  propTypes: {
    initialValue: React.PropTypes.number
  },

  getInitialState: function() {
    return {
      value: 1//this.props.initialValue
    };
  },

  handleOnChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    var min=1;
    var max=50;
    var step=1;
    return (
        <div className="wrapper">
          <input
            type="range"
            id="slider"
            min={min}
            max={max}
            step={step}
            value={this.state.value}
            onInput={this.handleOnChange}
            onChange={this.handleOnChange}
            />
          <span>
          number of slices:  {this.state.value}
          </span>
        </div>
    );
  }
});


module.exports = SlicesSlider;
