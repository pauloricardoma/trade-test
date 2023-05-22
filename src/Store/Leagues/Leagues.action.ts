import { ICountries } from '../../Data/interface/Leagues/ICountries';
import { ILeagues } from '../../Data/interface/Leagues/ILeagues';
import { ISeasons } from '../../Data/interface/Leagues/ISeasons';
import { Action, ActionsUnion, createAction } from '../../Store/Base/actionHelper';

export enum LeaguesActionKeys {
  LIST_SEASONS_REQUEST = 'LIST_SEASONS_REQUEST',
  LIST_SEASONS_SUCCESS = 'LIST_SEASONS_SUCCESS',
  LIST_SEASONS_FAILURE = 'LIST_SEASONS_FAILURE',

  LIST_COUNTRIES_REQUEST = 'LIST_COUNTRIES_REQUEST',
  LIST_COUNTRIES_SUCCESS = 'LIST_COUNTRIES_SUCCESS',
  LIST_COUNTRIES_FAILURE = 'LIST_COUNTRIES_FAILURE',

  LIST_LEAGUES_REQUEST = 'LIST_LEAGUES_REQUEST',
  LIST_LEAGUES_SUCCESS = 'LIST_LEAGUES_SUCCESS',
  LIST_LEAGUES_FAILURE = 'LIST_LEAGUES_FAILURE',
}

export const LeaguesActions = {
  listSeasons: (): ListSeasonsAction =>
    createAction(LeaguesActionKeys.LIST_SEASONS_REQUEST),
  listSeasonsSuccess: (response: ISeasons): ListSeasonsActionSuccess =>
    createAction(LeaguesActionKeys.LIST_SEASONS_SUCCESS, response),
  listSeasonsFailure: (error: string): ListSeasonsActionFailure =>
    createAction(LeaguesActionKeys.LIST_SEASONS_FAILURE, error),

  listCountries: (): ListCountriesAction =>
    createAction(LeaguesActionKeys.LIST_COUNTRIES_REQUEST),
  listCountriesSuccess: (response: ICountries): ListCountriesActionSuccess =>
    createAction(LeaguesActionKeys.LIST_COUNTRIES_SUCCESS, response),
  listCountriesFailure: (error: string): ListCountriesActionFailure =>
    createAction(LeaguesActionKeys.LIST_COUNTRIES_FAILURE, error),

  listLeagues: (country: string): ListLeaguesAction =>
    createAction(LeaguesActionKeys.LIST_LEAGUES_REQUEST, country),
  listLeaguesSuccess: (response: ILeagues): ListLeaguesActionSuccess =>
    createAction(LeaguesActionKeys.LIST_LEAGUES_SUCCESS, response),
  listLeaguesFailure: (error: string): ListLeaguesActionFailure =>
    createAction(LeaguesActionKeys.LIST_LEAGUES_FAILURE, error),
};

export type LeaguesActionUnion = ActionsUnion<typeof LeaguesActions>;

export type ListSeasonsAction =
  Action<LeaguesActionKeys.LIST_SEASONS_REQUEST>;
export type ListSeasonsActionSuccess =
  Action<LeaguesActionKeys.LIST_SEASONS_SUCCESS, ISeasons>;
export type ListSeasonsActionFailure =
  Action<LeaguesActionKeys.LIST_SEASONS_FAILURE, string>;

export type ListCountriesAction =
  Action<LeaguesActionKeys.LIST_COUNTRIES_REQUEST>;
export type ListCountriesActionSuccess =
  Action<LeaguesActionKeys.LIST_COUNTRIES_SUCCESS, ICountries>;
export type ListCountriesActionFailure =
  Action<LeaguesActionKeys.LIST_COUNTRIES_FAILURE, string>;

export type ListLeaguesAction =
  Action<LeaguesActionKeys.LIST_LEAGUES_REQUEST, string>;
export type ListLeaguesActionSuccess =
  Action<LeaguesActionKeys.LIST_LEAGUES_SUCCESS, ILeagues>;
export type ListLeaguesActionFailure =
  Action<LeaguesActionKeys.LIST_LEAGUES_FAILURE, string>;
