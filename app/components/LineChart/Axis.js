/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';

const styles = {
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
