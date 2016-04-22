/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var d3 = require('d3');

var Axis = React.createClass({

  componentWillMount: function () {
    this.update_d3(this.props);
  },

  componentWillReceiveProps: function (newProps) {
    this.update_d3(newProps);
  },

  update_d3: function (props) {
  },

  render: function () {
    var translate = "translate("+(this.props.axisMargin-3)+", 0)";
    return (
      <g className="axis" transform={translate}>
      </g>
    );
  }

});
