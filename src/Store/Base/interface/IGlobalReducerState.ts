import { IAuthState } from '../../../Store/Auth/interface/IAuthState';
import { ILeaguesState } from '../../Leagues/interface/ILeaguesState';
import { ITeamsState } from '../../Teams/interface/ITeamsState';
import { IThemeState } from '../../Theme/interface/IThemeState';

export interface IGlobalReducerState {
  auth: IAuthState;
  leagues: ILeaguesState;
  teams: ITeamsState;
  theme: IThemeState;
}
