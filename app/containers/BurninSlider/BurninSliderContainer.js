/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
// require('../styles/slices-slider.css');
import { settings, putSetting} from 'helpers/server'
import {Slider} from 'components'

//---MODULE EXPORTS---//
const BurninSliderContainer = React.createClass({

      PropTypes: {
        maxValue: React.PropTypes.number.isRequired
      },

      getInitialState() {
        return {
          value: 1
        };
      },

      componentDidMount() {
        putSetting( settings.burnin, this.state.value);
      },

      handleChange(event) {
        this.setState({
          value: Number(event.target.value)
        });
        putSetting( settings.burnin, Number(event.target.value));
      },

  render() {
    return (
      <Slider
        label={""}
        maxValue={this.props.maxValue}
        step={1}
        handleChange={this.handleChange}
        value={this.state.value} />
    );
  }
});

 export default BurninSliderContainer;
