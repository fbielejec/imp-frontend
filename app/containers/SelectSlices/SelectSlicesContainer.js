/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import { settings, putSetting} from 'helpers/server'
import {Selector} from 'components';

//---MODULE EXPORTS---//

const SelectSlicesContainer = React.createClass({

  PropTypes : {
    values: PropTypes.array.isRequired
  },

  getInitialState: function() {
    return ({value: this.props.values[0]})
  },

  componentDidMount: function() {
     putSetting( settings.nslices, this.state.value);
  },

  handleChange: function(event) {
    this.setState({value: Number(event.target.value)});
     putSetting( settings.nslices, Number(event.target.value));
  },

  render: function() {
    return (
      <Selector
        values={this.props.values}
        handleChange={this.handleChange}/>
    );
  }

});

 export default SelectSlicesContainer
