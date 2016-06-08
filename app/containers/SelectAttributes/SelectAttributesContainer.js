/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'
import { Selector } from 'components'
import { settings, putSetting} from 'helpers/server'

// var server = require('../utils/server.js');

//---MODULE EXPORTS---//

const SelectAttributesContainer = React.createClass({

  PropTypes: {
     attributes: PropTypes.array.isRequired
   },

  //  getInitialState() {
  //    return ({value: this.props.attributes[0]})
  //  },

   componentDidMount() {
   putSetting( settings.attribute, this.props.attributes[0]);
   },

   handleChange(event) {
    //  this.setState({value: event.target.value});
      putSetting( settings.attribute, event.target.value);
   },


  render() {
    return (
        <Selector
              values={this.props.attributes}
              handleChange={this.handleChange}
        />
    );
  }

});

export default SelectAttributesContainer;
