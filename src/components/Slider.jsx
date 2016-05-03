/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
require('../styles/Slider.css');

//---MODULE EXPORTS---//

var Slider = React.createClass({

  propTypes: {
    label: PropTypes.string,
    maxValue: PropTypes.number,
    handleChange: PropTypes.func,
    value: PropTypes.number
  },

  render: function() {
    var min=0;
    var step=1;
    return (
          <div className="row">
              <div className="col-lg-3">
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
              </div>
              <div className="col-lg-2">
                <span id="span">
                  {this.props.label}: {this.props.value}
                </span>
              </div>
          </div>
    );
  }
});


module.exports = Slider;
