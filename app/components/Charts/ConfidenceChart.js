/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';
import {formDate} from 'helpers/utils'
import Line from './Line'
import Axis from './Axis'
import {margin, width, height} from './setup'

//---MODULE EXPORTS---//

const ConfidenceChart = React.createClass({

      propTypes: {
        data: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        color: PropTypes.string,
        opacity: PropTypes.number,
        strokeWidth : PropTypes.string,
      },

      getDefaultProps() {
        return {
          color: "black",
          opacity: 1.0
        }
      },

      getInitialState() {
        return {
          line: null,
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

        // ---LINES ---//

        const line = d3.svg.line() //
          .x(function(d) {
            const time = formDate(d.time)
            return xScale(time);
          }). //
        y(function(d) {
          return yScale(d.mean_distance);
        });

        const path = line(props.data);

        this.setState({
          line: path,
          xScale: xScale,
          yScale: yScale
        });

      },

    // makeLine(path) {
    //   return (
    //     <Line
    //       path={path.path}
    //       key={path.key}
    //       color={this.props.color}
    //       opacity={this.props.opacity}/>
    //   );
    // },

    render() {
      const xtransform = "translate(0," + this.props.height + ")";
      const xorient = "bottom";
      const xclassName = "x axis"

      const ytransform = "translate(" + 0.1 + ",0)";
      const yorient = "left";
      const yclassName = "y axis"

      return(
        <g >
          <Axis
            className={xclassName}
            scale={this.state.xScale}
            orient={xorient}
            innerTickSize={-height}
            transform={xtransform}/>

          <Axis
            className={yclassName}
            scale={this.state.yScale}
            orient={yorient}
            innerTickSize={-width}
            transform={ytransform}/>

          <g className={"linesLayer"}>
            <Line
              path={this.state.line}
              color={this.props.color}
              opacity={this.props.opacity}
              strokeWidth={this.props.strokeWidth}/>
          </g>

        </g>
      );
    }

  });

export default ConfidenceChart
