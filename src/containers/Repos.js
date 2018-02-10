import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getRepos } from '../actions/repoActions';

class Repos extends Component {
  componentDidMount() {
    this.props.getRepos(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Repos by {this.props.match.params.id}</h1>
        <ul>
          {this.props.repos.reposList.map((repo) => {
            return <li><a href={repo.html_url}>{ repo.full_name} - { repo.description }</a></li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  repos: state.repos
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getRepos
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)