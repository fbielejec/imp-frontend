/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var d3 = require('d3');

var utils = require('../utils/utils.js');
// require('../styles/Axis.css');

var styles = {
  axis :{
    'stroke' : 'black',
    'fill': 'none',
    'shape-rendering': 'crispEdges'
  },
  grid:{
    'stroke' : 'black',
    'opacity': '0.1',
  },
  text:{
    'font-size': '27px',
  }
};


//---MODULE EXPORTS---//

var Axis = React.createClass({

  propTypes: {
    className: PropTypes.string,
    orient: PropTypes.string,
    scale: PropTypes.func,
    innerTickSize: PropTypes.number,
    transform: PropTypes.string
  },

  componentWillMount: function() {
    this.update_d3(this.props);
  },

  componentWillReceiveProps: function(newProps) {
    this.update_d3(newProps);
  },

  update_d3: function(props) {
    this.axis = d3.svg.axis().scale(props.scale).orient(props.orient).innerTickSize(props.innerTickSize).outerTickSize(0)
    ;
  },

  componentDidUpdate: function() {
    this.renderAxis();
  },

  componentDidMount: function() {
    this.renderAxis();
  },

  renderAxis: function() {
    var node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.axis);

    // axis
    d3.selectAll('.axis path').style(styles.axis);

    // grid
    d3.selectAll('.tick line').style(styles.grid);

    // text
    d3.selectAll('.tick text').style(styles.text);

  },

  render: function () {
    return (
      <g
        className={this.props.className}
        transform={this.props.transform}>
      </g>
    );
  }

});

module.exports = Axis;
