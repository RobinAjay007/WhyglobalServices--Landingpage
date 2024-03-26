import React from "react";
import logo from "../images/logowhy.png"

export const Head = () => {
  return (
    <div className=" flex w-full xl:pt-16 lg:pt-10 md:pt-10 sm:pt-6 pt-16">
      <div className=" w-full flex flex-col xl:gap-9 lg:gap-6 md:gap-6 sm:gap-5 gap-6 items-center">
        <img
          className=" xl:w-72 xl:h-16 lg:w-48 lg:h-20 md:w-48 md:h-20 sm:w-44 sm:h-16 w-48 h-17 "
          src={logo}
          alt=""
        />
        <p className=" xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px] font-normal">
          Your Preferred technology Partner
        </p>
        <h2 className="  xl:font-extrabold  lg:font-extrabold  md:font-bold sm:font-bold font-semibold xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[25px] md:w-[70%] w-[90%] text-center">
          Crafting digital success through website development,
          <span className=" text-[#f7931e]">SEO finesse</span>, and social media
          mastery
        </h2>
        <div className=" flex gap-5">
          <div className=" xl:w-60 xl:h-12 lg:w-60 lg:h-12 md:w-48 md:h-10 sm:w-48 sm:h-8 w-40 h-9 bg-gray-200 flex justify-center items-center ">
            <span className=" xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-md font-medium">
              Skilled professionals
            </span>
          </div>
          <div className=" xl:w-60 xl:h-12 lg:w-60 lg:h-12 md:w-44 md:h-10 sm:w-40 sm:h-8 w-32 h-9 bg-gray-200 flex justify-center items-center">
            <span className=" xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-md  font-medium">
              {" "}
              Budget-friendly
            </span>
          </div>
        </div>
        <div className=" xl:w-[48%] lg:w-[48%] md:w-[56%] sm:w-[55%] w-[85%] flex justify-center">
          <p className="xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[17px] text-[17px] font-normal text-center">
            Maximize sales in Dubai with Why Global Services: turbocharging
            pipelines, revenue streams, and profitability with precision 💎
          </p>
        </div>
        <button className=" xl:w-56 xl:h-12 lg:w-56 lg:h-12 md:w-40 md:h-10 sm:w-40 sm:h-10 w-36 h-9 bg-[#f7931e]  rounded-md shadow-xl shadow-[#FF6826]/50 text-white text-2xl font-semibold ">
          Let's Talk
        </button>
        <p className=" xl:text-base lg:text-base md:text-base  sm:text-[15px] text-[16px] text-center w-[90%]  ">
          <span className=" text-[#00A1C7]">35+ </span>Clients |{" "}
          <span className=" text-[#00A1C7]">37,00,000+</span> ₹ in Adspend per
          month
        </p>
      </div>
    </div>
  );
};

