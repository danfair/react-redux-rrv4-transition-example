const initialState = {
  starsList: [],
  isLoading: false
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STARRED':
      return { ...state, isLoading: true }
    case 'FETCH_STARRED_REJECTED':
      return { ...state, isLoading: false }
    case 'FETCH_STARRED_FULFILLED':
      return { ...state, isLoading: false, starsList: action.payload }
    default:
      return state;
  }
}

export default user;