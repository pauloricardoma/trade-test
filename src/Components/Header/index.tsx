import { useSelector } from 'react-redux';
import { getIsLogged } from '../../Store/Auth/Auth.selectors';
import ButtonOut from '../../Components/ButtonOut';
import Logo from '../../Components/Logo';
import { Container } from './styles';

function Header() {
  const isLogged = useSelector(getIsLogged);

  return (
    <Container>
      <Logo />
      <div className="right">
        {isLogged && <ButtonOut />}
      </div>
    </Container>
  );
}

export default Header;
