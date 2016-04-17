/**
* @fbielejec
*/

//---MODULE IMPORTS---//

var React = require('react');
var PropTypes = React.PropTypes;
var server = require('../utils/server.js');
var LoadTrees = require('../components/LoadTrees');
var SelectAttributesContainer = require('./SelectAttributesContainer');
var BurninSliderContainer = require('./BurninSliderContainer');
var SelectSlicesContainer = require('./SelectSlicesContainer');
var DecimalDateContainer = require('./DecimalDateContainer');

//---MODULE EXPORTS---//

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      // TODO: debugging
      // treesLoaded: false,
      treesLoaded: true,
      attributes: [],
      ntrees: 1
    };
  },//END: getInitialState

  handleChange: function(event) {

    event.preventDefault();

    var file = event.target.files[0];
    if (!file) {
      return;
    }

    var reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    var self = this;

    reader.onload = function(e) {
      var content = e.target.result;

      $.when(server.putTrees(content)).done(function() {
        // chaining multiple AJAX calls
        var attributes_call = server.getAttributes();
        var ntrees_call = server.getnTrees();

        $.when(attributes_call, ntrees_call).done(function(attributes, ntrees) {
          self.setState({
            treesLoaded: true,
            attributes: attributes[0],
            ntrees: ntrees[0]
          });
        });
      });
    }//END: onLoad
  }, //END: handleChange

  render: function() {
    return (
      <div
        className="container"
        style={{background: "transparent"}}>
        <div className="row">
          <div className="span8">
            <form className="form-horizontal">

              <div
                className="control-group"
                style={{marginTop: '25px'}}>
                <label
                  htmlFor="load-trees"
                  className="control-label">
                  Load trees file
                </label>
                <div className="controls">
                  <LoadTrees
                    name="load-trees"
                    handleChange={this.handleChange}/>
                </div>
              </div>

              {this.state.treesLoaded ?
                [
                  <div key={0} className="control-group">
                    <label
                      htmlFor="select-attributes"
                      className="control-label">
                      Select location attribute name
                    </label>
                    <div className="controls">
                      <SelectAttributesContainer
                        name="select-attributes"
                        attributes={this.state.attributes}/>
                    </div>
                  </div>
                  ,

                  <div key={1} className="control-group">
                    <label
                      htmlFor="burnin-slider"
                      className="control-label">
                      Select burn-in
                    </label>
                    <div className="controls">
                      <BurninSliderContainer
                        name="burnin-slider"
                        maxValue={this.state.ntrees - 1}/>
                    </div>
                  </div>
                  ,

                  <div key={2} className="control-group">
                    <label
                      htmlFor="select-slices"
                      className="control-label">
                      Select number of slices
                    </label>
                    <div className="controls">
                      <SelectSlicesContainer name="select-slices"/>
                    </div>
                  </div>
                  ,

                  <div key={3} className="control-group">
                    <label
                      htmlFor="decimal-date"
                      className="control-label">
                      Most recent sampling date
                    </label>
                    <div className="controls">
                      <DecimalDateContainer name="decimal-date"/>
                    </div>
                  </div>

                ]
                : null}

              </form>
            </div>
          </div>
        </div>
      );
    }

  });

  module.exports = MainContainer;
