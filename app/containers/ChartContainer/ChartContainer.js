/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';
import {margin, width, height} from 'components/Charts/setup'
import {Loading, LineChart, ConfidenceChart, AreaChart, Button} from 'components';
import {container, box, header, download} from './styles.css'

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
      dataLoaded: false,
      // TODO: development
      // dataLoaded: true,
    };
  },

   componentWillMount() {
     this.loadRawData();
         // TODO: development
      // this.setState({dataAll: all });
      // this.setState({dataMean: mean });
  },

  loadRawData() {

    d3.json(this.props.dataAllUrl).get(function(error, rows) {
      if (error) {
        console.error(error);
        console.error(error.stack);
      } else {
        this.setState({
          dataAll: rows,
          dataLoaded: true,
         });
      }
      // inner this is outer this
    }.bind(this));

    d3.json(this.props.dataMeanUrl).get(function(error, rows) {
      if (error) {
        console.error(error);
        console.error(error.stack);
      } else {
        this.setState({
          dataMean: rows,
          dataLoaded: true,
         });
      }
      // inner this is outer this
    }.bind(this));

  },

  render: function() {
    if (!this.state.dataLoaded) {
      return (
        <Loading/>
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
                color={'#7dc7f4'}
                opacity={0.2}
                strokeWidth={'2px'}/>
            </svg>
          </div>

          <div className={box}>
            <div className={header}>
              <h3> {'Mean distances from epidemic origin'}</h3>
              <Button
                className={download}
                name={'Download data'}/>
            </div>
            <svg
              preserveAspectRatio={preserveAspectRatio}
              viewBox={viewBox}
              transform={translate}>

              <AreaChart
                data={this.state.dataMean}
                width = {width}
                height = {height}
                fill={'#7dc7f4'}
                opacity={0.4}
              />

              <ConfidenceChart
                data={this.state.dataMean}
                width = {width}
                height = {height}
                color={'#7dc7f4'}
                opacity={1.0}
                strokeWidth={'5.0px'}/>
            </svg>
          </div>

        </div>
      );

    }
  }
});

export default ChartContainer
