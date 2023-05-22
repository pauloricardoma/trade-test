
import { AuthActionKeys, AuthActionUnion } from './Auth.action';
import { TRADE_API_KEY } from './AuthStorageKeys';
import { AuthUtils, ILoggedUser } from './AuthUtils';
import { IAuthState } from './interface/IAuthState';

const apikey = localStorage.getItem(TRADE_API_KEY) || undefined;
console.log(apikey)
let newState: IAuthState;
let validApikey: string;
let persistAuth: ILoggedUser;

const initialState: IAuthState = {
  apikey: apikey || undefined,
  isLogged: !!apikey,
  account:undefined,
  subscription:undefined,
  requests:undefined,
  isLoading: false,
};

const authReducer = (state = initialState, action: AuthActionUnion): IAuthState => {
  switch (action.type) {
  case AuthActionKeys.AUTH_LOGIN_REQUEST:
    return {
      ...state,
      apikey: undefined,
      isLogged: false,
      account: undefined,
      subscription: undefined,
      requests: undefined,
      isLoading: true,
      error: undefined,
    };
  case AuthActionKeys.AUTH_LOGIN_SUCCESS:
    newState = {...state};
    validApikey = action.payload.apikey;

    if (validApikey) {
      localStorage.setItem(TRADE_API_KEY, validApikey);
    }

    AuthUtils.setLoggedUser({
      account: action.payload.account,
      subscription: action.payload.subscription,
      requests: action.payload.requests
    });

    newState.apikey = validApikey;
    newState.account = action.payload.account;
    newState.subscription = action.payload.subscription;
    newState.requests = action.payload.requests;

    return {
      ...state,
      ...newState,
      isLoading: false,
      isLogged: true,
      error: undefined,
    };
  case AuthActionKeys.AUTH_LOGIN_FAILURE:
    return {
      ...state,
      apikey: undefined,
      isLogged: false,
      account: undefined,
      subscription: undefined,
      requests: undefined,
      isLoading: false,
      error: action.payload,
    };

  case AuthActionKeys.SET_LOGGED_AUTH:
    newState = {...state};
    persistAuth = action.payload;

    newState.account = persistAuth.account;
    newState.subscription = persistAuth.subscription;
    newState.requests = persistAuth.requests;

    return {
      ...state,
      ...newState,
    };

  case AuthActionKeys.AUTH_LOGOUT:
    localStorage.removeItem(TRADE_API_KEY);

    return {
      ...state,
      isLogged: false,
      apikey: undefined,
      account: undefined,
      subscription: undefined,
      requests: undefined,
    };

  default:
    return state;
  }
};

export default authReducer;
