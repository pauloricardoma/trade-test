import { all, takeLatest } from 'redux-saga/effects';
import { AuthActionKeys } from './Auth/Auth.action';
import { login } from './Auth/Auth.sagas';
import { LeaguesActionKeys } from './Leagues/Leagues.action';
import { listCountries, listLeagues, listSeasons } from './Leagues/Leagues.sagas';
import { TeamsActionKeys } from './Teams/Teams.action';
import { listPlayers, listTeams, listTeamsStatistics } from './Teams/Teams.sagas';

export function* rootSaga() {
  yield all([
    takeLatest(AuthActionKeys.AUTH_LOGIN_REQUEST, login),

    takeLatest(LeaguesActionKeys.LIST_SEASONS_REQUEST, listSeasons),
    takeLatest(LeaguesActionKeys.LIST_COUNTRIES_REQUEST, listCountries),
    takeLatest(LeaguesActionKeys.LIST_LEAGUES_REQUEST, listLeagues),

    takeLatest(TeamsActionKeys.LIST_TEAMS_REQUEST, listTeams),
    takeLatest(TeamsActionKeys.LIST_TEAMS_STATISTICS_REQUEST, listTeamsStatistics),
    takeLatest(TeamsActionKeys.LIST_PLAYERS_REQUEST, listPlayers),
  ]);
}
