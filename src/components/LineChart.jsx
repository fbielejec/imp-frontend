/**
* @fbielejec
*/

var React = require('react');
var d3 = require('d3');

// http://bl.ocks.org/slashdotdash/8342292

// http://10consulting.com/2014/02/19/d3-plus-reactjs-for-charting/

var LineChart = React.createClass({

  propTypes : {
		data : React.PropTypes.array.isRequired,
    width : React.PropTypes.number,
    height : React.PropTypes.number
	}, // END: propTypes

  componentWillMount: function () {

 // this.line = d3.svg.line();
  // this.xScale = d3.scale.linear();
  // this.yScale = d3.scale.linear();
  this.update_d3(this.props);
},//END: componentWillMount

  componentWillReceiveProps: function (newProps) {
  this.update_d3(newProps);
},//END : componentWillReceiveProps

  update_d3: function (props) {

// var data = props.data;

    // --- X AXIS ---//

  var xmin = d3.min(props.data, function(d) {
    return d3.min(d.values, function(v) {
      return v.time;
    });
  });

  var xmax = d3.max(props.data, function(d) {
    return d3.max(d.values, function(v) {
      return v.time;
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
  return xScale(d.time);
}). //
y(function(d) {
  return yScale(d.distance);
});


 var paths = props.data.map(function (d) {
   return (line(d.values));
 });

// console.log("paths: " + paths + (typeof(paths)));

this.setState({paths: paths});




  },//END: update_d3

  makeLine: function (path) {

		// var props = {
		// 		path: path,
		// 		x: this.props.axisMargin,
		// 		y: this.yScale(bar.x),
		// 		width: this.widthScale(bar.y),
		// 		height: this.yScale(bar.dx),
		// 		key: "histogram-bar-"+bar.x+"-"+bar.y
		// }

		return (
				<Line path={path} />
		);
	}, // END: makeBar

render: function() {

return(
  <g className="linesLayer">
	{ this.state.paths.map(this.makeLine) }
</g>
);

}//END:render

});//END: LineChart

/*<text x="300" y="150" fill="red">Chart will be here</text>*/

var Line = React.createClass({

  getDefaultProps: function() {
    return {path: '', color: 'blue', width: 2}
  },//END: getDefaultProps

  render: function() {
    return (
      <path
        d={this.props.path}
        stroke={this.props.color}
        strokeWidth={this.props.width}
        fill="none"/>
    );
  }//END:render

});

module.exports = LineChart;
