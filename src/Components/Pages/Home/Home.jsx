import { Outlet } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
