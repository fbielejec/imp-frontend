/**
 * @fbielejec
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery'
import {putTrees, getAttributes, getnTrees} from 'helpers/server'
import {LoadTrees, Button} from 'components'
import {LoadingContainer, SelectAttributesContainer, BurninSliderContainer, SelectSlicesContainer, DecimalDateContainer} from 'containers'
import {container, rowDisplay, render, label} from './styles.css'

const HomeContainer = React.createClass({

  propTypes: {
  },

getInitialState() {
  return {
    // TODO: development
    // treesLoaded: true,
    treesLoaded: false,
    // isBusy : true,
    isBusy : false,
    attributes: [ ],
    ntrees: 0,
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

      self.setState({ //
        isBusy: true, //
      });

      $.when(putTrees(content)).done(function() {
        var attributes_call = getAttributes();
        var ntrees_call = getnTrees();

        $.when(attributes_call, ntrees_call).done(function(attributes, ntrees) {
          self.setState({ //
            treesLoaded: true, //
            attributes: attributes[0], //
            ntrees: ntrees[0], //
            isBusy: false, //
          });
        });

      });

    } //END: onLoad
  },

  render() {
var self = this;

    return (
      <div className = {container}>

        <LoadTrees handleChange={this.handleLoadTrees}/>
        {this.state.treesLoaded ?
          [

            <div key={0} className = {rowDisplay}>
              <label className={label}>
                {"Select location attribute name: "}
              </label>
              <SelectAttributesContainer attributes={this.state.attributes}/>
            </div>
            ,

            <div key={1} className = {rowDisplay}>
              <label className={label}>
                {"Select burn-in: "}
              </label>
              <BurninSliderContainer maxValue={this.state.ntrees - 1}/>
            </div>
            ,

            <div key={2} className = {rowDisplay}>
              <label className={label}>
                {"Select number of slices: "}
              </label>
              <SelectSlicesContainer values = {[10,20,30,40,50,60,70,80,90,100]}/>
            </div>
            ,

            <div key={3} className = {rowDisplay}>
              <label className={label}>
                {"Specify most recent sampling date: "}
              </label>
              <DecimalDateContainer/>
            </div>
            ,

            <div key={4} className = {container}>
              <Link to='/render'>
                <Button className={render} name={"Render"}/>
              </Link>
            </div>
            ,

          ] : null }
          <LoadingContainer isBusy = {this.state.isBusy}/>
        </div>
    );
  }

});

export default HomeContainer;
