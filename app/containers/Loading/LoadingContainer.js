/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import {Loading} from 'components'

//---MODULE EXPORTS---//

const LoadingContainer = React.createClass({

      propTypes: {
        isBusy: PropTypes.bool.isRequired
      },

      render() {
        return (
          <div>
          {this.props.isBusy ? <Loading/> : null}
            </div>
      );
          }

    });

    export default LoadingContainer
