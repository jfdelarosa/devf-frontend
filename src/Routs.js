import { PrivateRoute } from "./components/index.js";

import { Switch, Route } from "react-router-dom";

import {
  Home,
  Login,
  Signup,
  NotFound,
  Results,
  Company,
} from "./pages/index.js";

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/" component={Home} />
    <Route exact path="/company/:id" component={Company} />
    <PrivateRoute exact path="/results" component={Results} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

//  <PrivateRoute exact path="/logout" component={Logout}/>
