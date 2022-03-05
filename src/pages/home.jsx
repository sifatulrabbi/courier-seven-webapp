import React from 'react';
import { Hero, About, PriceCalculator } from '../components';
import FAQs from '../components/faqs';
import { useNavLinks } from '../contexts';

export default function Home() {
  const { homeLinks } = useNavLinks();

  React.useEffect(() => {
    homeLinks();
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
