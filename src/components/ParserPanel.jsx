/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var LineChart = require('./LineChart');
var utils = require('../utils/utils.js');

//---MODULE EXPORTS---//
var ParserPanel = React.createClass({

  propTypes : {
  }, // END: propTypes

  render: function() {
    return (
          <h2>PARSER PANEL</h2>
    );
  }

});

module.exports = ParserPanel;
