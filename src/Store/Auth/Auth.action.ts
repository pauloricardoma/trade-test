import { Action, ActionsUnion, createAction } from '../../Store/Base/actionHelper';
import { ILoginRequest } from '../../Data/interface/Auth/ILoginRequest';
import { ILoginResponse } from '../../Data/interface/Auth/IloginResponse';
import { ILoggedUser } from './AuthUtils';

export enum AuthActionKeys {
  AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST',
  AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE',

  SET_LOGGED_AUTH = 'SET_LOGGED_AUTH',

  AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export const AuthActions = {
  login: (request: ILoginRequest): LoginAction =>
    createAction(AuthActionKeys.AUTH_LOGIN_REQUEST, request),
  loginSuccess: (response: ILoginResponse): LoginActionSuccess =>
    createAction(AuthActionKeys.AUTH_LOGIN_SUCCESS, response),
  loginFailure: (error: string): LoginActionFailure =>
    createAction(AuthActionKeys.AUTH_LOGIN_FAILURE, error),

  setLoggedAuth: (loggedAuth: ILoggedUser): SetLoggedAuthAction =>
    createAction(AuthActionKeys.SET_LOGGED_AUTH, loggedAuth),

  logout: (isLogged: boolean): LogoutAction =>
    createAction(AuthActionKeys.AUTH_LOGOUT, isLogged),
};

export type AuthActionUnion = ActionsUnion<typeof AuthActions>;

export type LoginAction = Action<AuthActionKeys.AUTH_LOGIN_REQUEST, ILoginRequest>;
export type LoginActionSuccess = Action<AuthActionKeys.AUTH_LOGIN_SUCCESS, ILoginResponse>;
export type LoginActionFailure = Action<AuthActionKeys.AUTH_LOGIN_FAILURE, string>;

export type SetLoggedAuthAction = Action<AuthActionKeys.SET_LOGGED_AUTH, ILoggedUser>;

export type LogoutAction = Action<AuthActionKeys.AUTH_LOGOUT, boolean>;
