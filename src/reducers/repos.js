const initialState = {
  reposList: [],
  isLoading: false
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_REPOS':
      return { ...state, isLoading: true }
    case 'FETCH_REPOS_REJECTED':
      return { ...state, isLoading: false }
    case 'FETCH_REPOS_FULFILLED':
      return { ...state, isLoading: false, reposList: action.payload }
    default:
      return state;
  }
}

export default user;