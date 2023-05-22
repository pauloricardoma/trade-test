import { call, put } from 'redux-saga/effects';
import { LeaguesApi } from '../../Data/LeaguesApi';
import { LeaguesActions, ListLeaguesAction } from './Leagues.action';
import toast from '../../Utils/toast';

export function* listSeasons() {
  try {
    const { data } = yield call(LeaguesApi.listSeasons);
    yield put(LeaguesActions.listSeasonsSuccess(data));
  } catch (error: any) {
    const errorMessage = error?.message ? error?.message : 'Erro ao listar Temporadas!';
    toast({
      type: 'danger',
      text: errorMessage,
    });
    yield put(LeaguesActions.listSeasonsFailure(errorMessage));
  }
}

export function* listCountries() {
  try {
    const { data } = yield call(LeaguesApi.listCountries);
    yield put(LeaguesActions.listCountriesSuccess(data));
  } catch (error: any) {
    const errorMessage = error?.message ? error?.message : 'Erro ao listar Países!';
    toast({
      type: 'danger',
      text: errorMessage,
    });
    yield put(LeaguesActions.listCountriesFailure(errorMessage));
  }
}

export function* listLeagues({ payload }: ListLeaguesAction) {
  try {
    const { data } = yield call(LeaguesApi.listLeagues, payload);
    yield put(LeaguesActions.listLeaguesSuccess(data));
  } catch (error: any) {
    const errorMessage = error?.message ? error?.message : 'Erro ao listar Ligas!';
    toast({
      type: 'danger',
      text: errorMessage,
    });
    yield put(LeaguesActions.listLeaguesFailure(errorMessage));
  }
}
