/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;

var utils = require('../utils/utils');
var server = require('../utils/server.js');
var DecimalDate = require('../components/DecimalDate');


//---MODULE EXPORTS---//

var DecimalDateContainer = React.createClass({

  getInitialState: function() {
    var date = new Date();
    var decimalDate = utils.round(date.getFullYear() + (date.getMonth()/12), 2);


console.log(decimalDate);

    return {value: decimalDate};
  },

  componentDidMount: function() {
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
