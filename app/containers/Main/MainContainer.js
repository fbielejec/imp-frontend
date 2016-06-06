/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { container, innerContainer, header, link } from './styles.css'
import {Button} from 'components'

//---MODULE EXPORTS---//

const MainContainer = React.createClass({

  render () {
    return (
      <div className={container}>

        <div className={header}>
          <h2 >
            {'Imp'}
          </h2>
          <Link to='/'>
            <Button className={link} name={"Home"}/>
          </Link>
        </div>

        <div className={innerContainer}>
          {this.props.children}
        </div>

      </div>
    )
  },
})

export default MainContainer
