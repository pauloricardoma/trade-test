import { IDefaults } from "../Defaults/IDefaults"
import { ICountriesResponse } from "./ICountries"

export interface ILeagues extends IDefaults {
  response: ILeaguesResponse[]
}

export interface ILeaguesResponse {
  league: ILeague;
  country: ICountriesResponse;
  seasons: ISeason[];
}

export interface ILeague {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface ISeason {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: ICoverage;
}

export interface ICoverage {
  fixtures: IFixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface IFixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}
