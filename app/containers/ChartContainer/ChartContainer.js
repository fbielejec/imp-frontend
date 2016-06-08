/**
* @fbielejec
*/

//---MODULE IMPORTS---//

import React, {PropTypes} from 'react';
import d3 from 'd3';
import {margin, width, height} from 'components/Charts/setup'
import {Loading,Error, LineChart, ConfidenceChart, AreaChart, Button} from 'components';
import {container, box, header, download} from './styles.css'
import $ from 'jquery'
import { getDataAll, getDataMean} from 'helpers/server'
import {saveAs} from 'file-saver'

// TODO: development
// import {all, mean} from 'helpers/mocks'

//---MODULE EXPORTS---//
const ChartContainer = React.createClass({

      propTypes: {
        dataAllUrl: PropTypes.string.isRequired,
        dataMeanUrl: PropTypes.string.isRequired,
      },

      getInitialState() {
        return {
          dataAll: [],
          dataMean: [],
          isBusy: false,
          Error: "",
        };
      },

      componentWillMount() {
        this.loadRawData();

        // TODO: development
        // this.setState({
        //     dataAll: all,
        //     dataMean: mean,
        //     });
      },

      loadRawData() {

        var self = this;
        this.setState({
          isBusy: true,
        });


        d3.json(this.props.dataAllUrl).get(function(error, rows) {
          if (error) {

            console.log(JSON.parse(error.response));
            console.error(error.stack);

            // Error handling
            self.setState( //
              Object.assign(self.getInitialState(), {
                isBusy: false
              }, JSON.parse(error.response) || {
                Error: "Server not responding"
              })
            );

          } else {
            this.setState({
              dataAll: rows,
              isBusy: false,
            });
          }
          // inner this is outer this
        }.bind(this));

        d3.json(this.props.dataMeanUrl).get(function(error, rows) {
          if (error) {

            console.log(JSON.parse(error.response));
            console.error(error.stack);

            // Error handling
            self.setState( //
              Object.assign(self.getInitialState(), {
                isBusy: false
              }, JSON.parse(error.response) || {
                Error: "Server not responding"
              })
            );

          } else {
            this.setState({
              dataMean: rows,
              isBusy: false,
            });
          }
          // inner this is outer this
        }.bind(this));

      },

      saveDataAll: function() {

        var dataAll_call = getDataAll();
        $.when(dataAll_call).done(function(json) {
          const text = JSON.stringify(json);
          var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
          });
          saveAs(blob, "dataAll.json");
        });

      },

      saveDataMean: function() {

        var dataMean_call = getDataMean();
        $.when(dataMean_call).done(function(json) {
          const text = JSON.stringify(json);
          var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
          });
          saveAs(blob, "dataMean.json");
        });

      },
  render: function() {

//TODO
console.log(this.state);

    if (this.state.isBusy) {

      return <Loading/>

    } else if(this.state.Error) {

       return <Error message={this.state.Error}/>

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
                handleClick={this.saveDataAll}
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
                opacity={0.1}
                strokeWidth={'2px'}/>
            </svg>
          </div>

          <div className={box}>
            <div className={header}>
              <h3> {'Mean distances from epidemic origin'}</h3>
              <Button
                handleClick={this.saveDataMean}
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
