/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;

var LineChart = require('../charts/LineChart');
var setup = require('../charts/setup');
var utils = require('../utils/utils.js');
// require('../styles/chart.css');

//---MODULE EXPORTS---//

var ChartContainer = React.createClass({

  propTypes : {
    url : PropTypes.string
  },

  getInitialState : function() {
    return {rawData: []};
  },

  componentWillMount: function() {
    this.loadRawData();
  },

  loadRawData : function() {
    d3.json(this.props.url).get(function(error, rows) {
      if (error) {
        console.error(error);
        console.error(error.stack);
      } else {
        this.setState({rawData: rows });
      }
      // inner this is outer this
    }.bind(this));
  },

  render: function() {

    if (!this.state.rawData.length) {
      return (
        <h2>Loading data...
        </h2>
      );
    } else {

      var preserveAspectRatio = "xMinYMin meet";
      var viewBox = "0 0 " + (setup.width + setup.margin.left + setup.margin.right) + " " + (setup.height + setup.margin.top + setup.margin.bottom);
      var translate = "translate(" + setup.margin.left + "," + setup.margin.top + ")";

      return (
        <svg
          preserveAspectRatio={preserveAspectRatio}
          viewBox={viewBox}
          transform={translate}>
          <LineChart
            data={this.state.rawData}
            width = {setup.width}
            height = {setup.height}/>
        </svg>
      );
    }
  }

});

module.exports = ChartContainer;
