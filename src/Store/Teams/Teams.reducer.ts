import { ITeamsState } from './interface/ITeamsState';
import { TeamsActionKeys, TeamsActionUnion } from './Teams.action';

const initialState: ITeamsState = {
  isLoading: false,
  teams: undefined,
  teamsStatistics: undefined,
  players: undefined,
  error: undefined,
};

const transactionReducer = (state = initialState, action: TeamsActionUnion): ITeamsState => {
  switch (action.type) {
  case TeamsActionKeys.LIST_TEAMS_REQUEST:
    return {
      ...state,
      teams: undefined,
      isLoading: true,
      error: undefined,
    };
  case TeamsActionKeys.LIST_TEAMS_SUCCESS:
    return {
      ...state,
      teams: action.payload,
      isLoading: false,
      error: undefined,
    };
  case TeamsActionKeys.LIST_TEAMS_FAILURE:
    return {
      ...state,
      teams: undefined,
      isLoading: false,
      error: action.payload,
    };

  case TeamsActionKeys.LIST_TEAMS_STATISTICS_REQUEST:
    return {
      ...state,
      teamsStatistics: undefined,
      isLoading: true,
      error: undefined,
    };
  case TeamsActionKeys.LIST_TEAMS_STATISTICS_SUCCESS:
    return {
      ...state,
      teamsStatistics: action.payload,
      isLoading: false,
      error: undefined,
    };
  case TeamsActionKeys.LIST_TEAMS_STATISTICS_FAILURE:
    return {
      ...state,
      teamsStatistics: undefined,
      isLoading: false,
      error: action.payload,
    };

  case TeamsActionKeys.CLEAR_TEAMS_STATISTICS:
    return {
      ...state,
      teamsStatistics: undefined,
      isLoading: false,
    };

  case TeamsActionKeys.LIST_PLAYERS_REQUEST:
    return {
      ...state,
      players: undefined,
      isLoading: true,
      error: undefined,
    };
  case TeamsActionKeys.LIST_PLAYERS_SUCCESS:
    return {
      ...state,
      players: action.payload,
      isLoading: false,
      error: undefined,
    };
  case TeamsActionKeys.LIST_PLAYERS_FAILURE:
    return {
      ...state,
      players: undefined,
      isLoading: false,
      error: action.payload,
    };

  case TeamsActionKeys.CLEAR_PLAYERS:
    return {
      ...state,
      players: undefined,
      isLoading: false,
    };

  default:
    return state;
  }
};

export default transactionReducer;
