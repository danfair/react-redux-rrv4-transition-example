export function getRepos(username) {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_REPOS',
    });

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((resp) => resp.json())
      .then((respJson) => {
        console.log('hi', respJson);
        dispatch({
          type: 'FETCH_REPOS_FULFILLED',
          payload: respJson
        })
      })
  }
}