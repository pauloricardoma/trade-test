import { IDefaults } from "../Defaults/IDefaults";

export interface ICountries extends IDefaults {
  response: ICountriesResponse[];
}

export interface ICountriesResponse {
  name: string;
  code: string;
  flag: string;
}
