import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    showAnswered: false
  };

  showUnanswered = () => {
    this.setState(() => ({
      showAnswered: false
    }));
  };

  showAnswered = () => {
    this.setState(() => ({
      showAnswered: true
    }));
  };

  render() {
    const { showAnswered } = this.state;
    const { answered, unanswered } = this.props;
    const list = showAnswered === true ? answered : unanswered;
    return (
      <div>
        <div className="dashboard-toggle mb-5">
          <button
            style={{
              textDecoration: showAnswered === false ? "underline" : "none"
            }}
            onClick={this.showUnanswered}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={{
              textDecoration: showAnswered === true ? "underline" : "none"
            }}
            onClick={this.showAnswered}
          >
            Answered
          </button>
        </div>
        <ul className="list-unstyled">
          {list.map(poll => (
            <li key={poll.id}>
              <Link
                className="h4 mb-3 d-inline-block text-dark"
                to={`polls/${poll.id}`}
              >
                {poll.question}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, polls, users }) {
  const answers = users[authedUser].answers;
  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    answered,
    unanswered
  };
}

export default connect(mapStateToProps)(Dashboard);
