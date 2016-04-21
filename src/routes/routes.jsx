var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var RenderPanel = require('../containers/RenderPanel');
var MainContainer = require('../containers/MainContainer');

var RenderPanelWrapper = React.createClass({
  render: function () {
    return (
        <RenderPanel url='/results'/>
    );
  }
});

var routes = (
  <Router history= { hashHistory } >
    <Route path='/' component={MainContainer}/>
    <Route path='render' component={RenderPanelWrapper} />
  </Router>
);

module.exports=routes;
