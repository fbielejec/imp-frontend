/**
 * @fbielejec
 */

import React, {PropTypes} from 'react';
import  $  from 'jquery'
// import { Home } from 'components'
import { putTrees, getAttributes,  getnTrees} from 'helpers/server'

import { LoadTrees } from 'components'
import { SelectAttributesContainer, BurninSliderContainer } from 'containers'

import { container, rowDisplay } from './styles.css'

const HomeContainer = React.createClass({

  PropTypes: {},

  getInitialState() {
    return {
      // treesLoaded: false,
      treesLoaded: true,
        // attributes: [ ],
      attributes: ["a", "b"],
      // ntrees: 0
      ntrees: 10
    };
  },

  handleLoadTrees(event) {

    event.preventDefault();

    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    const self = this;

    reader.onload = function(e) {
      var content = e.target.result;

      $.when(putTrees(content)).done(function() {
        // chaining multiple AJAX calls
        var attributes_call = getAttributes();
        var ntrees_call = getnTrees();

        $.when(attributes_call, ntrees_call).done(function(attributes, ntrees) {
          self.setState({ //
            treesLoaded: true, //
            attributes: attributes[0], //
            ntrees: ntrees[0] //
          });
        });

      });

    } //END: onLoad
  },

  render() {
    return (
      <div className = {container}>
        <LoadTrees handleChange={this.handleLoadTrees}/>
        {this.state.treesLoaded ?
          [

            <div key={0} className = {rowDisplay}>
              <label>
                {"Select location attribute name: "}
              </label>
              <SelectAttributesContainer attributes={this.state.attributes}   />
            </div>
            ,

            <div key={1} className = {rowDisplay}>
              <label> {"Select burn-in: "} </label>
              <BurninSliderContainer maxValue={this.state.ntrees - 1}/>
            </div>
            ,




          ]   : null}
        </div>
    );
  }

});

export default HomeContainer;
