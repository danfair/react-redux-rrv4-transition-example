import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getStarred } from '../actions/starActions';

class Stars extends Component {
  componentDidMount() {
    this.props.getStarred(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Starred by {this.props.match.params.id}</h1>
        <ul>
          {this.props.stars.starsList.map((repo) => {
            return <li><a href={repo.html_url}>{repo.full_name} - {repo.description}</a></li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  stars: state.stars
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getStarred
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stars)