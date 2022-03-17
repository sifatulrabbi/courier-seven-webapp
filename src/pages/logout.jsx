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

  async function doLogout() {
    setLoading(true);
    await useApi.makeRequest('/auth/logout', 'POST');
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    logout();
    showAlert('Logout successful', 'normal');
    navigate('/');
  }

  React.useEffect(() => {
    doLogout();
  }, []);

  return <div></div>;
}

export default Logout;
