/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');

//---MODULE EXPORTS---//

// https://jsfiddle.net/faria/yw6q3s9L/

var SlicesSlider = React.createClass({

  propTypes: {
    initialValue: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return {
      value: this.props.initialValue
    };
  },

  handleOnChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    var min=1;
    var max=50;
    var step=1;
    return (
      <div id="slider">
        <div>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={this.state.value}
            onInput={this.handleOnChange }
            onChange={this.handleOnChange }
            />
          <span>
            {this.state.value}
          </span>
        </div>
      </div>
    );
  }
});


module.exports = SlicesSlider;
