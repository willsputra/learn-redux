// the root reducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

//routerReducer track the change of URL
const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer;