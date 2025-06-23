import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const HendleContext = createContext({});

export const HendleProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    department: "",
    studentId: "",
    email: "",
    password: "",
    role: "student",
  });
  const appContext = {
    books,
    setBooks,
    userData,
    setUserData,
  };
  return (
    <HendleContext.Provider value={appContext}>
      {children}
    </HendleContext.Provider>
  );
};
