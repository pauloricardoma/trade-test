
import { call, put } from 'redux-saga/effects';
import { TeamsApi } from '../../Data/TeamsApi';
import toast from '../../Utils/toast';
import {
  ListPlayersAction,
  ListTeamsAction,
  ListTeamsStatisticsAction,
  TeamsActions
} from './Teams.action';

export function* listTeams({ payload }: ListTeamsAction) {
  try {
    const { data } = yield call(TeamsApi.listTeams, payload);
    console.log(data)
    yield put(TeamsActions.listTeamsSuccess(data));
  } catch (error: any) {
    if (error.error.message !== 'Transactions not found.') {
      toast({
        type: 'danger',
        text: error.error.message,
      });
    }
    yield put(TeamsActions.listTeamsFailure(error));
  }
}

export function* listTeamsStatistics({ payload }: ListTeamsStatisticsAction) {
  try {
    const { data } = yield call(TeamsApi.listTeamsStatistics, payload);
    yield put(TeamsActions.listTeamsStatisticsSuccess(data));
  } catch (error: any) {
    if (error.error.message !== 'Transactions not found.') {
      toast({
        type: 'danger',
        text: error.error.message,
      });
    }
    yield put(TeamsActions.listTeamsStatisticsFailure(error));
  }
}

export function* listPlayers({ payload }: ListPlayersAction) {
  try {
    const { data } = yield call(TeamsApi.listPlayers, payload);
    yield put(TeamsActions.listPlayersSuccess(data));
  } catch (error: any) {
    if (error.error.message !== 'Transactions not found.') {
      toast({
        type: 'danger',
        text: error.error.message,
      });
    }
    yield put(TeamsActions.listPlayersFailure(error));
  }
}
