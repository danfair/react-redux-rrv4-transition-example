const initialState = [{
  username: 'davidpett',
  name: 'David Pett'
}, {
  username: 'danfair',
  name: 'Dan Fair'
}, {
  username: 'Bulldogse45',
  name: 'Matt Fair' 
}];

function users(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return state;
    default:
      return state;
  }
}

export default users;