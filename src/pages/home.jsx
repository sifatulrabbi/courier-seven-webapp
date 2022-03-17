import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero, About, PriceCalculator } from '../components';
import FAQs from '../components/faqs';
import { useAuth, useNavLinks } from '../contexts';

export default function Home() {
  const { homeLinks } = useNavLinks();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    homeLinks();
    if (isAuthenticated) return navigate('/users');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <About />
      <PriceCalculator />
      <FAQs />
    </>
  );
}
