/**
* @fbielejec
*/

var React = require('react');
var PropTypes = React.PropTypes;

var SelectAttributes = React.createClass({

  handleChange: function(event) {
    this.setState({value: event.target.value});
    // console.log(event.target.value);
  },//END: handleChange


  render: function() {
    return (
      <select onChange={this.handleChange}>
        {this.props.attributes.map(function(attribute, i) {
          return (
            <option key={i} value={attribute}>
              {attribute}
            </option>
          );
        })}
      </select>
    );
  }//END:render

});

module.exports = SelectAttributes;
