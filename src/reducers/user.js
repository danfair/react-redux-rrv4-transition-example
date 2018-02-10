const initialState = {
  userData: null,
  isLoading: false
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return { ...state, isLoading: true }
    case 'FETCH_USER_REJECTED':
      return { ...state, isLoading: false }
    case 'FETCH_USER_FULFILLED':
      return { ...state, isLoading: false, userData: action.payload }
    default:
      return state;
  }
}

export default user;