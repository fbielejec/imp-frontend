var React = require('react');
var PropTypes = React.PropTypes;

var RenderButtonContainer = React.createClass({

handleChange : function() {

},


  render: function() {
    return (
      <button
        type='button'
        className='btn btn-lg btn-danger'
        onClick={this.handleChange}>Render</button>
    );
  }

});

module.exports = RenderButtonContainer;
