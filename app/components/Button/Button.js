/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'

//---MODULE EXPORTS---//

const Button = React.createClass({

  PropTypes: {
    name : PropTypes.string,
  },

  render: function() {
    return (
          <button className={this.props.className} type='button'>{this.props.name}</button>
    );
  }

});

export default Button;
