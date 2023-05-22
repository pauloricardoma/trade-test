import { IGlobalReducerState } from "../Base/interface/IGlobalReducerState";

export const getSeasons = (state: IGlobalReducerState) => state.leagues.seasons?.response;

export const getCountries = (state: IGlobalReducerState) => state.leagues.countries?.response;

export const getLeagues = (state: IGlobalReducerState) => state.leagues.leagues?.response;
