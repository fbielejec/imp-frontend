/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
require('../styles/slices-slider.css');

//---MODULE EXPORTS---//

var BurninSlider = React.createClass({

  propTypes: {
    maxValue: React.PropTypes.number.isRequired
  },

  componentDidMount: function() {
    //  console.log(this.props.maxValue);
  },

  getInitialState: function() {
    return {
      value: 1
    };
  },

  handleOnChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    var min=0;
    var step=1;
    return (
        <div className="wrapper">
          <input
            type="range"
            id="slider"
            min={min}
            max={this.props.maxValue}
            step={step}
            value={this.state.value}
            onInput={this.handleOnChange}
            onChange={this.handleOnChange}
            />
          <span>
          burnin: {this.state.value}
          </span>
        </div>
    );
  }
});


module.exports = BurninSlider;
