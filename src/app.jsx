import React from 'react';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Providers } from './contexts';
import { Navbar, Alert } from './components';
import Footer from './components/footer';
import Login from './pages/login';
import Register from './pages/register';
import Users from './pages/users';
import { SocketProvider } from './contexts';

export default function App() {
  return (
    <Providers>
      <Navbar />
      <Alert />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/*' element={<Register />} />
        <Route
          path='/users/*'
          element={
            <SocketProvider>
              <Users />
            </SocketProvider>
          }
        />
      </Routes>
      <Footer />
    </Providers>
  );
}
