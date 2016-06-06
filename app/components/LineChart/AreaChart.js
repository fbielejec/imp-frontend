/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';
import {formDate} from 'helpers/utils'
import Area from './Area'
// import Axis from './Axis'
// import {margin, width, height} from './setup'

//---MODULE EXPORTS---//

const AreaChart = React.createClass({

      propTypes: {
        data: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        fill: PropTypes.string,
        opacity: PropTypes.number,
        // strokeWidth : PropTypes.string,
      },

      getDefaultProps() {
        return {
          color: "grey",
          opacity: 0.5
        }
      },

      getInitialState() {
        return {
          area: null,
          xScale: null,
          yScale: null
        };
      },

      componentWillMount() {
        this.update_d3(this.props);
      },

      componentWillReceiveProps(newProps) {
        this.update_d3(newProps);
      },

      update_d3(props) {

        // --- X AXIS ---//

        const xmin = d3.min(props.data, function(d) {
          return formDate(d.time);
        });

        const xmax = d3.max(props.data, function(d) {
          return formDate(d.time);
        });

        const xScale = d3.time.scale.utc().domain([xmin, xmax]).range(
          [0, props.width]);

        // --- Y AXIS ---//

        const ymin = d3.min(props.data, function(d) {
          return d.lower_distance;
        });

        const ymax = d3.max(props.data, function(d) {
          return d.upper_distance;
        });

        const offset = 0.1 * ymax;

        const yScale = d3.scale.linear() //
          .domain([ymin - offset, ymax + offset])
          .range([props.height, 0]);

        // ---AREA ---//

        var area = d3.svg.area() //
          .x(function(d) {
            const time = formDate(d.time);
            return xScale(time);
          }) //
          .y0(function(d) {
            return yScale(d.lower_distance);
          }) //
          .y1(function(d) {
            return yScale(d.upper_distance);
          });

        const path = area(props.data);

        this.setState({
          area: path,
          xScale: xScale,
          yScale: yScale
        });
      },

    render() {

      return(
          <g className={"areaLayer"}>
            <Area
              path={this.state.area}
              fill={this.props.fill}
              opacity={this.props.opacity}
              strokeWidth={this.props.strokeWidth}/>
          </g>
      );
    }

  });

export default AreaChart
