/**
* @fbielejec
*/

var React = require('react');
var LineChart = require('./LineChart');
var utils = require('../utils/utils.js');

// var data = {
//   series1: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
//   series2: [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ],
//   series3: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
// };

var RenderPanel = React.createClass({

  propTypes : {
		url : React.PropTypes.string
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

        //TODO: serve clean JSON
        this.setState({rawData: utils.prepareData(rows)});
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

console.log(translate);

    return (
      <svg width={fullWidth} height={params.height} transform={translate}>
          <LineChart data={this.state.rawData}
                     width = {params.width}
                     height = {params.height}/>
      </svg>
    );
  }//END: data loaded check
}//END: render

});

module.exports = RenderPanel;
