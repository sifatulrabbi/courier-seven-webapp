import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollableLinks() {
  const [elementId, setElementId] = React.useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function doScroll() {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      document.documentElement.scrollTo(0, 0);
    }
  }

  return function scrollTo(id) {
    setElementId(id);

    if (pathname === '/') {
      console.log(pathname);
      doScroll();
      return;
    }

    navigate('/', { replace: true });
    setTimeout(() => {
      doScroll();
    }, [500]);
  };
}
