import { Http } from '../Utils/Http';
import { AxiosResponse } from 'axios';
import { IPlayers } from './interface/Teams/IPlayers';
import { ITeams } from './interface/Teams/ITeams';
import { ITeamsStatistics } from './interface/Teams/ITeamsStatistics';
import { ITeamsStatisticsRequest } from './interface/Teams/ITeamsStatisticsRequest';
import { ITeamsRequest } from './interface/Teams/ITeamsRequest';
import { IPlayersRequest } from './interface/Teams/IPlayersRequest';

export class TeamsApi {
  static async listTeams(request: ITeamsRequest): Promise<AxiosResponse<ITeams>> {
    const axios = await Http.axios();
    return axios.get(`/teams?league=${request.leagueId}&season=${request.seasonId}`);
  }

  static async listTeamsStatistics(request: ITeamsStatisticsRequest): Promise<AxiosResponse<ITeamsStatistics>> {
    const axios = await Http.axios();
    return axios.get(`/teams/statistics?league=${request.leagueId}&season=${request.seasonId}&team=${request.teamId}`);
  }

  static async listPlayers(request: IPlayersRequest): Promise<AxiosResponse<IPlayers>> {
    const axios = await Http.axios();
    return axios.get(`/players?team=${request.teamId}&season=${request.seasonId}`);
  }
}
