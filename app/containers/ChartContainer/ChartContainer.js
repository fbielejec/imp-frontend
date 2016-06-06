/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';
import {margin, width, height} from 'components/LineChart/setup'
import {LineChart, ConfidenceChart, Button} from 'components';
import {loading, container, box, header, download} from './styles.css'

// TODO: development
import {all, mean} from 'helpers/mocks'

//---MODULE EXPORTS---//

const ChartContainer = React.createClass({

  propTypes : {
    dataAllUrl : PropTypes.string.isRequired,
    dataMeanUrl : PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      dataAll: [],
      dataMean: [],
      lineColor: "#7dc7f4",
      lineOpacity: 0.2
    };
  },

  componentWillMount() {
    // TODO: development
    // this.loadRawData();
      this.setState({dataAll: all });
      this.setState({dataMean: mean });
  },

  loadRawData() {
    d3.json(this.props.dataAllUrl).get(function(error, rows) {
      if (error) {
        console.error(error);
        console.error(error.stack);
      } else {
        this.setState({
          dataAll: rows,
         });
      }
      // inner this is outer this
    }.bind(this));
  },

  render: function() {
    if (!this.state.dataAll.length) {
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
            <div className={header}>
              <h3> {'Distribution of distances from epidemic origin'} </h3>
              <Button
                className={download}
                name={'Download data'}/>
            </div>
            <svg
              preserveAspectRatio={preserveAspectRatio}
              viewBox={viewBox}
              transform={translate}>
              <LineChart
                data={this.state.dataAll}
                width = {width}
                height = {height}
                color={this.state.lineColor}
                opacity={this.state.lineOpacity}/>
            </svg>
          </div>

          <div className={box}>
            <div className={header}>
              <h3> {'Mean distances from epidemic origin'}   </h3>
              <Button
                className={download}
                name={'Download data'}/>
            </div>
            <svg
              preserveAspectRatio={preserveAspectRatio}
              viewBox={viewBox}
              transform={translate}>
              <ConfidenceChart
                data={this.state.dataMean}
                width = {width}
                height = {height}
                color={this.state.lineColor}
                opacity={this.state.lineOpacity}/>
            </svg>
          </div>

        </div>
      );

    }
  }
});

export default ChartContainer
