import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getUser } from '../actions/userActions';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        User
        {this.props.isLoading &&
          <h1>Loading...</h1>
        }
        {this.props.user && this.props.user.userData &&
          <div>
            <h1>{this.props.user.userData && this.props.user.userData.login}</h1>
            <Link to={`/users/${this.props.user.userData.login}/repos`}>See {this.props.user.userData.name}'s Repos</Link>
            <Link to={`/users/${this.props.user.userData.login}/stars`}>See {this.props.user.userData.name}'s Stars</Link>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)