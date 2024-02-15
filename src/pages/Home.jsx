import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex justify-center items-center mt-12">
        <div className="browse_pro">
        <NavLink to='/search' >
          <Search />
        </NavLink>
          <Cards />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
