import React, {PropTypes} from 'react';
import { container, innerContainer, header, link } from './styles.css'
import {Button} from 'components'

/**
 * @fbielejec
 */
const MainContainer = React.createClass({

  render () {
    return (
      <div className={container}>

            <div className={header}>
              <h2 >
                {'Imp'}
              </h2>
                <Button className={link} name={"Home"}/>
            </div>


        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  },
})

export default MainContainer
