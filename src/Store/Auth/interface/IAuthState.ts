import { IUserAccount, IUserRequests, IUserSubscription } from '../../../Data/interface/Auth/IUserAccount';
import { IReducerStateBase } from '../../../Store/Base/interface/IReducerStateBase';

export interface IAuthState extends IReducerStateBase {
  apikey?: string;
  isLogged: boolean;
  account?: IUserAccount;
  subscription?: IUserSubscription;
  requests?: IUserRequests;
}
