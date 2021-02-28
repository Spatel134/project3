import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleLocation from "./pages/ViewSingleLocation/SingleLocation";
import ViewLocations from "./pages/ViewLocations/ViewLocations";
import M from "materialize-css";
import { useEffect } from "react";

import Home from "./pages/Home";

function App() {
  useEffect(() => {
    M.AutoInit();
    // axios
    //   .get("/api/config")
    //   .then((response) => {
    //     console.log(`AXIOS CALL`,response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/view-locations" component={ViewLocations} />
          <Route path="/single-location" component={SingleLocation} />
        </Switch>
      </Router>

    </div >

  );
}

export default App;
