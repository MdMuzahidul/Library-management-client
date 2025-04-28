import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center gap-2">
          <img className="h-14 w-18 rounded-md" src={logo} alt="library" />
          <p>
            <span className="capitalize text-xl text-green-700">Amor 21</span> <br />
            <span className="uppercase text-xl font-bold text-red-600">library</span>
          </p>
        </div>
        <div className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
