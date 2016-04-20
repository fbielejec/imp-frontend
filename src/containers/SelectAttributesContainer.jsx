/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;

var server = require('../utils/server.js');
var Selector = require('../components/Selector');

//---MODULE EXPORTS---//

var SelectAttributesContainer = React.createClass({

  propTypes: {
    attributes: PropTypes.array.isRequired
  },

  getInitialState: function() {
    return ({value: this.props.attributes[0]})
  },

  componentDidMount: function() {
    server.putSetting(server.settings.attribute, this.state.value);
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
    server.putSetting(server.settings.attribute, event.target.value);
  },

  render: function() {
    return (
      <Selector
        values={this.props.attributes}
        handleChange={this.handleChange}/>
    );
  }

});

module.exports = SelectAttributesContainer;
