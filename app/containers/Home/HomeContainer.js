/**
 * @fbielejec
 */

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import $ from 'jquery'
import {putTrees, getAttributes, getnTrees} from 'helpers/server'
import {LoadTrees, Button} from 'components'
import {SelectAttributesContainer, BurninSliderContainer, SelectSlicesContainer, DecimalDateContainer} from 'containers'
import {container, rowDisplay, render, label} from './styles.css'

const HomeContainer = React.createClass({

  propTypes: {

  },

getInitialState() {
  return {
    treesLoaded: true,
    attributes: [ "a", "b" ],
    ntrees: 10
    // treesLoaded: false,
    // attributes: [ ],
    // ntrees: 0
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
              <label className={label}> {"Select location attribute name: "} </label>
              <SelectAttributesContainer attributes={this.state.attributes}/>
            </div>
            ,

            <div key={1} className = {rowDisplay}>
              <label className={label}> {"Select burn-in: "} </label>
              <BurninSliderContainer maxValue={this.state.ntrees - 1}/>
            </div>
            ,

            <div key={2} className = {rowDisplay}>
              <label className={label}> {"Select number of slices: "} </label>
                <SelectSlicesContainer values = {[10,20,30,40,50,60,70,80,90,100]}/>
            </div>
            ,

            <div key={3} className = {rowDisplay}>
              <label className={label}> {"Specify most recent sampling date: "} </label>
               <DecimalDateContainer/>
            </div>
            ,

            <div key={4} className = {container}>
              <Link to='/render'>
                <Button className={render} name={"Render"}/>
              </Link>
            </div>
            ,

          ] : null}
        </div>
    );
  }

});

export default HomeContainer;
