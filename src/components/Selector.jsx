/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;

//---MODULE EXPORTS---//

var Selector = React.createClass({

  propTypes: {
    values: React.PropTypes.array.isRequired,
    handleChange: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <select onChange={this.props.handleChange}>
        {this.props.values.map(function(value, i) {
          return (
            <option key={i} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    );
  }//END:render

});

module.exports = Selector;
