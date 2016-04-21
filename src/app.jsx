/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

var React = require('react');
var ReactDOM = require('react-dom');

require('./styles/app.css');
var routes = require('./routes/routes');

//---ENTRY POINT---//

ReactDOM.render(routes, document.getElementById('app'));
