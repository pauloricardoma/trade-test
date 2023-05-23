import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header';
import { CardStatistics, Container, Main, TablePlayers, TablePlayersContainer, TableStatistics, TableTeams, Wrapper } from './styles';
// import { useNavigate } from 'react-router';
import { getPlayers, getTeams, getTeamsParameters, getTeamsStatistics } from '../../Store/Teams/Teams.selectors';
import Button from '../../Components/Button';
import Modal from '../../Components/Modal';
import { TeamsActions } from '../../Store/Teams/Teams.action';
import { ILineup, ITeamsStatisticsResponse } from '../../Data/interface/Teams/ITeamsStatistics';
import { IPlayersResponse } from '../../Data/interface/Teams/IPlayers';

function Teams() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const teams = useSelector(getTeams);
  const teamsStatistics = useSelector(getTeamsStatistics);
  const teamsParameters = useSelector(getTeamsParameters);
  const players = useSelector(getPlayers);

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [activeTeamsStatistics, setTeamsStatistics] = useState<ITeamsStatisticsResponse | null>(null);
  const [activePlayers, setPlayers] = useState<IPlayersResponse[] | null>(null);

  useEffect(() => {
    return () => {
      handleCloseInfo();
    }
  }, []);

  useEffect(() => {
    if (teamsStatistics && players) {
      handleOpenInfo(teamsStatistics, players);
    }
  }, [teamsStatistics, players]);

  const handleTeamInfo = (teamId: number) => {
    dispatch(TeamsActions.listTeamsStatistics({
      leagueId: Number(teamsParameters.league),
      seasonId: Number(teamsParameters.season),
      teamId: teamId,
    }));
    dispatch(TeamsActions.listPlayers({
      seasonId: Number(teamsParameters.season),
      teamId: teamId,
    }));
  }
  console.log(activeTeamsStatistics)

  const handleOpenInfo = (team: ITeamsStatisticsResponse, players: IPlayersResponse[]) => {
    setTeamsStatistics(team);
    setPlayers(players);
    setShowInfoModal(true);
  }

  const handleCloseInfo = () => {
    dispatch(TeamsActions.clearTeamsStatistics());
    dispatch(TeamsActions.clearPlayers());
    setTeamsStatistics(null);
    setShowInfoModal(false);
  }

  return (
    <Wrapper>
      <Header />
      <Container>

        <Main>
          <TableTeams>
            <thead>
              <tr>
                <th>Código</th>
                <th>Bandeira</th>
                <th>Nome</th>
                <th>Desde</th>
                <th>Estádio</th>
                <th>Capacidade</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {teams?.map((team, i) => (
                <tr key={`${team.team.id}-${i}`}>
                  <td>{team.team.id}</td>
                  <td>
                    <img src={team.team.logo} alt="" />
                  </td>
                  <td>{team.team.name}</td>
                  <td>{team.team.founded}</td>
                  <td>{team.venue.name}</td>
                  <td>{team.venue.capacity}</td>
                  <td>
                    <Button
                      onClick={() => handleTeamInfo(team.team.id)}
                    >
                      Info
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableTeams>
        </Main>
      </Container>

      {(showInfoModal && activeTeamsStatistics && activePlayers) && (
        <Modal
          title={`${activeTeamsStatistics?.team.name} estatísticas`}
          visible={showInfoModal}
          cancelLabel="Voltar"
          onCancel={() => handleCloseInfo()}
          confirmLabel="Listar Jogadores"
          onConfirm={() => undefined}
          maxWidth="500px"
        >
          <CardStatistics>
            <div className="containerSeparate">
              <div className="separate">
                <span>Jogos: </span>
                <span>{activeTeamsStatistics.fixtures.played.total}</span>
              </div>
              <div className="separate">
                <span>Vitórias: </span>
                <span>{activeTeamsStatistics.fixtures.wins.total}</span>
              </div>
            </div>
            <div className="containerSeparate">
              <div className="separate">
                <span>Derrotas: </span>
                <span>{activeTeamsStatistics.fixtures.loses.total}</span>
              </div>
              <div className="separate">
                <span>Empates: </span>
                <span>{activeTeamsStatistics.fixtures.draws.total}</span>
              </div>
            </div>
            <div>
              <span className="goalsTitle"> - Gols por tempo de jogo - </span>
              <div>
                <TableStatistics>
                  <thead>
                    <tr>
                      {Object.entries(activeTeamsStatistics.goals.for.minute).map(([key, value]) => (
                        <th>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {Object.entries(activeTeamsStatistics.goals.for.minute).map(([key, value]) => (
                        <td>{value.total}</td>
                      ))}
                    </tr>
                  </tbody>
                </TableStatistics>
              </div>
            </div>
            <div>
              <span>Formação mais utilizada: </span>
              <span>
                {activeTeamsStatistics?.lineups.reduce((acc, curr) => {
                if (acc.played > curr.played) return acc;
                else return acc = curr;
                }, {} as ILineup).formation}
              </span>
            </div>
          </CardStatistics>


          <TablePlayersContainer>
            <TablePlayers>
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="w28">Idade</th>
                  <th>Nascionalidade</th>
                </tr>
              </thead>

              <tbody>
                {activePlayers?.map((player, i) => (
                  <tr key={`${player.player.id}-${i}`}>
                    <td>
                      <span>
                        <img src={player.player.photo} alt="" />
                        {player.player.name}
                      </span>
                    </td>
                    <td className="w28">{player.player.age}</td>
                    <td>{player.player.nationality}</td>
                  </tr>
                ))}
              </tbody>
            </TablePlayers>
          </TablePlayersContainer>
        </Modal>
      )}
    </Wrapper>
  );
}

export default Teams;
