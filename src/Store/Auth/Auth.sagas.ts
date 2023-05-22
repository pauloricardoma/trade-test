import { AuthApi } from '../../Data/AuthApi';
import { call, put } from 'redux-saga/effects';
import { AuthActions, LoginAction } from './Auth.action';
import toast from '../../Utils/toast';
import { ILoginResponse } from '../../Data/interface/Auth/IloginResponse';

export function* login({ payload }: LoginAction) {
  try {
    const { data } = yield call(AuthApi.login, payload);

    const response: ILoginResponse = {
      apikey: payload.apikey,
      ...data.response
    }
    yield put(AuthActions.loginSuccess(response));
  } catch (error: any) {
    const errorMessage = error?.message ? error?.message : 'Api Key inválida!';
    toast({
      type: 'danger',
      text: errorMessage,
    });
    yield put(AuthActions.loginFailure(errorMessage));
  }
}
