import React from "react";
import {
  Link,
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function UrlParams() {
  return (
    <Router>
      <div>
        <h2>Change Input Fields</h2>
        {/* change url based on click the link */}
        <Link to="/text">Text</Link> | <Link to="/password">Password</Link> |
        <Link to="/button">Button</Link> | <Link to="/range">Range</Link>
        <Switch>
          <Route path="/:type" children={<Result />} />
        </Switch>
      </div>
    </Router>
  );
}
export default UrlParams;

function Result() {
  let { type } = useParams();

  return (
    <div class="bg-light">
      &emsp;
      {/* input type changes based on url */}
      <input
        type={type}
        value="50"
        class={type === "button" ? "btn btn-success" : "form-control"}
      />
    </div>
  );
}
