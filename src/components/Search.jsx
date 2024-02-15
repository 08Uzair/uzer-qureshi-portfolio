import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Search = ({ isLoading, setIsLoading }) => {

  return (
    <div id="browse">
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border-gray rounded-l-md focus:outline-none bg-customColor text-white hover:text-white searchBar"
         
        />
 
      </div>
    </div>
  );
};

export default Search;
