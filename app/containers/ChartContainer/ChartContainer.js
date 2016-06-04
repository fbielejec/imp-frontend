/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';
import colorbrewer from 'colorbrewer';
import {margin, width, height} from 'components/LineChart/setup'
import {LineChart} from 'components';
import {loading, container, box} from './styles.css'

// TODO: development
import {all} from 'helpers/mocks'

//---MODULE EXPORTS---//

const colors = colorbrewer.Set3[12];
const defaultColorIndex = 4;

// const styles = {
//   row: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   controls: {
//     maxWidth: 300
//   }
// };

const ChartContainer = React.createClass({

  propTypes : {
    url : PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      rawData: [],
      color: colors[defaultColorIndex],
      opacity: 0.3
    };
  },

  componentWillMount() {
    // TODO: development
    // this.loadRawData();
      this.setState({rawData: all });
  },

  loadRawData() {
    d3.json(this.props.url).get(function(error, rows) {
      if (error) {
        console.error(error);
        console.error(error.stack);
      } else {
        this.setState({rawData: rows });
      }
      // inner this is outer this
    }.bind(this));
  },

  render: function() {
    if (!this.state.rawData.length) {
      return (
        <h2 className={loading}>Loading data... </h2>
      );
    } else {

      const preserveAspectRatio = "xMinYMin meet";
      const viewBox = "0 0 " + ( width + margin.left +  margin.right) + " " + ( height + margin.top + margin.bottom);
      const translate = "translate(" + margin.left + "," +  margin.top + ")";

      return (
        <div className={container}>

          <div className={box}>
            <svg
              style={{

                // 'marginBottom': '10px',
                // 'backgroundColor': '#3f5175',
                // 'borderRadius':'4px',
                // 'boxShadow': '1px 1px 1px 0px rgba(37,41,51,1)'

              }}
              preserveAspectRatio={preserveAspectRatio}
              viewBox={viewBox}
              transform={translate}>
              <LineChart
                data={this.state.rawData}
                width = {width}
                height = {height}
                color={this.state.color}
                opacity={this.state.opacity}/>
            </svg>
          </div>

          <div className={box}>
            NEXT CHART
          </div>

        </div>
      );

    }
  }
});

export default ChartContainer
