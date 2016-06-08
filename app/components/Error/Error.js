/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'
import {container, error} from './styles.css'

//---MODULE EXPORTS---//

const Error = React.createClass({

  PropTypes: {
    message : PropTypes.string,
  },

  render: function() {
    return (
      <div className={container}>
        <p className={error}>
          {this.props.message}
        </p>
      </div>
    );
  }

});

export default Error;
