import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onResetAll
    } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button onClick={onResetAll} className="btn btn-primary btn-sm m-2">
              Reset all
            </button>
          </div>
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
