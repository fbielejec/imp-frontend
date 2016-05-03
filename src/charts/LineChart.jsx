/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var d3 = require('d3');

var utils = require('../utils/utils.js');
var Axis = require('./Axis');

//---MODULE EXPORTS---//

var LineChart = React.createClass({

  propTypes : {
    data :  PropTypes.array.isRequired,
    width :  PropTypes.number.isRequired,
    height :  PropTypes.number.isRequired
  },

  componentWillMount: function () {
    this.update_d3(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    this.update_d3(newProps);
  },

  update_d3: function (props) {

    // --- X AXIS ---//

    var xmin = d3.min(props.data, function(d) {
      return d3.min(d.values, function(v) {
        return utils.formDate(v.time);
      });
    });

    var xmax = d3.max(props.data, function(d) {
      return d3.max(d.values, function(v) {
        return utils.formDate(v.time);
      });
    });

    var xScale = d3.time.scale.utc().domain([xmin, xmax]).range(
      [0, props.width]);

      // --- Y AXIS ---//

      var ymin = d3.min(props.data, function(d) {
        return d3.min(d.values, function(v) {
          return v.distance;
        });
      });

      var ymax = d3.max(props.data, function(d) {
        return d3.max(d.values, function(v) {
          return v.distance;
        });
      });

      var yScale = d3.scale.linear() //
      .domain([ymin, ymax])
      .range([props.height, 0]);

      // ---LINES ---//

      var line = d3.svg.line() //
      .x(function(d) {
        var time = utils.formDate(d.time)
        return xScale(time);
      }). //
      y(function(d) {
        return yScale(d.distance);
      });

      var paths = props.data.map(function (d) {

        var pathMap = {
          key : d.name,
          path : line(d.values)
        }

        return(pathMap);
      });

      this.setState({paths: paths});
    },

    makeLine: function (path) {
      return (
        <Line
          path={path.path}
          key={path.key}/>
      );
    },

    render: function() {

      // xAxisLayer.attr("transform", "translate(0," + global.height + ")")

  // TODO: two axis g's one for x one for y, different transforms
  // TODO: pass scales to axis [no need to pass whole data] ?
  var xtransform = "translate(0," + this.props.height + ")";

      return(
        <g >
          <g className="linesLayer">
            { this.state.paths.map(this.makeLine) }
          </g>
          <Axis data={this.props.data} width={this.props.width} xtransform={xtransform} />
        </g>
      );
    }//END:render

  });//END: LineChart

  var Line = React.createClass({

    propTypes : {
      path :  PropTypes.string,
      color :  PropTypes.string,
      strokeWidth :  PropTypes.number
    }, // END: propTypes

    getDefaultProps: function() {
      return {path: '', color: 'blue', strokeWidth: 2}
    },//END: getDefaultProps

    render: function() {
      return (
        <path
          d={this.props.path}
          stroke={this.props.color}
          strokeWidth={this.props.strokeWidth}
          fill="none"/>
      );
    }//END:render

  });//END: Line

  module.exports = LineChart;
