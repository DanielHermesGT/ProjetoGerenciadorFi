import React from "react";
import { Router } from "react-router-dom";

import history from "./service/history";
import Globalstyle from './styleglob/globalstyle'
import Routers from "./routes";


function App() {


  return (

    <Router history={history}>
      <Routers />
      <Globalstyle />

    </Router>
  );
}

export default App;
