var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var RenderPanelContainer = require('../containers/RenderPanelContainer');
var MainContainer = require('../containers/MainContainer');

var RenderPanelWrapper = function () {
  return (
      <RenderPanelContainer url='/data.json'/>
  );
    // return (
    //     <RenderPanelContainer url='/results'/>
    // );
  }

// var routes = (
//   <Router history= { hashHistory } >
//     <Route path='/' component={MainContainer}/>
//     <Route path='render' component={RenderPanelWrapper} />
//   </Router>
// );

var routes = (
  <Router history= { hashHistory } >
    <Route path='/' component={RenderPanelWrapper} />
  </Router>
);

module.exports=routes;
