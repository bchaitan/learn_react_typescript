import * as React from "react";
import { Component } from "react";

export interface CounterProps {}

export interface CounterState {}

class Counter extends React.Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span>{this.formatCount()} </span>
        <br></br>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
