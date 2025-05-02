import { Outlet } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Footer from "../Footer/Footer";
import HeroSection from "../../HeroSection/HeroSection";
import Marque from "../../Marque/Marque";
import MostPopular from "../../MostPopular/MostPopular";

const Home = () => {
  return (
    <div>
      <Header />
      <Marque />
      <HeroSection />
      <Outlet />
      <MostPopular />
      <Footer />
    </div>
  );
};

export default Home;
