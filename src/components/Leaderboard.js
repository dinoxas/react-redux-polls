import React from "react";
import { connect } from "react-redux";

function Leaderboard({ users }) {
  return (
    <ol className="list-unstyled">
      {users.map(user => (
        <li className="user mb-3" key={user.id}>
          <img
            className="img-thumbnail"
            src={user.avatarURL}
            alt={`Avatar for ${user.name}`}
          />
          <div>
            <h3>{user.name}</h3>
            <p>{user.polls} Polls</p>
            <p>{user.answers} Answers</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map(id => {
        const { name, avatarURL, polls, answers } = users[id];
        return {
          id,
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length
        };
      })
      .sort((a, b) => b.polls + b.answers > a.polls + a.answers)
  };
}

export default connect(mapStateToProps)(Leaderboard);
