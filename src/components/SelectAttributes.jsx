/**
 * @fbielejec
 */

var React = require('react');
var PropTypes = React.PropTypes;

// https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down

// https://stackoverflow.com/questions/31856712/update-component-state-from-outside-react-on-server-response

var SelectAttributes = React.createClass({

  getInitialState: function() {
          return {
              value: 'select location attribute name'
          }
      },//END: getInitialState

  handleChange: function(event) {

      this.setState({value: event.target.value});

},//END: handleChange


  render: function() {
    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    );
  }//END:render

});

module.exports = SelectAttributes;
