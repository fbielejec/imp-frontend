/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var d3 = require('d3');
var utils = require('../utils/utils.js');

//---MODULE EXPORTS---//

var Axis = React.createClass({

  propTypes : {
    data :  PropTypes.array.isRequired,
    width :  PropTypes.number.isRequired
  },

  componentWillMount: function () {

    // this.yScale = d3.scale.linear();
    //
    // this.axis = d3.svg.axis()
    // .scale(this.yScale)
    // .orient("left")
    // .tickFormat(function (d) {
    //   return "$"+this.yScale.tickFormat()(d);
    // }.bind(this));

    this.update_d3(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    this.update_d3(newProps);
  },

  update_d3: function (props) {

    // this.yScale
    // .domain([0,
    //   d3.max(props.data.map(
    //     function (d) {
    //       return d.x + d.dx;
    //     }))])
    //     .range([0, props.height-props.topMargin-props.bottomMargin]);
    //
    //     this.axis
    //     .ticks(props.data.length)
    //     .tickValues(props.data.map(function (d) {
    //       return d.x;
    //     })
    //     .concat(props.data[props.data.length - 1].x + props.data[props.data.length - 1].dx));

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

// console.log(xScale.range());

    this.xAxis = d3.svg.axis().scale(xScale).orient("bottom");



      },

      componentDidUpdate: function () {
        this.renderAxis();
      },

      componentDidMount: function () {
        this.renderAxis();
      },

      renderAxis: function () {

 // console.log(this.xAxis);

        var node = ReactDOM.findDOMNode(this);

        d3.select(node).call(this.xAxis);
      },

      render: function () {
        // var translate = "translate("+(this.props.axisMargin-3)+", 0)";
        return (
          <g className="axis">
          </g>
        );
      }

    });

    module.exports = Axis;
