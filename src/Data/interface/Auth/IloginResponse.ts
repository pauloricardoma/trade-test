import { IUserAccount, IUserRequests, IUserSubscription } from '../Auth/IUserAccount';

export interface ILoginResponse {
  apikey: string;
  account: IUserAccount;
  subscription: IUserSubscription;
  requests: IUserRequests;
}
