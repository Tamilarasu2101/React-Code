import React from "react";

//Class Components
class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <p>This is the About Page</p>

        <p>
          My name is <b>{this.props.name}</b> and I enrolled in{" "}
          <b>{this.props.course}</b>
        </p>
      </div>
    );
  }
}

export default AboutPage;
