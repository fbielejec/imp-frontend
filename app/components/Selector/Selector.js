/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'
import {selector} from './styles.css'

//---MODULE EXPORTS---//

const Selector = React.createClass({

  propTypes: {
    values: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number,
  },

  getDefaultProps: function() {
    return {selectedIndex: 0}
  },

  render: function() {
    return (
      <select className={selector} onChange={this.props.handleChange} defaultValue={this.props.values[this.props.selectedIndex]}>
        {this.props.values.map(function(value, i) {
          return (
            <option key={i} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    );
  }//END:render

});

export default Selector
