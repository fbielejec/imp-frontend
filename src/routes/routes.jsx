var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var ChartContainer = require('../containers/ChartContainer');
var MainContainer = require('../containers/MainContainer');

var ChartContainerWrapper = function () {
    return (
        <ChartContainer url='/results'/>
    );
  }

// var routes = (
//   <Router history= { hashHistory } >
//     <Route path='/' component={MainContainer}/>
//     <Route path='render' component={ChartContainerWrapper} />
//   </Router>
// );

var routes = (
  <Router history= { hashHistory } >
    <Route path='/' component={ChartContainerWrapper} />
  </Router>
);

module.exports=routes;
