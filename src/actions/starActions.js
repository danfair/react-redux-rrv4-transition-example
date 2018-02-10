export function getStarred(username) {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_STARRED',
    });

    fetch(`https://api.github.com/users/${username}/starred`)
      .then((resp) => resp.json())
      .then((respJson) => {
        dispatch({
          type: 'FETCH_STARRED_FULFILLED',
          payload: respJson
        })
      })
  }
}