import { createContext, useState, useEffect } from "react";

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
  
  // Initialize currentUser from localStorage or set to null
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("currentUser");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error loading user from localStorage:", error);
      return null;
    }
  });

  // Save currentUser to localStorage whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const appContext = {
    books,
    setBooks,
    userData,
    setUserData,
    currentUser,
    setCurrentUser,
  };
  return (
    <HendleContext.Provider value={appContext}>
      {children}
    </HendleContext.Provider>
  );
};
