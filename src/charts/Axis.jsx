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
    this.axis = d3.svg.axis().scale(props.scale).orient(props.orient).innerTickSize(props.innerTickSize).outerTickSize(0);
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
