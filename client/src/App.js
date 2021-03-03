import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleLocation from "./pages/ViewSingleLocation/SingleLocation";
import ViewLocations from "./pages/ViewLocations/ViewLocations";
import ItemCreate from "./components/ItemCreate";
import ItemUpdate from "./components/ItemUpdate";
import M from "materialize-css";
import { useEffect, useState } from "react";
import AdminHome from "./pages/AdminHome";
import ResourceCard from "../src/components/ResourceCard";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import CreateLocation from "./pages/CreateLocation/index";
import Login from "./pages/Login";
import LocationCreate from "./pages/LocationCreate";
import EditLocation from "./pages/LocationUpdate";
import AdminContext from "./Context/AdminContext";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [admin, setAdmin] = useState({
    _id: "",
    email: "",
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/locations" component={ViewLocations} />
          <Route exact path="/locations/:id" component={SingleLocation} />
          <Route exact path="/items" component={ItemCreate} />
          <Route
            exact
            path="/:locationId/items/:id/edit"
            component={ItemUpdate}
          />
                    <Route exact path="/admin/locations" component={ViewLocations} />

          <Route
            exact
            path="/admin/location/create"
            component={LocationCreate}
          />
          <Route exact path="/admin/locations/:id" component={SingleLocation} />
          <Route
            exact
            path="/admin/locations/:id/edit"
            component={EditLocation}
          />
          <Route
            exact
            path="/api/:locationId/items/:id/edit"
            component={ItemUpdate}
          />

          {/* admin access */}
          <AdminContext.Provider value={{ admin, setAdmin }}>
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/admin/location/create"
              component={CreateLocation}
            />
            <Route exact path="/admin/:adminId" component={AdminHome} />
          </AdminContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
