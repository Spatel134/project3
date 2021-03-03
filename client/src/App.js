import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleLocation from "./pages/ViewSingleLocation/SingleLocation";
import ViewLocations from "./pages/ViewLocations/ViewLocations";
import ItemCreate from './components/ItemCreate'
import ItemUpdate from './components/ItemUpdate'
import M from "materialize-css";
import { useEffect, useState } from "react";
import ResourceCard from "../src/components/ResourceCard";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    M.AutoInit();
    console.log(user)
  }, []);

  const [user, setUser] = useState({
    _id: ""
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/locations" component={ViewLocations} />
          <Route exact path="/api/locations/:id" component={SingleLocation} />
          <Route exact path="/items" component={ItemCreate} />
          <Route exact path="/api/:locationId/items/:id/edit" component={ItemUpdate} />
          <Route exact path="/login" component={(props) => <Login {...props} setUser={setUser} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
