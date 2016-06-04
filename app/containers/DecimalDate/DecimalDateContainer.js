/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import {settings, putSetting} from 'helpers/server'
import {round} from 'helpers/utils'
import {DecimalDate} from 'components';

//---MODULE EXPORTS---//

const DecimalDateContainer = React.createClass({

      PropTypes: {
      },

      getInitialState() {
        const date = new Date();
        const decimalDate = round(date.getFullYear() + (date.getMonth() / 12), 2);
        return {
          value: decimalDate
        };
      },

      componentDidMount() {
        putSetting(settings.mrsd, this.state.value);
      },

      handleChange(event) {
        // prevent from typing non-numeric values
        const nonNumericRegex = /[^0-9.]+/g;
        this.setState({
          value: Number(
            event.target.value
            .replace(nonNumericRegex, "")
          )
        });
      },

      handleBlur(event) {
        // when input looses focus send to server
        this.handleChange(event);
        putSetting(settings.mrsd, this.state.value);
      },

  render() {
    return(
      <DecimalDate
        value={this.state.value}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}/>
    );
  }

});

export default DecimalDateContainer;
