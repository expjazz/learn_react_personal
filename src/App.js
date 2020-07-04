import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
export default App;
