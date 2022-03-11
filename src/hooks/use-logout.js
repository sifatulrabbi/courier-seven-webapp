import { useAuth } from '../contexts';
import { useNavigate } from 'react-router-dom';
import { useApi } from './index';

export function useLogout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const functions = {};

  functions.logout = function () {
    useApi.makeRequest('/auth/logout', 'POST', {}, (err) => {
      if (err) console.error(err);
      logout();
      navigate('/');
    });
  };

  return functions;
}
