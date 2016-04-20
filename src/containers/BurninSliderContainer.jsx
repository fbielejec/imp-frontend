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

  getInitialState: function() {
    return {
      value: 1
    };
  },

  componentDidMount: function() {
     server.putSetting(server.settings.burnin, this.state.value);
  },

  handleChange: function(event) {
    this.setState({
      value: Number(event.target.value)
    });
    server.putSetting(server.settings.burnin, event.target.value);
  },

  render: function() {
    return (
      <Slider
        label={"burn-in"}
        maxValue={this.props.maxValue}
        handleChange={this.handleChange}
        value={this.state.value} />
    );
  }
});


module.exports = BurninSliderContainer;
