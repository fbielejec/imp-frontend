/**
* @fbielejec
*/

var React = require('react');

var VeryFirstDiv = React.createClass ({
  render: function() {
    return (
      <div className="veryFirstDiv">
        <span>FUBAR</span>
      </div>
    );
  }
});

module.exports = VeryFirstDiv;
