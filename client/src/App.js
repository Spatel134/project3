// import { useEffect } from "react";
// import axios from "axios";
// import { response } from "express";
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
import axios from "axios";

import Home from "./pages/Home";

//   useEffect(() => {
//     axios
//       .get("api/config")
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
// import ItemCreate from "./components/ItemCreate/index";
// import ItemUpdate from "./components/ItemUpdate/index";


function App() {
  useEffect(() => {
    M.AutoInit();
    axios
      .get("/api/config")
      .then((response) => {
        console.log(`AXIOS CALL`,response.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
