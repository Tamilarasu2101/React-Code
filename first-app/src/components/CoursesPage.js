import React from "react";
import { Prompt } from "react-router-dom";
// class ComponentOne extends React.Component {
//   // Defining the componentWillUnmount method
//   componentWillUnmount() {
//     alert("The component is going to be unmounted");
//   }

//   render() {
//     return <h1>Hello Geeks!</h1>;
//   }
// }
class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "Building applications with react and Flux",
      author: "Cory House",
      fees: "500$",
      show: true,
    };
  }

  // getDerivedStateFromProps - use props to update as state - before rendering
  static getDerivedStateFromProps(props, state) {
    return { author: props.authorname };
  }

  // shouldComponentUpdate - to render the change or not
  shouldComponentUpdate() {
    return true;
  }

  // Change fees
  changeFees = () => {
    //set state to change fees from 500 to free
    this.setState({ fees: "free" });
  };

  // getSnapshotBeforeUpdate - get the previous data after update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("prevPrice").innerHTML =
      "You missed an offer of <b>" + prevState.fees + "</b>";
  }

  // componentDidUpdate- called after updating
  componentDidUpdate() {
    document.getElementById("currPrice").innerHTML =
      "Now Your Price is <b>" + this.state.fees + "</b>";
  }

  //componentDidMount - after rendering
  componentDidMount() {
    //change to 800 in 5 seconds if fee is 500 else remain free
    setTimeout(() => {
      if (this.state.fees === "500$") {
        this.setState({ fees: "800$" });
      } else {
        this.setState({ fees: "free" });
      }
    }, 3000);
  }

  // componentWillUnmount-called when component is removed from dom
  // delete = () => {
  //   this.setState({ show: false });
  // };

  render() {
    // let comp;
    // if (this.state.display) {
    //   comp = <ComponentOne />;
    // }
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        <p>This is the Course Page</p>
        <p>
          <b>Name : </b>
          {this.state.course}
        </p>
        <p>
          <b>Course : </b>
          {this.state.author}
        </p>
        <p>
          <b>Fees : </b>
          {this.state.fees}
        </p>
        <button type="button" onClick={this.changeFees}>
          Enroll for Free
        </button>{" "}
        <p id="prevPrice"></p>
        <p id="currPrice"></p>
        <Prompt when="true" message="Do you want to leave ?" />
        {/* <div>
          {comp}
          <button onClick={this.delete}>Delete the component</button>
        </div> */}
      </div>
    );
  }
}

export default CoursesPage;
