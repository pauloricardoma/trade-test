import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from '../../Store/Auth/Auth.selectors';
import { ILoginRequest } from '../../Data/interface/Auth/ILoginRequest';
import { AuthActions } from '../../Store/Auth/Auth.action';
import Header from '../../Components/Header';
import LoginForm from '../../Components/Form';
import {
  Footer,
  FormContainer,
  Container,
  LoginTitle,
  Wrapper,
} from './styles';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(getAuth);
  const { error, isLogged, isLoading } = auth;

  useEffect(() => {
    if (isLogged && !isLoading) {
      navigate('/home');
    }
  }, [isLogged, isLoading]);

  const handleSubmit = (data: ILoginRequest) => {
    dispatch(AuthActions.login(data));
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <div className="formWrapper">
          <LoginTitle>
            <h3>Bem-vindo!</h3>
            <p>Faça o login para acessar sua conta.</p>
          </LoginTitle>

          <FormContainer>
            <LoginForm
              error={error}
              onSubmit={handleSubmit}
              loading={isLoading}
            />
          </FormContainer>

          <Footer>
            <h4>
              Ainda não possui uma Api-Key?
            </h4>
            <h4>
              Crie uma conta em:
              {' '}
              <a
                href={'https://dashboard.api-football.com/register'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Api Football
              </a>
            </h4>
            <h4>
              Para obter uma key.
            </h4>
          </Footer>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Login;
