import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import VideoPage from "./pages/VideoPage";


function App() {
 

  return (
    <div>
      <Router>
        <Switch>
      <Route path = "/"><WelcomePage/></Route>
      </Switch>
    <Switch>
      <Route path = "/video"><VideoPage/></Route>
    </Switch>
      </Router>
    </div>
   
  );
}

export default App;
