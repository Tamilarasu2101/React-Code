import React from "react";
import { Link } from "react-router-dom";
//Function Component
function HomePage(props) {
  return (
    <div className="jumbotron">
      <h1>Home</h1>
      <p>This is the Home Page</p>
      <Link to="courses" className="btn btn-secondary">
        Courses Page
      </Link>
    </div>
  );
}
export default HomePage;
