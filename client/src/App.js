import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleLocation from "./pages/ViewSingleLocation/SingleLocation";
import ViewLocations from "./pages/ViewLocations/ViewLocations";
import ItemCreate from "./components/ItemCreate";
import M from "materialize-css";
import { useEffect } from "react";
import ResourceCard from "../src/components/ResourceCard";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/about" component={About} />
          <Route path="/locations" component={ViewLocations} />
          <Route path="/api/locations/:id" component={SingleLocation} />
          <Route path="/forms" component={ItemCreate} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
