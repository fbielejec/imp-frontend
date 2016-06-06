/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import {Loading} from 'components'

//---MODULE EXPORTS---//

const LoadingContainer = React.createClass({

      propTypes: {
        busy: PropTypes.bool.isRequired
      },

      render() {
        return ( this.props.busy ? <Loading/> : null);
      }

    });

    export default LoadingContainer
