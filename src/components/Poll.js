import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
  state = {};
  render() {
    return <div className="poll-container">{JSON.stringify(this.props)}</div>;
  }
}

function mapStateToProps({ authedUser, polls, users }, { match }) {
  const { id } = match.params;
  const poll = polls[id];

  if (!poll) {
    return {
      poll: null
    };
  }

  // reduce vote down to a signle value eg: a, b, c or d
  const vote = ["aVotes", "bVotes", "cVotes", "dVotes"].reduce((vote, key) => {
    if (vote !== null) {
      // grab the first letter eg: a, b, c or d
      return vote[0];
    }
    return poll[key].includes(authedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    authorAvatar: users[poll.author].avatarURL
  };
}

export default connect(mapStateToProps)(Poll);
