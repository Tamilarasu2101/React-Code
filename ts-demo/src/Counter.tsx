import React from 'react';

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 10)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 5)
    });
  };

  render () {
    return (
      <div>
        <input type="number"  value={this.state.count} />
        <button onClick={this.increment}>+10</button>
        <button onClick={this.decrement}>-5</button>
      </div>
    );
  }
}