/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var DecimalDate = require('../components/DecimalDate');

//---MODULE EXPORTS---//

var DecimalDateContainer = React.createClass({

  getInitialState: function() {
    var date = new Date();
    var decimalDate = date.getFullYear() + (date.getMonth()/12);
    return {value: decimalDate};
  },

  componentDidMount: function() {
    // var date = new Date();
    // var decimalDate = date.getFullYear() + (date.getMonth()/12);
    // this.setState({value: decimalDate});
    server.putSetting(server.settings.mrsd, this.state.value);
  },

  handleChange: function(event) {

    // prevent from typing non-numeric values
    var nonNumericRegex = /[^0-9.]+/g;
    this.setState({value:
      Number(
        event.target.value
        .replace(nonNumericRegex, "")
      )
    });
  },

  handleBlur: function(event) {
    // when input looses focus send to server
    this.handleChange(event);
    server.putSetting(server.settings.mrsd, this.state.value);
  },

  render: function() {
    return(
      <DecimalDate
        value={this.state.value}
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}/>
    );
  }

});

module.exports = DecimalDateContainer;
