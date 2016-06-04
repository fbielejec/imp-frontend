/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import { dateInput } from './styles.css'

//---MODULE EXPORTS---//

const DecimalDate = React.createClass({

  PropTypes: {
    value:  PropTypes.number.isRequired,
    handleChange:  PropTypes.func.isRequired,
    handleBlur:  PropTypes.func.isRequired
  },

  render() {
    const step = 0.01;
    return (
      <input
        type="number"
        className={dateInput}
        step={step}
        value={this.props.value}
        onChange={this.props.handleChange}
        onBlur={this.props.handleBlur}/>
    );
  }

});

 export default DecimalDate
