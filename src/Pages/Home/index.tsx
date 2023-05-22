import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header';
import { CardCountry, CardLeague, CardSeason, ColumnCountries, ColumnLeagues, ColumnSeasons, Container, Main, Wrapper } from './styles';
import { useNavigate } from 'react-router';
import { getCountries, getSeasons } from '../../Store/Leagues/Leagues.selectors';
import { LeaguesActions } from '../../Store/Leagues/Leagues.action';
import { getLeagues } from '../../Store/Leagues/Leagues.selectors';
import { TRADE_TEST_COUNTRIES, TRADE_TEST_SEASONS } from '../../Store/Leagues/LeaguesStorageKeys';
import { diffOneDayDate } from '../../Utils/Date';
import { TeamsActions } from '../../Store/Teams/Teams.action';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const seasons = useSelector(getSeasons);
  const countries = useSelector(getCountries);
  const leagues = useSelector(getLeagues);

  const [activeSeason, setActiveSeason] = useState<number | null>(null);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [activeLeague, setActiveLeague] = useState<number | null>(null);
  const [currentSeasons, setCurrentSeasons] = useState(seasons);
  const [currentCountries, setCurrentCountries] = useState(countries);

  const hasLeagues = activeSeason && activeCountry && leagues && leagues.length > 0;

  useEffect(() => {
    const populatedSeasons = () => {
      const localCurrentSeasons = localStorage.getItem(TRADE_TEST_SEASONS);
      if (localCurrentSeasons) {
        if (diffOneDayDate(JSON.parse(localCurrentSeasons).time)) {
          return dispatch(LeaguesActions.listSeasons());
        }
        return setCurrentSeasons(JSON.parse(localCurrentSeasons).response);
      }

      if (!countries) {
        return dispatch(LeaguesActions.listSeasons());
      }
    }
    const populatedCountries = () => {
      const localCurrentCountries = localStorage.getItem(TRADE_TEST_COUNTRIES);
      if (localCurrentCountries) {
        if (diffOneDayDate(JSON.parse(localCurrentCountries).time)) {
          return dispatch(LeaguesActions.listCountries());
        }
        return setCurrentCountries(JSON.parse(localCurrentCountries).response);
      }

      if (!countries) {
        return dispatch(LeaguesActions.listCountries());
      }
    }

    populatedSeasons();
    populatedCountries();
  }, []);

  useEffect(() => {
    if (countries && countries?.length > 0) {
      localStorage.setItem(TRADE_TEST_COUNTRIES, JSON.stringify({
        time: new Date(),
        response: countries,
      }));
      setCurrentCountries(countries);
    }
  }, [countries]);

  useEffect(() => {
    if (seasons && seasons?.length > 0) {
      localStorage.setItem(TRADE_TEST_SEASONS, JSON.stringify({
        time: new Date(),
        response: seasons,
      }));
      setCurrentSeasons(seasons);
    }
  }, [seasons]);

  function handleSeason(seasonId: number) {
    setActiveSeason(seasonId);
  }

  function handleCountry(countryCode: string) {
    setActiveCountry(countryCode);
    dispatch(LeaguesActions.listLeagues(countryCode));
  }

  function handleLeague(leagueId: number) {
    setActiveLeague(leagueId);
    if (activeSeason) {
      dispatch(TeamsActions.listTeams({
        leagueId: leagueId,
        seasonId: activeSeason,
      }));
      navigate('/teams')
    }
  }

  return (
    <Wrapper>
      <Header />
      <Container>

        <div className="mainSeasons">
          <ColumnSeasons>
              <div className="columnHeader">
                <h4>Temporadas:</h4>
              </div>
              <div className="columnMain">
                {currentSeasons?.map(season => (
                  <CardSeason
                    key={`${season}`}
                    isactivecard={activeSeason === season ? 'true' : undefined}
                    onClick={() => handleSeason(season)}
                  >
                    {season}
                  </CardSeason>
                ))}
              </div>
          </ColumnSeasons>
        </div>
        <Main>
          {activeSeason && (
            <ColumnCountries>
              <div className="columnHeader">
                <h4>Países</h4>
              </div>
              <div className="columnMain">
                {currentCountries?.map((country, i) => (
                  <CardCountry
                    key={`${country.code}-${i}`}
                    isactivecard={activeCountry === country.code ? 'true' : undefined}
                    onClick={() => handleCountry(country.code)}
                  >
                    {country.name}
                    <img src={country.flag} alt="" />
                  </CardCountry>
                ))}
              </div>
            </ColumnCountries>
          )}

          {hasLeagues && (
            <ColumnLeagues>
              <div className="columnHeader">
                <h4>Ligas</h4>
              </div>
              <div className="columnMain">
                {leagues?.map((league, i) => (
                  <CardLeague
                    key={`${league.league.id}-${i}`}
                    isactivecard={activeLeague === league.league.id ? 'true' : undefined}
                    onClick={() => handleLeague(league.league.id)}
                  >
                    {league.league.name}
                    <img src={league.league.logo} alt="" />
                  </CardLeague>
                ))}
              </div>
            </ColumnLeagues>
          )}
        </Main>
      </Container>
    </Wrapper>
  );
}

export default Home;
