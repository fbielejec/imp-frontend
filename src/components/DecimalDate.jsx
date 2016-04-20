/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
require('../styles/decimal-date.css');

//---MODULE EXPORTS---//

var DecimalDate = React.createClass({

  propTypes: {
    value:  PropTypes.number.isRequired,
    handleChange:  PropTypes.func.isRequired,
    handleBlur:  PropTypes.func.isRequired
  },

  render: function() {
    var step = 0.01;
    return (
      <input
        type="number"
        step={step}
        value={this.props.value}
        onChange={this.props.handleChange}
        onBlur={this.props.handleBlur}/>
    );
  }

});

module.exports = DecimalDate;
