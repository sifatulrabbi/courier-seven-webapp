import React from "react";
import { useLocation } from "react-router-dom";
import { allLinks, userLinks } from "../assets";

const PageLinksContext = React.createContext({
  links: [],
});

export function usePageLinks() {
  return React.useContext(PageLinksContext);
}

export function PageLinksProvider({ children }) {
  const [links, setLinks] = React.useState([]);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname.split("/").includes("user")) {
      setLinks(userLinks);
    } else {
      setLinks(allLinks);
    }
  }, [location.pathname]);

  const context = {
    links,
  };

  return (
    <PageLinksContext.Provider value={context}>
      {children}
    </PageLinksContext.Provider>
  );
}
