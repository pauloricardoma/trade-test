import { ICountries } from '../../../Data/interface/Leagues/ICountries';
import { ILeagues } from '../../../Data/interface/Leagues/ILeagues';
import { ISeasons } from '../../../Data/interface/Leagues/ISeasons';
import { IReducerStateBase } from '../../../Store/Base/interface/IReducerStateBase';

export interface ILeaguesState extends IReducerStateBase {
  seasons?: ISeasons;
  countries?: ICountries;
  leagues?: ILeagues;
}
