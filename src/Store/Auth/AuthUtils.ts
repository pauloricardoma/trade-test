import { store } from '..';
import { IUserAccount, IUserRequests, IUserSubscription } from '../../Data/interface/Auth/IUserAccount';
import { AuthActions } from './Auth.action';
import { TRADE_ACCOUNT_KEY, TRADE_REQUESTS_KEY, TRADE_SUBSCRIPTION_KEY } from './AuthStorageKeys';

export class AuthUtils {
  static getLoggedUser(): ILoggedUser {
    return {
      account: JSON.parse(localStorage.getItem(TRADE_ACCOUNT_KEY) || '') || undefined,
      subscription: JSON.parse(localStorage.getItem(TRADE_SUBSCRIPTION_KEY) || '') || undefined,
      requests: JSON.parse(localStorage.getItem(TRADE_REQUESTS_KEY) || '') || undefined,
    };
  }

  static setLoggedUser(user: ILoggedUser) {
    localStorage.setItem(TRADE_ACCOUNT_KEY, JSON.stringify(user.account));
    localStorage.setItem(TRADE_SUBSCRIPTION_KEY, JSON.stringify(user.subscription));
    localStorage.setItem(TRADE_REQUESTS_KEY, JSON.stringify(user.requests));
  }

  static deleteLoggedUser() {
    localStorage.removeItem(TRADE_ACCOUNT_KEY);
    localStorage.removeItem(TRADE_SUBSCRIPTION_KEY);
    localStorage.removeItem(TRADE_REQUESTS_KEY);
  }

  static logout() {
    AuthUtils.deleteLoggedUser();
    store.dispatch(AuthActions.logout(false));
  }
}

export interface ILoggedUser {
  account?: IUserAccount;
  subscription?: IUserSubscription;
  requests?: IUserRequests;
}
