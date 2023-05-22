import axios, { AxiosHeaders, AxiosInstance } from 'axios';
import { TRADE_API_KEY } from '../Store/Auth/AuthStorageKeys';

export class Http {
  static async axios(apikey?: string): Promise<AxiosInstance> {
    return new Promise((resolve) => {
      const authorization = localStorage.getItem(TRADE_API_KEY);

      const headers = new AxiosHeaders();
      if (authorization || apikey) headers.set('x-rapidapi-key', authorization || apikey);
      headers.set('x-rapidapi-host', 'v3.football.api-sports.io');

      const instance = axios.create({
        baseURL: 'https://v3.football.api-sports.io',
        headers,
      });

      instance.interceptors.response.use(undefined, Http.resolveErros);

      return resolve(instance);
    });
  }

  static resolveErros(err: any) {
    const res = err.response;
    let serverError = {};
    switch (res.status) {
    case 500:
      serverError = {
        error: { message: 'Erro inesperado no servidor' },
      };
      throw serverError;
    default:
      throw err.response.data;
    }
  }
}
