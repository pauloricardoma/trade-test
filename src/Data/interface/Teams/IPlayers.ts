import { IDefaults } from "../Defaults/IDefaults"
import { ILeague, ITeam } from "./ITeamsStatistics";

export interface IPlayers extends IDefaults {
  response: IPlayersResponse[];
}

export interface IPlayersResponse {
  player: IPlayer;
  statistics: IStatistic[];
}

export interface IPlayer {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: IBirth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

export interface IBirth {
  date: string;
  place: string;
  country: string;
}

export interface IStatistic {
  team: ITeam;
  league: ILeague;
  games: IGames;
  substitutes: ISubstitutes;
  shots: IShots;
  goals: IGoals;
  passes: IPasses;
  tackles: ITackles;
  duels: IDuels;
  dribbles: IDribbles;
  fouls: Fouls;
  cards: ICards;
  penalty: IPenalty;
}

export interface IGames {
  appearences: number;
  lineups: number;
  minutes: number;
  number: any;
  position: string;
  rating: string;
  captain: boolean;
}

export interface ISubstitutes {
  in: number;
  out: number;
  bench: number;
}

export interface IShots {
  total: number;
  on: number;
}

export interface IGoals {
  total: number;
  conceded: any;
  assists: number;
  saves: number;
}

export interface IPasses {
  total: number;
  key: number;
  accuracy: number;
}

export interface ITackles {
  total: number;
  blocks: number;
  interceptions: number;
}

export interface IDuels {
  total: any;
  won: any;
}

export interface IDribbles {
  attempts: number;
  success: number;
  past: any;
}

export interface Fouls {
  drawn: number;
  committed: number;
}

export interface ICards {
  yellow: number;
  yellowred: number;
  red: number;
}

export interface IPenalty {
  won: number;
  commited: any;
  scored: number;
  missed: number;
  saved: any;
}
