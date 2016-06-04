/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';
import {formDate} from 'helpers/utils'
import {Line} from './Line'
import {Axis} from './Axis'
import {margin, width, height} from './setup'

//---MODULE EXPORTS---//

const LineChart = React.createClass({

  PropTypes : {
    data :  PropTypes.array.isRequired,
    width :  PropTypes.number.isRequired,
    height :  PropTypes.number.isRequired,
    color: PropTypes.string,
    opacity : PropTypes.number
  },

  getDefaultProps() {
    return {
      color : "black",
      opacity : 1.0
    }
  },

  getInitialState() {
    return {
      paths: [],
      xScale :null,
      yScale :null
    };
  },

  componentWillMount () {
    this.update_d3(this.props);
  },

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps);
  },

  update_d3(props) {

    // --- X AXIS ---//

    const xmin = d3.min(props.data, function(d) {
      return d3.min(d.values, function(v) {
        return formDate(v.time);
      });
    });

    const xmax = d3.max(props.data, function(d) {
      return d3.max(d.values, function(v) {
        return formDate(v.time);
      });
    });

    const xScale = d3.time.scale.utc().domain([xmin, xmax]).range(
      [0, props.width]);

      // --- Y AXIS ---//

      const ymin = d3.min(props.data, function(d) {
        return d3.min(d.values, function(v) {
          return v.distance;
        });
      });

      const ymax = d3.max(props.data, function(d) {
        return d3.max(d.values, function(v) {
          return v.distance;
        });
      });

      const offset =  0.1 * ymax;

      const yScale = d3.scale.linear() //
      .domain([ymin -offset, ymax+offset])
      .range([props.height, 0]);

      // ---LINES ---//

      const line = d3.svg.line() //
      .x(function(d) {
        const time =  formDate(d.time)
        return xScale(time);
      }). //
      y(function(d) {
        return yScale(d.distance);
      });

      var paths = props.data.map(function (d) {

        var pathMap = {
          key : d.name,
          path : line(d.values)
        }

        return(pathMap);
      });

      this.setState({
        paths: paths,
        xScale : xScale,
        yScale : yScale
      });
    },

    makeLine(path) {
      return (
        <Line
          path={path.path}
          key={path.key}
          color={this.props.color}
          opacity={this.props.opacity}/>
      );
    },

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
            innerTickSize={-setup.height}
            transform={xtransform}/>
          <Axis
            className={yclassName}
            scale={this.state.yScale}
            orient={yorient}
            innerTickSize={-setup.width}
            transform={ytransform}/>
          <g className="linesLayer">
            { this.state.paths.map(this.makeLine) }
          </g>
        </g>
      );
    }

  });

export default LineChart
