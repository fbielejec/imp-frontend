/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var LineChart = require('./LineChart');
var utils = require('../utils/utils.js');
// require('bootstrap.min.css');
var SlicesSlider = require('./SlicesSlider');

//---MODULE EXPORTS---//
var ParserPanel = React.createClass({

  propTypes : {
  }, // END: propTypes

  render: function() {
    return (

      <div className="jumbotron col-sm-12 text-center" >

        <div className='col-sm-8 col-sm-offset-2'>
          <button
            type='button'
            className='btn btn-lg btn-success'>
            Load trees
          </button>
        </div>

        <div className='col-sm-8 col-sm-offset-2'>
          <input type="text" value="location" />
        </div>

        <div className='col-sm-8 col-sm-offset-2'>
          <input type="text" value="burnin" />
        </div>

        <div className='col-sm-8 col-sm-offset-2'>
          <SlicesSlider initialValue={10}/>
        </div>


      </div>
    );
  }

});

module.exports = ParserPanel;
