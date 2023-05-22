import { IPlayers } from '../../Data/interface/Teams/IPlayers';
import { IPlayersRequest } from '../../Data/interface/Teams/IPlayersRequest';
import { ITeams } from '../../Data/interface/Teams/ITeams';
import { ITeamsRequest } from '../../Data/interface/Teams/ITeamsRequest';
import { ITeamsStatistics } from '../../Data/interface/Teams/ITeamsStatistics';
import { ITeamsStatisticsRequest } from '../../Data/interface/Teams/ITeamsStatisticsRequest';
import { Action, ActionsUnion, createAction } from '../../Store/Base/actionHelper';

export enum TeamsActionKeys {
  LIST_TEAMS_REQUEST = 'LIST_TEAMS_REQUEST',
  LIST_TEAMS_SUCCESS = 'LIST_TEAMS_SUCCESS',
  LIST_TEAMS_FAILURE = 'LIST_TEAMS_FAILURE',

  LIST_TEAMS_STATISTICS_REQUEST = 'LIST_TEAMS_STATISTICS_REQUEST',
  LIST_TEAMS_STATISTICS_SUCCESS = 'LIST_TEAMS_STATISTICS_SUCCESS',
  LIST_TEAMS_STATISTICS_FAILURE = 'LIST_TEAMS_STATISTICS_FAILURE',

  CLEAR_TEAMS_STATISTICS = 'CLEAR_TEAMS_STATISTICS',

  LIST_PLAYERS_REQUEST = 'LIST_PLAYERS_REQUEST',
  LIST_PLAYERS_SUCCESS = 'LIST_PLAYERS_SUCCESS',
  LIST_PLAYERS_FAILURE = 'LIST_PLAYERS_FAILURE',

  CLEAR_PLAYERS = 'CLEAR_PLAYERS',
}

export const TeamsActions = {
  listTeams: (request: ITeamsRequest): ListTeamsAction =>
    createAction(TeamsActionKeys.LIST_TEAMS_REQUEST, request),
  listTeamsSuccess: (response: ITeams): ListTeamsActionSuccess =>
    createAction(TeamsActionKeys.LIST_TEAMS_SUCCESS, response),
  listTeamsFailure: (error: string): ListTeamsActionFailure =>
    createAction(TeamsActionKeys.LIST_TEAMS_FAILURE, error),

  listTeamsStatistics: (request: ITeamsStatisticsRequest): ListTeamsStatisticsAction =>
    createAction(TeamsActionKeys.LIST_TEAMS_STATISTICS_REQUEST, request),
  listTeamsStatisticsSuccess: (response: ITeamsStatistics): ListTeamsStatisticsActionSuccess =>
    createAction(TeamsActionKeys.LIST_TEAMS_STATISTICS_SUCCESS, response),
  listTeamsStatisticsFailure: (error: string): ListTeamsStatisticsActionFailure =>
    createAction(TeamsActionKeys.LIST_TEAMS_STATISTICS_FAILURE, error),

  clearTeamsStatistics: (): ClearTeamsStatisticsAction =>
    createAction(TeamsActionKeys.CLEAR_TEAMS_STATISTICS),

  listPlayers: (request: IPlayersRequest): ListPlayersAction =>
    createAction(TeamsActionKeys.LIST_PLAYERS_REQUEST, request),
  listPlayersSuccess: (response: IPlayers): ListPlayersActionSuccess =>
    createAction(TeamsActionKeys.LIST_PLAYERS_SUCCESS, response),
  listPlayersFailure: (error: string): ListPlayersActionFailure =>
    createAction(TeamsActionKeys.LIST_PLAYERS_FAILURE, error),

  clearPlayers: (): ClearPlayersAction =>
    createAction(TeamsActionKeys.CLEAR_PLAYERS),
};

export type TeamsActionUnion = ActionsUnion<typeof TeamsActions>;

export type ListTeamsAction =
  Action<TeamsActionKeys.LIST_TEAMS_REQUEST, ITeamsRequest>;
export type ListTeamsActionSuccess =
  Action<TeamsActionKeys.LIST_TEAMS_SUCCESS, ITeams>;
export type ListTeamsActionFailure =
  Action<TeamsActionKeys.LIST_TEAMS_FAILURE, string>;

export type ListTeamsStatisticsAction =
  Action<TeamsActionKeys.LIST_TEAMS_STATISTICS_REQUEST, ITeamsStatisticsRequest>;
export type ListTeamsStatisticsActionSuccess =
  Action<TeamsActionKeys.LIST_TEAMS_STATISTICS_SUCCESS, ITeamsStatistics>;
export type ListTeamsStatisticsActionFailure =
  Action<TeamsActionKeys.LIST_TEAMS_STATISTICS_FAILURE, string>;

export type ClearTeamsStatisticsAction =
  Action<TeamsActionKeys.CLEAR_TEAMS_STATISTICS>;

export type ListPlayersAction =
  Action<TeamsActionKeys.LIST_PLAYERS_REQUEST, IPlayersRequest>;
export type ListPlayersActionSuccess =
  Action<TeamsActionKeys.LIST_PLAYERS_SUCCESS, IPlayers>;
export type ListPlayersActionFailure =
  Action<TeamsActionKeys.LIST_PLAYERS_FAILURE, string>;

export type ClearPlayersAction =
  Action<TeamsActionKeys.CLEAR_PLAYERS>;
