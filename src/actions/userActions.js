export function getUser(username) {
  return (dispatch, getState) => {
    dispatch({
      type: 'FETCH_USER', 
    });

    fetch(`https://api.github.com/users/${username}`) 
      .then((resp) => resp.json())
      .then((respJson) => {
        dispatch({
          type: 'FETCH_USER_FULFILLED',
          payload: respJson
        })
      })
  }
}