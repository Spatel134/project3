// import { useEffect } from "react";
// import axios from "axios";
// import { response } from "express";
// import ItemCreate from "./components/ItemCreate/index";
// import ItemUpdate from "./components/ItemUpdate/index";
import M from "materialize-css";
import { useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home";

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
      <Home />
    </div>
  );
}

export default App;
