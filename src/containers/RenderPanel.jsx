/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var LineChart = require('./LineChart');
var utils = require('../utils/utils.js');

//---MODULE EXPORTS---//

var RenderPanel = React.createClass({

  propTypes : {
    url : PropTypes.string
  }, // END: propTypes

  componentWillMount: function() {
    this.loadRawData();
  }, //END: componentWillMount

  loadRawData : function() {
    d3.json(this.props.url).get(function(error, rows) {
      if (error) {
        console.error(error);
        console.error(error.stack);
      } else {
        // this.setState({rawData: utils.prepareData(rows)});
        this.setState({rawData: rows });
      }
      // inner this is outer this
    }.bind(this));
  }, //END: loadRawData

  getInitialState : function() {
    return {rawData: []};
  },//END: getInitialState

  render: function() {

    if (!this.state.rawData.length) {
      return (
        <h2>Loading data...
        </h2>
      );
    } else {

      var params = {
        width : 600,
        height : 300,
        topMargin : 50,
        rightMargin : 50,
        bottomMargin : 50,
        leftMargin : 70
      };

      var fullWidth = 700;
      var translate = "translate(" + params.leftMargin + "," + params.topMargin + ")";

      return (
        <svg
          width={fullWidth}
          height={params.height}
          transform={translate}>
          <LineChart
            data={this.state.rawData}
            width = {params.width}
            height = {params.height}/>
        </svg>
      );
    }//END: data loaded check
  }//END: render

});

module.exports = RenderPanel;
