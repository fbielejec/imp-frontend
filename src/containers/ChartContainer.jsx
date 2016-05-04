/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var colorbrewer = require('colorbrewer');

var setup = require('../charts/setup');
var utils = require('../utils/utils.js');

var Slider = require('../components/Slider');
var Selector = require('../components/Selector');
var LineChart = require('../charts/LineChart');

//---MODULE EXPORTS---//

var styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  controls: {
    maxWidth: 300
  }
};

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

  handleColorChange: function(event) {
    // set steate, pass state to chart
    console.log(event.target.value);

  },

  handleOpacityChange: function(event) {
    // set steate, pass state to chart
    console.log(event.target.value);

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
        <div style={styles.row}>
          <div style={styles.controls}>

            <Selector
              values={colorbrewer.Set3[12]}
              handleChange={this.handleColorChange}/>

            <Slider
              label={"opacity"}
              maxValue={1.0}
              step={0.1}
              handleChange={this.handleOpacityChange}
              value={this.state.value} />

          </div>

          <svg
            preserveAspectRatio={preserveAspectRatio}
            viewBox={viewBox}
            transform={translate}>
            <LineChart
              data={this.state.rawData}
              width = {setup.width}
              height = {setup.height}/>
          </svg>

        </div>
      );

    }
  }
});

module.exports = ChartContainer;
