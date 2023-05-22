import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../Assets/styles/global';
import ToastContainer from '../../Components/Toast/ToastContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from '../../Store/Theme/Theme.selectors';
import { getIsLogged } from '../../Store/Auth/Auth.selectors';
import { AuthenticatedRoutes, UnauthenticatedRoutes } from '../../Routes';
import { useEffect } from 'react';
import { AuthUtils } from '../../Store/Auth/AuthUtils';
import { AuthActions } from '../../Store/Auth/Auth.action';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const isLogged = useSelector(getIsLogged);

  useEffect(() => {
    if (isLogged) {
      const loggedAuth = AuthUtils.getLoggedUser();
      if (loggedAuth) {
        dispatch(AuthActions.setLoggedAuth(loggedAuth));
      }
    }
  }, [isLogged, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      {isLogged && (
        <AuthenticatedRoutes />
      )}
      {!isLogged && (
        <UnauthenticatedRoutes />
      )}
    </ThemeProvider>
  );
}

export default App;
