import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
  getClasses() {
    let classes = "badge m-2 ";

    classes +=
      this.formatCount() === "Zero" ? "badge-warning" : "badge-primary";
    return classes;
  }
}

export default Counter;
