import React, { useState } from "react";
import logo from "../images/logowhy.png"
export const Navbar = () => {

    const [nav,setNav]=useState()
    return (
      <div className=" w-full h-20 flex items-center xl:gap-7 lg:gap-5 justify-between  ">
        <div className=" xl:ml-8 lg:ml-6 ml-6">
          <img
            src={logo}
            alt=""
            className=" xl:w-[260px] xl:h-[55px] lg:w-[200px] lg:h-[50px] w-[200px] h-[50px]"
          />
        </div>
       
        <div>
          <ul className=" xl:flex lg:flex  xl:gap-7 lg:gap-5 font-medium text-[#595959] hidden">
            <li>Company</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" xl:w-72 lg:w-40 xl:flex lg:flex xl:justify-center lg:justify-center lg:mr-5 hidden">
          <button className=" bg-[#f7931e] xl:w-52 xl:h-12 lg:w-40 lg:h-10 rounded-md text-white font-normal text-lg border-none xl:hover:w-60 xl:hover:h-14 xl:hover:text-black">
            GET FREE QUOTE
          </button>
        </div>
        <div className="w-6 h-6 sm:w-8 sm:h-6 mb-4 mr-8 lg:hidden text-nav-ash cursor-pointer"
              onClick={() => setNav(!nav)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div
            className={`flex flex-col w-[67%]  md:w-[40%] h-[400px] border  lg:hidden absolute left-0 top-0 bottom-0 bg-white   
                 ${
                   nav ? "translate-x-0" : "-translate-x-full overflow-hidden "
                 } ease-in-out duration-700  overflow-y`}
          >
            <img src={logo} alt="" className=" w-40 h-12 ml-3 mt-3 " />
            <ul className="  font-medium text-[#595959] flex flex-col gap-5 ml-16  mt-5">
            <li>Company</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>

          </div>
      </div>
      
    );
  };
  