import {combineReducers} from 'redux';

import {authReducers} from '_modules';

export default () =>
  combineReducers({
    auth: authReducers,
  });
