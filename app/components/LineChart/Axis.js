/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

const styles = {
  axis :{
    'stroke' : 'none',
    'fill': 'none',
    'shape-rendering': 'crispEdges'
  },
  grid:{
    'stroke' : ' #4b5f87',
    'opacity': '1.0',
  },
  text:{
    'fill': '#bbc7d9',
    'font-size': '14px',
  }
};

//---MODULE EXPORTS---//

const Axis = React.createClass({

  PropTypes: {
    className: PropTypes.string,
    orient: PropTypes.string,
    scale: PropTypes.func,
    innerTickSize: PropTypes.number,
    transform: PropTypes.string
  },

  componentWillMount() {
    this.update_d3(this.props);
  },

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps);
  },

  update_d3(props) {
    this.axis = d3.svg.axis().scale(props.scale).orient(props.orient).innerTickSize(props.innerTickSize).outerTickSize(0);
  },

  componentDidUpdate() {
    this.renderAxis();
  },

  componentDidMount() {
    this.renderAxis();
  },

  renderAxis() {
    const node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.axis);

    // axis
    d3.selectAll('.axis path').style(styles.axis);

    // grid
    d3.selectAll('.tick line').style(styles.grid);

    // text
    d3.selectAll('.tick text').style(styles.text);

  },

  render() {
    return (
      <g
        className={this.props.className}
        transform={this.props.transform}>
      </g>
    );
  }

});

module.exports = Axis;
