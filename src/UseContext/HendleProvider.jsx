import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const HendleContext = createContext({});

export const HendleProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const appContext = {
    books,
    setBooks,
  };
  return (
    <HendleContext.Provider value={appContext}>
      {children}
    </HendleContext.Provider>
  );
};
