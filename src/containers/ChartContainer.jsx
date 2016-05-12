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

var colors = colorbrewer.Set3[12];
var defaultColorIndex = 4;

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
    return {
      rawData: [],
      color: colors[defaultColorIndex],
      opacity: 0.3
    };
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
      this.setState({color: event.target.value });
  },

  handleOpacityChange: function(event) {
    this.setState({opacity: Number(event.target.value) });
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
              handleChange={this.handleColorChange}
              selectedIndex={defaultColorIndex}/>

            <Slider
              label={"opacity"}
              minValue={0.1}
              maxValue={1.0}
              step={0.1}
              handleChange={this.handleOpacityChange}
              value={this.state.opacity} />

          </div>

          <svg style={{

            // 'marginBottom': '10px',
            // 'backgroundColor': '#3f5175',
            // 'borderRadius':'4px',
            // 'boxShadow': '1px 1px 1px 0px rgba(37,41,51,1)'

            }}
            preserveAspectRatio={preserveAspectRatio}
            viewBox={viewBox}
            transform={translate}>
            <LineChart
              data={this.state.rawData}
              width = {setup.width}
              height = {setup.height}
              color={this.state.color}
              opacity={this.state.opacity}/>
          </svg>

        </div>
      );

    }
  }
});

module.exports = ChartContainer;
