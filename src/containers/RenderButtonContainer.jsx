var React = require('react');
var PropTypes = React.PropTypes;
var RenderButton = require('../components/RenderButton');

var RenderButtonContainer = React.createClass({

handleChange : function() {

// TODo

},


  render: function() {
    return (
<div>
<RenderButton handleChange={this.handleChange}/>
</div>
    );
  }

});

module.exports = RenderButtonContainer;
