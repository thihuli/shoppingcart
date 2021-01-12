import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import Congratulations from './Pages/Congratulations';


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/congratulations'>
          <Congratulations />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;