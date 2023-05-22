import { IDefaults } from '../Defaults/IDefaults';

export interface ITeamsStatistics extends IDefaults {
  response: ITeamsStatisticsResponse;
}

export interface ITeamsStatisticsResponse {
  league: ILeague;
  team: ITeam;
  form: string;
  fixtures: IFixtures;
  goals: IGoals;
  biggest: IBiggest;
  clean_sheet: ICleanSheet;
  failed_to_score: IFailedToScore;
  penalty: IPenalty;
  lineups: ILineup[];
  cards: ICards;
}

export interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
}

export interface IFixtures {
  played: IPlayed;
  wins: IWins;
  draws: IDraws;
  loses: ILoses;
}

export interface IPlayed {
  home: number;
  away: number;
  total: number;
}

export interface IWins {
  home: number;
  away: number;
  total: number;
}

export interface IDraws {
  home: number;
  away: number;
  total: number;
}

export interface ILoses {
  home: number;
  away: number;
  total: number;
}

export interface IGoals {
  for: IFor;
  against: IAgainst;
}

export interface IFor {
  total: ITotal;
  average: IAverage;
  minute: IMinute;
}

export interface ITotal {
  home: number;
  away: number;
  total: number;
}

export interface IAverage {
  home: string;
  away: string;
  total: string;
}

export interface IMinute {
  "0-15": N015;
  "16-30": N1630;
  "31-45": N3145;
  "46-60": N4660;
  "61-75": N6175;
  "76-90": N7690;
  "91-105": N91105;
  "106-120": N106120;
}

export interface N015 {
  total: number;
  percentage: string;
}

export interface N1630 {
  total: number;
  percentage: string;
}

export interface N3145 {
  total: number;
  percentage: string;
}

export interface N4660 {
  total: number;
  percentage: string;
}

export interface N6175 {
  total: number;
  percentage: string;
}

export interface N7690 {
  total: number;
  percentage: string;
}

export interface N91105 {
  total: number;
  percentage: string;
}

export interface N106120 {
  total: any;
  percentage: any;
}

export interface IAgainst {
  total: ITotal;
  average: IAverage;
  minute: IMinute;
}

export interface IBiggest {
  streak: IStreak;
  wins: IWins;
  loses: ILoses;
  goals: IGoals;
}

export interface IStreak {
  wins: number;
  draws: number;
  loses: number;
}

export interface ICleanSheet {
  home: number;
  away: number;
  total: number;
}

export interface IFailedToScore {
  home: number;
  away: number;
  total: number;
}

export interface IPenalty {
  scored: IScored;
  missed: IMissed;
  total: number;
}

export interface IScored {
  total: number;
  percentage: string;
}

export interface IMissed {
  total: number;
  percentage: string;
}

export interface ILineup {
  formation: string;
  played: number;
}

export interface ICards {
  yellow: IMinute;
  red: IMinute;
}
