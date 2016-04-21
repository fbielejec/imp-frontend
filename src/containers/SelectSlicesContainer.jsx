/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var Selector = require('../components/Selector');

//---MODULE EXPORTS---//

var SelectSlicesContainer = React.createClass({

  PropTypes : {
    values: PropTypes.array.isRequired
  },

  getInitialState: function() {
    return ({value: this.props.values[0]})
  },

  componentDidMount: function() {
    server.putSetting(server.settings.nslices, this.state.value);
  },

  handleChange: function(event) {
    this.setState({value: Number(event.target.value)});
    server.putSetting(server.settings.nslices, Number(event.target.value));
  },

  render: function() {
    return (
      <Selector
        values={this.props.values}
        handleChange={this.handleChange}/>
    );
  }

});

module.exports = SelectSlicesContainer;
