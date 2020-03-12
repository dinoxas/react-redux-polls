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
      <form onSubmit={this.handleSubmit}>
        <h3>What is your question?</h3>

        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            className="form-control"
            onChange={this.handleInputChange}
            name="question"
            type="text"
            id="question"
            value={question}
          />
        </div>
        <h3>What are the options?</h3>

        <div className="form-group">
          <label htmlFor="a">Option A</label>
          <input
            className="form-control"
            id="a"
            value={a}
            onChange={this.handleInputChange}
            name="a"
            type="text"
          />
        </div>

        <div className="form-group">
          <label className="label" htmlFor="b">
            Option B
          </label>
          <input
            className="form-control"
            id="b"
            value={b}
            onChange={this.handleInputChange}
            name="b"
            type="text"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="c">
            Option C
          </label>
          <input
            className="form-control"
            id="c"
            value={c}
            onChange={this.handleInputChange}
            name="c"
            type="text"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="d">
            Option D
          </label>
          <input
            className="form-control"
            id="d"
            value={d}
            onChange={this.handleInputChange}
            name="d"
            type="text"
          />
        </div>
        <button
          className="btn btn-dark btn-lg mb-3"
          type="submit"
          disabled={this.isDisabled()}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
