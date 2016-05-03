/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var d3 = require('d3');

var utils = require('../utils/utils.js');
require('../styles/Axis.css');

//---MODULE EXPORTS---//

var Axis = React.createClass({

  propTypes : {
    data :  PropTypes.array.isRequired,
    width :  PropTypes.number.isRequired,
    xtransform : PropTypes.string.isRequired,
    height :  PropTypes.number,
    ytransform : PropTypes.string
  },

  componentWillMount: function () {
    this.update_d3(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    this.update_d3(newProps);
  },

  update_d3: function (props) {

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

    this.xAxis = d3.svg.axis().scale(xScale).orient("bottom");

      },

      componentDidUpdate: function () {
        this.renderAxis();
      },

      componentDidMount: function () {
        this.renderAxis();
      },

      renderAxis: function () {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.xAxis);
      },

      render: function () {
        return (
          <g className="x axis" transform={this.props.xtransform}>
          </g>
          <g className="y axis" transform={this.props.ytransform}>
          </g>
        );
      }

    });

    module.exports = Axis;
