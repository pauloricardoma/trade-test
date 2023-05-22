import { OutButton } from './styles';
import { useNavigate } from 'react-router';
import { AuthUtils } from '../../Store/Auth/AuthUtils';

function ButtonOut() {
  const navigate = useNavigate();

  function logout() {
    AuthUtils.logout();
    navigate('/login');
  }

  return (
    <OutButton type="button" onClick={() => logout()}>
      Sair
    </OutButton>
  );
}

export default ButtonOut;
