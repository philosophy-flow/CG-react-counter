import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, interval: null };
    this.startCount = this.startCount.bind(this);
    this.stopCount = this.stopCount.bind(this);
    this.clearCount = this.clearCount.bind(this);
  }

  // increments current count by 1
  counter() {
    this.setState({ count: this.state.count + 1 });
  }

  // starts timer that increases count by 1 every 1 second
  startCount() {
    console.log("starting count");
    this.setState({ interval: setInterval(() => this.counter(), 1000) });
  }

  // stops the timer and thus stops count
  stopCount() {
    console.log("stopping count");
    clearInterval(this.state.interval);
  }

  // stops the timer and clears current count value
  clearCount() {
    console.log("clearing count");
    clearInterval(this.state.interval);
    this.setState({ count: 0, interval: null });
  }

  // clears interval in case component unmounts before it is manually stopped
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.startCount}>Start Counter</button>
        <button onClick={this.stopCount}>Stop Counter</button>
        <button onClick={this.clearCount}>Clear Counter</button>
      </>
    );
  }
}

export default Counter;
