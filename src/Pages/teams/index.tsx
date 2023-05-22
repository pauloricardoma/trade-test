import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header';
import { Container, Main, TablePlayers, TableTeams, Wrapper } from './styles';
import { useNavigate } from 'react-router';
import { getPlayers, getTeams, getTeamsParameters, getTeamsStatistics } from '../../Store/Teams/Teams.selectors';
import Button from '../../Components/Button';
import Modal from '../../Components/Modal';
import { TeamsActions } from '../../Store/Teams/Teams.action';
import { ILineup, ITeamsStatisticsResponse } from '../../Data/interface/Teams/ITeamsStatistics';
import { IPlayersResponse } from '../../Data/interface/Teams/IPlayers';

function Teams() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        >
          <div>
            <span>Formação mais utilizada: </span>
            <span>
              {activeTeamsStatistics?.lineups.reduce((acc, curr) => {
              if (acc.played > curr.played) return acc;
              else return acc = curr;
              }, {} as ILineup).formation}
            </span>
          </div>


          <TablePlayers>
            <thead>
              <tr>
                <th>Name</th>
                <th>Idade</th>
                <th>Nascionalidade</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {activePlayers?.map((player, i) => (
                <tr key={`${player.player.id}-${i}`}>
                  <td>{player.player.name}</td>
                  <td>{player.player.age}</td>
                  <td>{player.player.nationality}</td>
                  <td>
                    <img src={player.player.photo} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </TablePlayers>
        </Modal>
      )}
    </Wrapper>
  );
}

export default Teams;
