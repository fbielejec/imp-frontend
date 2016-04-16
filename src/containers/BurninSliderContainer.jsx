/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
require('../styles/slices-slider.css');
var server = require('../utils/server.js');
var Slider = require('../components/Slider');

//---MODULE EXPORTS---//

var BurninSliderContainer = React.createClass({

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

  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
    server.putSetting(server.settings.burnin, event.target.value);
  },

  render: function() {
    var min=0;
    var step=1;

return (
<Slider maxValue={this.props.maxValue} handleChange={this.handleChange} value={this.state.value} label={"burnin"}/>
);

    // return (
    //   <div className="wrapper">
    //     <input
    //       type="range"
    //       id="slider"
    //       min={min}
    //       max={this.props.maxValue}
    //       step={step}
    //       value={this.state.value}
    //       onInput={this.handleOnChange}
    //       onChange={this.handleOnChange}
    //       />
    //     <span>
    //       burnin: {this.state.value}
    //     </span>
    //   </div>
    // );
  }
});


module.exports = BurninSliderContainer;
