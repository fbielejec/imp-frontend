/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'
import { FileInput } from 'components'
import { button, container } from './styles.css'

//---MODULE EXPORTS---//

var LoadTrees = React.createClass({

  PropTypes : {
    handleChange : PropTypes.func.isRequired
  },

  render() {
    return (
      <div className={container}>
      <FileInput
        name="Trees file"
        accept=".tree,.trees"
        placeholder="Load trees..."
        className={button}
        onChange={this.props.handleChange}/>
      </div>
    )}
  });

  module.exports = LoadTrees;
