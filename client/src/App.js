// import { useEffect } from "react";
// import axios from "axios";
// import { response } from "express";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleFridge from "./pages/SingleFridge";
import ViewFridge from "./pages/ViewFrigde";
import M from "materialize-css";
import { useEffect } from "react";

import Home from './pages/Home'

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
  });
  return (

    <div className="App">
      <Home />
      <Router>
        <Switch>
          <Route path="/view-fridge" component={ViewFridge} />
          <Route path="/single-fridge" component={SingleFridge} />
        </Switch>
      </Router>

    </div >

  );
}

export default App;
