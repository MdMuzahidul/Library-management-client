import { Outlet } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Footer from "../Footer/Footer";
import HeroSection from "../../HeroSection/HeroSection";
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
