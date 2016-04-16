/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var LineChart = require('./LineChart');
var utils = require('../utils/utils.js');
var MainContainer = require('../containers/MainContainer');

//---MODULE EXPORTS---//

var ParserPanel = React.createClass({

  render: function() {
    return (
      <MainContainer/>
    );
  }

});

module.exports = ParserPanel;
