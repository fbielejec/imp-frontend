/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var LineChart = require('./LineChart');
var utils = require('../utils/utils.js');

var LoadTrees = require('./LoadTrees');
var SlicesSlider = require('./SlicesSlider');
var SelectAttributes = require('./SelectAttributes');

//---MODULE EXPORTS---//

var ParserPanel = React.createClass({

  propTypes : {
  }, // END: propTypes

  //
  // <div className='col-sm-8 col-sm-offset-2'>
  //   <input type="text" value="burnin" />
  // </div>
  //
  // <div className='col-sm-8 col-sm-offset-2'>
  //   <SlicesSlider initialValue={10}/>
  // </div>
  //
  // <div className='col-sm-8 col-sm-offset-2'>
  //   <input type="text" value="mrsd" />
  // </div>

  render: function() {
    return (

      <div
        className="jumbotron col-sm-12 text-center"
        style={{background: "transparent"}}>

        <div className='col-sm-8 col-sm-offset-2'>
          <LoadTrees/>
        </div>

        <div className='col-sm-8 col-sm-offset-2' style={{marginTop: '25px'}}>
          <SelectAttributes />
        </div>

      </div>
    );
  }

});

module.exports = ParserPanel;
