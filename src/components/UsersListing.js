import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsersListing extends Component {
  render() {
    return (
      <div>
        Users listing:
        <ul>
          {this.props.users.map((user) => {
            return <li key={user.username}>
              <Link to={`/users/${user.username}`}>{user.name} ( {user.username} )</Link></li>
          })}
        </ul>
      </div>
    );
  }
}

export default UsersListing;