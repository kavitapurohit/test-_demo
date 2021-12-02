import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom'
import Main from '../layout/main'
import Login from '../pages/Login'
import LandingPage from '../components/customer/CustomerLandingPage'
import ProtectedRoute from './ProtectedRoute'
import PageNotFound from '../pages/PageNotFound'
import {GlobalContext} from '../context/globalContext'
import HeatMaps from '../pages/Maps/HeatMaps'
import MarkerMaps from '../pages/Maps/MarkerMaps'
import SignUp from '../pages/SignUp'


const Routes = () => {
  const {isLoggedIn} = useContext(GlobalContext)
  // console.log('context', GlobalContext)

  return (
    <Main>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          render={props => (isLoggedIn ? <HeatMaps {...props} /> : <Login {...props} />)}
        />
        <Route exact path="/customer-details" render={props =>  <LandingPage {...props} />}/>
        <Route exact path="/SignUp" render={props => <SignUp {...props} />} />
        <Route exact path="/heat-map" render={props => <HeatMaps {...props} />} />
        <Route exact path="/cluster-map" render={props => <MarkerMaps {...props} />} />

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Main>
  )
}

export default Routes
