/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoading, useAuth, useAlert } from '../contexts';
import { useApi } from '../hooks';

function Logout() {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const { logout } = useAuth();
  const { showAlert } = useAlert();
  const { logoutUser } = useApi();

  async function handleLogout() {
    setLoading(true);
    const result = await logoutUser();
    logout();
    showAlert(result.message, 'normal');
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1000);
  }

  React.useEffect(() => {
    handleLogout();
  }, []);

  return <div></div>;
}

export default Logout;
