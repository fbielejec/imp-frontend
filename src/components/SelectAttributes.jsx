/**
* @fbielejec
*/

var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');

var SelectAttributes = React.createClass({

  getInitialState: function() {
    return ({value: ""})
  }, //END: getInitialState

  handleChange: function(event) {
    this.setState({value: event.target.value});
    server.putSetting(server.settings.attribute, event.target.value);
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
