import { IGlobalReducerState } from "../Base/interface/IGlobalReducerState";

export const getTeamsParameters = (state: IGlobalReducerState) => state.teams.teams?.parameters;

export const getTeams = (state: IGlobalReducerState) => state.teams.teams?.response;

export const getTeamsStatistics = (state: IGlobalReducerState) => state.teams.teamsStatistics?.response;

export const getPlayers = (state: IGlobalReducerState) => state.teams.players?.response;
