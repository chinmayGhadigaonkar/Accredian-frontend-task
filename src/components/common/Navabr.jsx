import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import { ArrowDropDown } from "@mui/icons-material";


const Navbar = () => {

  const page = [
    {
      name : "Refer & Earn ",
      link : "/#"
    },
    {
      name : "Resources",
      link : "/#"
    },
    {
      name : "About Us",
      link : "/#"
    },
    

  ]
  

  return (
    <>
      <header className="text-gray-600 body-font  ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex space-x-5 items-center ">

          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          
            <span className="ml-2 text-primary text-2xl  font-bold">
              <img src={logo} className="w-[158px] h-[40px]" alt="logo" />


            </span>
          </Link>
          <button className="w-[120px] h-[38px]  border-2  leading-6	px-2 text-sm  bg-primary  text-white font-medium rounded-lg  ">
              Courses <ArrowDropDown />
              </button>  
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            

            {
              page.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="mr-5 text-secondary  hover:cursor-pointer font-medium text-lg hover:text-lg transition-all  px-1  hover:delay-100 hover:text-primary  hover:font-bold  hover:duration"
                    to={item.link}>
                    {item.name}
                  </Link>
                )
              })
            }
          <div className="flex items-center justify-center space-x-4">
            <button className="w-[90px] h-[38px]  border-2  leading-6	px-2  bg-[#94A3B833]  text-secondary font-medium rounded-lg  ">
              Login
              </button>
              
              <button className="w-[120px] h-[38px]  border-2  leading-6	px-2 text-sm  bg-primary  text-white font-medium rounded-lg  ">
              Try For Free
              </button>  
          </div>
          </nav>


     
        
        </div>
      </header>
    </>
  );
};

export default Navbar;