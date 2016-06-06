/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import {container, loading } from './styles.css'

const Loading = React.createClass({

      propTypes: {
        text: PropTypes.string,
        speed: PropTypes.number
      },

      getDefaultProps: function() {
        return {
          text: "Loading",
          speed: 300
        };

      },

      getInitialState() {
        this.originalState = this.props.text;
        return {
          text: this.originalState
        };
      },

      componentDidMount() {

        var stopper = this.originalState + "..."
        this.interval = setInterval(function() {

          if (this.isMounted()) {
            if (this.state.text === stopper) {

              this.setState({
                text: this.originalState
              });

            } else {

              this.setState({
                text: this.state.text + "."
              });

            }
          }

        }.bind(this), this.props.speed);

      },

      componentWillMount() {
        clearInterval(this.interval);
      },

  render() {
    return (
      <div className={container}>
        <p className={loading}>
          {this.state.text}
        </p>
      </div>
    );
  }

});

export default Loading
