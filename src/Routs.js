import {
    PrivateRoute
  } from './components/index.js'
  
  import {
    Switch,
    Route
  } from 'react-router-dom'
  
import {
    Home, Login, Signup, NotFound, Results,
} from './pages/index.js'
  
  
  const Routes = () => (
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <PrivateRoute exact path="/" component={Home}/>
        <PrivateRoute exact path="/results" component={Results}/>
        <Route component={NotFound}/>
      </Switch>
   )
  
   export default Routes

   //  <PrivateRoute exact path="/logout" component={Logout}/>