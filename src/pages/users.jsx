import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/protected-route';
import UsersDashboard from '../components/users-dashboard';
import { CreateParcel, Parcels } from '../components';
import ParcelView from '../components/parcel-view';
import { useNavLinks } from '../contexts';

const Users = () => {
  const { userLinks } = useNavLinks();
  const [animation, setAnimation] = React.useState('');

  React.useEffect(() => {
    userLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setAnimation('on-mount 0.6s ease-out forwards');
  }, []);

  return (
    <Container
      fluid
      style={{
        padding: 0,
        paddingTop: '90px',
        paddingBottom: '90px',
        animation: animation,
      }}
    >
      <Routes>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/' element={<UsersDashboard />} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          <Route
            path='/parcels/*'
            element={
              <Routes>
                <Route path='/' element={<Parcels />} />
                <Route path='/:id' element={<ParcelView />} />
              </Routes>
            }
          />
          <Route path='/create-parcel' element={<CreateParcel />} />
          <Route path='/tracking' element={<h1>Tracking</h1>} />
          <Route path='/payments' element={<h1>Tracking</h1>} />
          <Route path='/logout' element={<h1>Logout</h1>} />
        </Route>
      </Routes>
    </Container>
  );
};

export default Users;
