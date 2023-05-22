import { Http } from '../Utils/Http';
import { AxiosResponse } from 'axios';
import { ILoginRequest } from './interface/Auth/ILoginRequest';
import { ILoginResponse } from './interface/Auth/IloginResponse';

export class AuthApi {
  static async login(request: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> {
    const axios = await Http.axios(request.apikey);
    return axios.get('/status');
  }
}
