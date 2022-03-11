import React from 'react';
import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Providers } from './contexts';
import { Navbar } from './components';
import Footer from './components/footer';
import Login from './pages/login';
import Register from './pages/register';
import Users from './pages/users';

export default function App() {
  return (
    <Providers>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/*' element={<Register />} />
        <Route path='/users/*' element={<Users />} />
      </Routes>
      <Footer />
    </Providers>
  );
}
