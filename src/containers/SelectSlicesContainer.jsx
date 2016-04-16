var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var Selector = require('../components/Selector');

var SelectSlicesContainer = React.createClass({

  getInitialState: function() {
    return ({value: ""})
  }, //END: getInitialState

  handleChange: function(event) {
    this.setState({value: event.target.value});
    server.putSetting(server.settings.nslices, event.target.value);
  },//END: handleChange

  render: function() {

    var values = [10,20,30,40,50];

    return (
      <Selector
        values={values}
        handleChange={this.handleChange}/>
    );
  }

});

module.exports = SelectSlicesContainer;
