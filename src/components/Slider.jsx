/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
// require('../styles/Slider.css');

var styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  slider: {
    border: '#ccc',
    padding: 10,
    minHeight: 50,
    maxWidth: 300
  },
  span: {
    // border: '#ccc',
    padding: 10,
    alignItems: 'center',
    // minHeight: 50,
    // maxWidth: 300
  }
};

//---MODULE EXPORTS---//

var Slider = React.createClass({

  propTypes : {
    label: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    handleChange: PropTypes.func
  },

  getDefaultProps : function() {
    var minValue = 0.0;
    var maxValue = 1.0;
    var value = minValue;
    var step = (maxValue - minValue) / 2;

    return {
      minValue: minValue, //
      maxValue: maxValue, //
      value: value, //
      step: step //
    };
  },

  render: function() {
    return (
      <div style={styles.row}>
        <input
          style={styles.slider}
          type="range"
          id="slider"
          min={this.props.minValue}
          max={this.props.maxValue}
          step={this.props.step}
          value={this.props.value}
          onInput={this.props.handleChange}
          onChange={this.props.handleChange}
          />

        <span id="span" style={styles.span}>
          {this.props.label}:{this.props.value}
        </span>

      </div>
    );
  }
});


module.exports = Slider;
