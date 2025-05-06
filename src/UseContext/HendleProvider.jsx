import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const HendleContext = createContext({});

export const HendleProvider = ({ children }) => {
  const [booklist, setBooklist] = useState([]);
  const appContext = {
    booklist,
    setBooklist,
  };
  return (
    <HendleContext.Provider value={appContext}>
      {children}
    </HendleContext.Provider>
  );
};
