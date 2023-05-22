import { LeaguesActionKeys, LeaguesActionUnion } from './Leagues.action';
import { ILeaguesState } from './interface/ILeaguesState';

const initialState: ILeaguesState = {
  seasons: undefined,
  countries: undefined,
  leagues: undefined,
  isLoading: false,
  error: undefined,
};

const accountReducer = (state = initialState, action: LeaguesActionUnion): ILeaguesState => {
  switch (action.type) {
  case LeaguesActionKeys.LIST_SEASONS_REQUEST:
    return {
      ...state,
      seasons: undefined,
      isLoading: true,
      error: undefined,
    };
  case LeaguesActionKeys.LIST_SEASONS_SUCCESS:
    return {
      ...state,
      seasons: action.payload,
      isLoading: false,
      error: undefined,
    };
  case LeaguesActionKeys.LIST_SEASONS_FAILURE:
    return {
      ...state,
      seasons: undefined,
      isLoading: false,
      error: action.payload,
    };

  case LeaguesActionKeys.LIST_COUNTRIES_REQUEST:
    return {
      ...state,
      countries: undefined,
      isLoading: true,
      error: undefined,
    };
  case LeaguesActionKeys.LIST_COUNTRIES_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      isLoading: false,
      error: undefined,
    };
  case LeaguesActionKeys.LIST_COUNTRIES_FAILURE:
    return {
      ...state,
      countries: undefined,
      isLoading: false,
      error: action.payload,
    };

  case LeaguesActionKeys.LIST_LEAGUES_REQUEST:
    return {
      ...state,
      leagues: undefined,
      isLoading: true,
      error: undefined,
    };
  case LeaguesActionKeys.LIST_LEAGUES_SUCCESS:
    return {
      ...state,
      leagues: action.payload,
      isLoading: false,
      error: undefined,
    };
  case LeaguesActionKeys.LIST_LEAGUES_FAILURE:
    return {
      ...state,
      leagues: undefined,
      isLoading: false,
      error: action.payload,
    };

  default:
    return state;
  }
};

export default accountReducer;
