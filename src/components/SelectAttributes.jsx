/**
 * @fbielejec
 */

var React = require('react');
var PropTypes = React.PropTypes;

// https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
var SelectAttributes = React.createClass({

  getInitialState: function() {
          return {
              value: 'select location attribute name'
          }
      },//END: getInitialState

  handleChange: function(event) {



},//END: handleChange


  render: function() {
    return (
      <select value={this.state.value}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
    );
  }//END:render

});

module.exports = SelectAttributes;
