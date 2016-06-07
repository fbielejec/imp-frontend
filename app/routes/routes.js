/**
 * @fbielejec
 */

//---MODULE IMPORTS---//

import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {MainContainer, HomeContainer, ChartContainer} from 'containers'

//---MODULE EXPORTS---//

const ChartContainerWrapper = function () {
     return (
         <ChartContainer dataAllUrl={"/data/all"} dataMeanUrl={"/data/mean"}/>
     );
   }

const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={MainContainer}>
       <Route path='/render' component={ChartContainerWrapper} />
      <IndexRoute component={HomeContainer}/>
    </Router>
  </Router>
)

// const routes = (
//   <Router history= { hashHistory } >
//     <Route path='/' component={ChartContainerWrapper} />
//   </Router>
// )

export default routes
