import { IReducerStateBase } from '../../../Store/Base/interface/IReducerStateBase';
import { ITeams } from '../../../Data/interface/Teams/ITeams';
import { ITeamsStatistics } from '../../../Data/interface/Teams/ITeamsStatistics';
import { IPlayers } from '../../../Data/interface/Teams/IPlayers';

export interface ITeamsState extends IReducerStateBase {
  teams?: ITeams;
  teamsStatistics?: ITeamsStatistics;
  players?: IPlayers;
}
