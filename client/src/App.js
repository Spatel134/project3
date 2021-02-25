// import { useEffect } from "react";
// import axios from "axios";
// import { response } from "express";

import Home from './pages/Home'

function App() {
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
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
