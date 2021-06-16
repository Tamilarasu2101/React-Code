import React, { Component } from "react";
import { connect } from "react-redux";
import { addReminder } from "../actions";
class Form extends Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addReminder(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="Container">
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { addReminder: (text) => dispatch(addReminder(text)) };
};

export default connect(null, mapDispatchToProps)(Form);
