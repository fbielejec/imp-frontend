/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import { rowDisplay, slider, span } from './styles.css'

//---MODULE EXPORTS---//

const Slider = React.createClass({

  PropTypes : {
    label: PropTypes.string,
    minValue: PropTypes.number,
    maxValue: PropTypes.number.isRequired,
    value: PropTypes.number,
    step: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
  },

  getDefaultProps() {
    const minValue = 0.0;
    const maxValue = 1.0;
    const value = minValue;
    const step = (maxValue - minValue) / 2;

    return {
      minValue: minValue, //
      maxValue: maxValue, //
      value: value, //
      step: step //
    };
  },

  render() {
    return (
      <div className={rowDisplay}>
        <input
          className={slider}
          type="range"
          id="slider"
          min={this.props.minValue}
          max={this.props.maxValue}
          step={this.props.step}
          value={this.props.value}
          onInput={this.props.handleChange}
          onChange={this.props.handleChange}
          />

        <span id="span" className = {span}>
          {this.props.label} {this.props.value}
        </span>

      </div>
    );
  }
});


module.exports = Slider;
