import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import profile from "../../assets/Profile.jpg";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="bg-[#1A237E] text-white p-4">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center gap-2">
          <img className="h-12 w-18 rounded-md" src={logo} alt="library" />
          <p>
            <span className="capitalize text-xl text-[#FFEB3B]">AMOR 21</span>{" "}
            <br />
            <span className="uppercase text-xl font-bold text-[#B0BEC5]">
              library
            </span>
          </p>
        </div>
        <div className="flex gap-6 text-xl ">
          <NavLink className={"hover:text-green-700"} to="/">
            Home
          </NavLink>
          <NavLink className={"hover:text-green-700"} to="/books">
            Books
          </NavLink>
          <NavLink className={"hover:text-green-700"} to="/blog">
            Blog
          </NavLink>
          <NavLink className={"hover:text-green-700"} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className={"hover:text-green-700"} to="/dashboard">
            Admin Dashboard
          </NavLink>
          
          <NavLink className={"hover:text-green-700"} to="/about">
            About Us
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center border-1 rounded-xs">
            <input
              className="bg-[#4FC3F7] text-black hover:border-0 py-1 text-xl"
              type="text"
            />
            <button className="rounded-xs p-[10px] bg-[#4FC3F7] text-lg curser-pointer hover:bg-[#FFEB3B]">
              <HiMiniMagnifyingGlass />
            </button>
          </div>
          <img className="w-12 h-12 rounded-full" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
