import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  };
  isDisabled = () => {
    const { question, a, b, c, d } = this.state;
    return question === "" || a === "" || b === "" || c === "" || d === "";
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.history.push("/");

    this.props.dispatch(handleAddPoll(this.state));
  };
  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3>What is your question?</h3>
        <input
          className="input"
          onChange={this.handleInputChange}
          name="question"
          type="text"
          id="question"
          value={question}
        />

        <h3>What are the options?</h3>
        <label className="label" htmlFor="a">
          A.
        </label>
        <input
          className="input"
          id="a"
          value={a}
          onChange={this.handleInputChange}
          name="a"
          type="text"
        />

        <label className="label" htmlFor="b">
          B.
        </label>
        <input
          className="input"
          id="b"
          value={b}
          onChange={this.handleInputChange}
          name="b"
          type="text"
        />

        <label className="label" htmlFor="c">
          C.
        </label>
        <input
          className="input"
          id="c"
          value={c}
          onChange={this.handleInputChange}
          name="c"
          type="text"
        />

        <label className="label" htmlFor="d">
          D.
        </label>
        <input
          className="input"
          id="d"
          value={d}
          onChange={this.handleInputChange}
          name="d"
          type="text"
        />
        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
