import { combineReducers } from 'redux';

import auth from './Auth/Auth.reducer';
import leagues from './Leagues/Leagues.reducer';
import teams from './Teams/Teams.reducer';
import theme from './Theme/Theme.reducer';

export const rootReducer = combineReducers({
  auth,
  leagues,
  teams,
  theme,
});
