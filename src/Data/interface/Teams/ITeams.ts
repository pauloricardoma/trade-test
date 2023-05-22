import { IDefaults } from "../Defaults/IDefaults";

export interface ITeams extends IDefaults {
  response: ITeamsResponse[];
}

export interface ITeamsResponse {
  team: ITeam;
  venue: IVenue;
}

export interface ITeam {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export interface IVenue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}
