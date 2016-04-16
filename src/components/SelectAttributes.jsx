/**
 * @fbielejec
 */

var React = require('react');
var PropTypes = React.PropTypes;

// https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down

// https://stackoverflow.com/questions/31856712/update-component-state-from-outside-react-on-server-response

var SelectAttributes = React.createClass({


  handleChange: function(event) {

      this.setState({value: event.target.value});

console.log(event.target.value);

},//END: handleChange


  render: function() {
    return (
      <select onChange={this.handleChange}>
        {this.props.attributes.map(function(attribute, i) {

                return (
                  <option value={attribute}>{attribute}</option>
                );
              })}

      </select>
    );
  }//END:render

});

module.exports = SelectAttributes;
