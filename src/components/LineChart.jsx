/**
* @fbielejec
*/

var React = require('react');
var d3 = require('d3');

// http://bl.ocks.org/slashdotdash/8342292

// http://10consulting.com/2014/02/19/d3-plus-reactjs-for-charting/



var Chart = React.createClass({
  render: function() {
    return (
      <svg
        width={this.props.width}
        height={this.props.height}>
        {this.props.children}
      </svg>
    );
  }
});

var Line = React.createClass({
  getDefaultProps: function() {
    return {path: '', color: 'blue', width: 2}
  },

  render: function() {
    return (
      <path
        d={this.props.path}
        stroke={this.props.color}
        strokeWidth={this.props.width}
        fill="none"/>
    );
  }
});


var DataSeries = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      data: [],
      interpolate: 'linear'
    }
  },

  render: function() {
    var self = this,
    props = this.props,
    yScale = props.yScale,
    xScale = props.xScale;

    var path = d3.svg.line()
    .x(function(d) { return xScale(d.x); })
    .y(function(d) { return yScale(d.y); })
    .interpolate(this.props.interpolate);

    return (
      <Line
        path={path(this.props.data)}
        color={this.props.color} />
    )
  }
});

var LinesChart = React.createClass({
  getDefaultProps: function() {
    return {
      width: 600,
      height: 300
    }
  },

  render: function() {
    var data = this.props.data,
    size = { width: this.props.width, height: this.props.height };

    var max = _.chain(data.series1, data.series2, data.series3)
    .zip()
    .map(function(values) {
      return _.reduce(values, function(memo, value) { return Math.max(memo, value.y); }, 0);
    })
    .max()
    .value();

    var xScale = d3.scale.linear()
    .domain([0, 6])
    .range([0, this.props.width]);

    var yScale = d3.scale.linear()
    .domain([0, max])
    .range([this.props.height, 0]);

    return (
      <Chart
        width={this.props.width}
        height={this.props.height}>
        <DataSeries
          data={data.series1}
          size={size}
          xScale={xScale}
          yScale={yScale}
          ref="series1"
          color="cornflowerblue" />
        <DataSeries
          data={data.series2}
          size={size}
          xScale={xScale}
          yScale={yScale}
          ref="series2"
          color="red" />
        <DataSeries
          data={data.series3}
          size={size}
          xScale={xScale}
          yScale={yScale}
          ref="series3"
          color="green" />
      </Chart>
    );
  }
});

//TODO
//////////////////////////////////////////////////////

var LineChart = React.createClass({

  propTypes : {
		data : React.PropTypes.array.isRequired,
    width : React.PropTypes.number
	}, // END: propTypes

  componentWillMount: function () {

 this.line = d3.svg.line();
  this.xScale = d3.scale.linear();
  this.yScale = d3.scale.linear();
  this.update_d3(this.props);
},//END: componentWillMount

  componentWillReceiveProps: function (newProps) {
  this.update_d3(newProps);
},//END : componentWillReceiveProps

  update_d3: function (props) {

var data = props.data;

    // --- X AXIS ---//

  var xmin = d3.min(data, function(d) {
    return d3.min(d.values, function(v) {
      return v.time;
    });
  });

  var xmax = d3.max(data, function(d) {
    return d3.max(d.values, function(v) {
      return v.time;
    });
  });

  var xScale = d3.time.scale.utc().domain([xmin, xmax]).range(
    [0, props.width]);

    // --- Y AXIS ---//

       var ymin = d3.min(data, function(d) {
         return d3.min(d.values, function(v) {
           return v.distance;
         });
       });

       var ymax = d3.max(data, function(d) {
         return d3.max(d.values, function(v) {
           return v.distance;
         });
       });

       var yScale = d3.scale.linear() //
         .domain([ymin, ymax])
         .range([global.height, 0]);




// console.log("yscale: " +yScale.domain());



  },//END: update_d3

render: function() {

return(
<text x="300" y="150" fill="red">Chart will be here</text>
);

}//END:render

});//END: LineChart


module.exports = LineChart;
