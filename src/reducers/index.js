import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import users from './users';
import repos from './repos';
import stars from './stars';

const rootReducer = combineReducers({ user, users, repos, stars, routing: routerReducer });

export default rootReducer;