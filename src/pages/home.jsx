import React from 'react';
import { Hero, About, PriceCalculator } from '../components';
import FAQs from '../components/faqs';
import { useNavLinks, useAuth } from '../contexts';

export default function Home() {
  const { homeLinks } = useNavLinks();
  const { checkForUser } = useAuth();

  React.useEffect(() => {
    homeLinks();
    checkForUser();
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
