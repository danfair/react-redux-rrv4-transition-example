import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAllUsers } from '../actions/usersActions';

import UsersListing from '../components/UsersListing';

const Users = props => (
  <div>
    <UsersListing {...props} />
  </div>
)

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllUsers
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)