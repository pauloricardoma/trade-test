import { Routes as RoutesDom, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Teams from '../Pages/teams';

export const AuthenticatedRoutes = () => {
  return (
    <RoutesDom>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/teams" element={<Teams />} />
    </RoutesDom>
  );
};

export const UnauthenticatedRoutes = () => {
  return (
    <RoutesDom>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </RoutesDom>
  );
};
