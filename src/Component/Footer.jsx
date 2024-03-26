import React from 'react'
import logo from "../images/logowhy.png"

export const Footer = () => {
  return (
    <div> 
      <div className="footer  ">
    <div className=" flex flex-col justify-center items-center  gap-6 md:mt-[40rem]  sm:mt-[40rem] mt-[32rem] lg:mt-[8rem] xl:mt-[8rem]">
    <img src={logo}  className=""/>
    <h1 className=" font-bold lg:text-[40px] md:text-[40px]  text-[#000000]  md:w-[80%]  sm:w-[60%] sm:text-[25px] text-center text-[18px] w-[80%]">Why settle for average when you can reign  <span className=" text-[#F89316]">supreme?</span></h1>
    
    <h2 className=" text-[#000000] font-semibold lg:w-[65%] md:w-[55%] sm:w-[55%] text-center w-[90%] text-[16px]">Transform your online presence from ordinary to extraordinary, standing out in the digital oasis of Dubai!</h2>
    <p className=" text-[#F89316] text-[14px] sm:text-[16px]" >Dive in and discover the difference.</p>
    <div className=" mt-4">
    <p className=" text-[#6B6B6A] text-[14px] mb-10">Copyright © 2024. whyglobalservice reserved.</p>
    </div>
    </div>
  </div></div>
  )
}

export default Footer;