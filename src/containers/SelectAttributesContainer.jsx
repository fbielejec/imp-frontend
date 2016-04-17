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
    attributes: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return ({value: ""})
  }, //END: getInitialState

  handleChange: function(event) {
    this.setState({value: event.target.value});
    server.putSetting(server.settings.attribute, event.target.value);
  },//END: handleChange

  render: function() {
    return (
      <Selector
        values={this.props.attributes}
        handleChange={this.handleChange}/>
    );
  }//END:render

});

module.exports = SelectAttributesContainer;
