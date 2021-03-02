import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleLocation from "./pages/ViewSingleLocation/SingleLocation";
import ViewLocations from "./pages/ViewLocations/ViewLocations";
import ItemCreate from './components/ItemCreate'
import ItemUpdate from './components/ItemUpdate'
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
          <Route path="/locations" component={ViewLocations} />
          <Route path="/api/locations/:id" component={SingleLocation} />
          <Route path="/items" component={ItemCreate} />
          <Route exact path="/items/:id/edit" component={ItemUpdate} />
        </Switch>
      </Router>


    </div >

  );
}

export default App;
