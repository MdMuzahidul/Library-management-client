import React, { useContext, useEffect } from "react";
import MostPopular from "../Components/RecommededComponent/MostPopular";
import ForYou from "../Components/RecommededComponent/ForYou";
import Notice from "../Components/Notice";
import HeroSection from "../Components/HeroSection";
import { AuthContext } from "../UseContext/AuthProvider";
import { HendleContext } from "../UseContext/HendleProvider";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { currentUser, setCurrentUser } = useContext(HendleContext);

  useEffect(() => {
    if (!user?.email) {
      // Don't fetch if user email is undefined
      return;
    }
    let intervalId;
    const fetchUserData = () => {
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((response) => response.json())
        .then((data) => setCurrentUser(data))
        .catch((error) => console.error("Error fetching user data:", error));
    };
    fetchUserData(); // Initial fetch
    intervalId = setInterval(fetchUserData, 5000); // Poll every 5 seconds
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [user?.email, setCurrentUser]);

  return (
    <div>
      <Notice />
      <HeroSection />
      <MostPopular />
      {/* Show ForYou only if currentUser role is student */}
      {currentUser?.role === "student" && <ForYou />}
    </div>
  );
};

export default HomePage;
