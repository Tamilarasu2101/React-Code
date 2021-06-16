import React from "react";
import Redux from "./Redux";
import Form from "./form";
import Header from "./header";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Container">
      <Header />
      <Switch>
        <Route path="/" exact component={Redux} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
