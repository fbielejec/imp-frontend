/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var LineChart = require('./LineChart');
var utils = require('../utils/utils.js');

var LoadTreesContainer = require('../containers/LoadTreesContainer');

//---MODULE EXPORTS---//

var ParserPanel = React.createClass({

  render: function() {
    return (
      <LoadTreesContainer/>
    );
  }

});

module.exports = ParserPanel;
