import React, { createContext, useState } from "react";
export const AppConstext = createContext({});

const AppContext = ({ children }) => {
  const [booklist, setBooklist] = useState([]);
  const contextvalue = {
    booklist,
    setBooklist,
  };
  return (
    <AppConstext.Provider value={{ contextvalue }}>
      {children}
    </AppConstext.Provider>
  );
};

export default AppContext;
