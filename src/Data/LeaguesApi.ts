import { Http } from '../Utils/Http';
import { AxiosResponse } from 'axios';
import { ILeagues } from './interface/Leagues/ILeagues';
import { ICountries } from './interface/Leagues/ICountries';
import { ISeasons } from './interface/Leagues/ISeasons';

export class LeaguesApi {
  static async listSeasons(): Promise<AxiosResponse<ISeasons>> {
    const axios = await Http.axios();
    return axios.get('/leagues/seasons');
  }

  static async listCountries(): Promise<AxiosResponse<ICountries>> {
    const axios = await Http.axios();
    return axios.get('/countries');
  }

  static async listLeagues(countryCode: string): Promise<AxiosResponse<ILeagues>> {
    const axios = await Http.axios();
    return axios.get(`/leagues?code=${countryCode}`);
  }
}
