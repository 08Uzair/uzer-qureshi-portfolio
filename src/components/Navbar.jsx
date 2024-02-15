import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";

const Navbar = () => {
const menu = ()=>{
  document.querySelector("#hamburger-icon")
}

  return (
    <>
      <nav style={{background:'rgb(5,5,5)'}} className="bg-gray-800 dark-bg" id="navbar">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            <NavLink to='/' >
            <span className="text-xl font-bold">Uzer.</span>
            </NavLink>
            </div>
            <div className="flex items-center sm:hidden">
              <button id="hamburger-icon" className="text-white focus:outline-none">
                <a href="https://www.linkedin.com/in/uzairqureshi0803/" target="__blank"><i className="bx bxl-linkedin"></i></a>
             
              </button>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
            <NavLink to='/' className="px-3 py-2 roboto text-white">
                Home
              </NavLink>
              <NavLink to='/search'>
                Browse
              </NavLink>
              <a  href='https://www.youtube.com/channel/UC5jwEwo6qfiKM4HMkyw7ijA' target="__blank" className="px-3 py-2 roboto text-white">
                Youtube
              </a>
            <NavLink to='/about' className="px-3 py-2 roboto text-white">
                <a href={<About/>}>About</a>
              </NavLink>
              {/* <NavLink  className="px-3 py-2 text-white">
                <i className="bx bx-search-alt text-xl"></i>
              </NavLink> */}
            </div>
          </div>
        </div>
        <div id="mobile-menu" className="sm:hidden hidden bg-gray-800 dark-bg">
          <NavLink to='/' className="block py-2 px-4 roboto text-white">
            Home
          </NavLink>
          <NavLink to='/search'  className="block py-2 roboto px-4 text-white">
            Search <i className="bx bx-search-alt"></i>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
