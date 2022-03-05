import React from 'react';
import { siteLinks } from '../assets';

const NavLinksContext = React.createContext({
  links: [],
  userLinks: function () {},
  homeLinks: function () {},
});

export const useNavLinks = () => React.useContext(NavLinksContext);

export const NavLinksProvider = ({ children }) => {
  const [links, setLinks] = React.useState([]);

  function userLinks() {
    setLinks(siteLinks.userLinks);
  }

  function homeLinks() {
    setLinks(siteLinks.navLinks);
  }

  React.useState(() => {
    homeLinks();
  });

  const value = {
    links,
    userLinks,
    homeLinks,
  };

  return (
    <NavLinksContext.Provider value={value}>
      {children}
    </NavLinksContext.Provider>
  );
};
