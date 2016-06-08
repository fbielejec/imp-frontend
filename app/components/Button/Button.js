/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react'

//---MODULE EXPORTS---//

const Button = React.createClass({

  PropTypes: {
    name : PropTypes.string,
    className : PropTypes.string,
    handleClick : PropTypes.func,
  },

  render: function() {
    return (
          <button className={this.props.className} onClick={this.props.handleClick}>{this.props.name}</button>
    );
  }

});

export default Button;
