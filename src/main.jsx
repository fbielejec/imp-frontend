/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-simpletabs');
require('./styles/style.css');
require('./styles/tabs-custom.css');
var RenderPanel = require('./components/RenderPanel');
var ParserPanel = require('./components/ParserPanel');

//---MAIN---//

var App = React.createClass({

  onMount: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
    console.log('on mount, showing tab ' + selectedIndex);
  },

  onBeforeChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
    console.log('before the tab ' + selectedIndex);
  },

  onAfterChange: function(selectedIndex, $selectedPanel, $selectedTabMenu) {
    console.log('after the tab ' + selectedIndex);
  },

  render: function() {
    return (
      <Tabs tabActive={1} onBeforeChange={this.onBeforeChange} onAfterChange={this.onAfterChange} onMount={this.onMount}>
        <Tabs.Panel title='Parse'>
        	<ParserPanel/>
        </Tabs.Panel>
        <Tabs.Panel title='Render'>
        	<RenderPanel url='data.json'/>
        </Tabs.Panel>
      </Tabs>
    );
  }

});

ReactDOM.render(
  <App/>, document.getElementById('app'));
