import { Link } from 'react-router-dom';
import { Container, Info, Text } from './styles';
import { useSelector } from 'react-redux';
import { getAccount, getIsLogged, getRequests } from '../../Store/Auth/Auth.selectors';

function Logo() {
  const account = useSelector(getAccount);
  const requests = useSelector(getRequests);
  const isLogged = useSelector(getIsLogged);

  return (
    <Link to="/home" style={{ textDecoration: 'none' }}>
      <Container>
        <Text>Football.Manager</Text>
        {isLogged && (
          <Info>
            <h2>
              Bem-vindo
              {' '}
              {account?.firstname}
            </h2>
            <div className="balanceInfo">
              <h4>Requests: </h4>
              <span>{`${requests?.current} / ${requests?.limit_day}`}</span>
            </div>
          </Info>
        )}
      </Container>
    </Link>
  );
}

export default Logo;
