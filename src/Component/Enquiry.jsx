import React, { useState } from "react";


export const Enquiry = () => {
  return (
    <div >
      <div className="mt-6  lg:flex lg:flex-row md:flex-col  xl:flex-row md:flex sm:flex sm:flex-col items-center h-screen ">
        <div className="lg:w-[90%] md:w-[95%]  sm:w-[90%] w-[90%]  ">
          <div className=" w-[100%] sm:h-[46rem] lg:w-[100%] lg:h-[600px] md:w-[90%] md:h-[39rem] sm:w-[95%]  ml-4  sm:ml-4  md:ml-10  lg:ml-14 lg:mt-16 bg-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] border  rounded-3xl  ">
            <h2 className=" text-[#F89316] font-bold text-[20px] text-center  ml-4  p-1 mt-4 ">
              FAQ 
            </h2> 
            <div className="m-2 space-y-2 flex flex-col justify-center items-center gap-1  mt-2">
      <div
        className="group flex flex-col gap-2 rounded-lg bg-[#4EA8DB] p-5 text-black w-[90%]  "
        tabindex="1" 
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span  className=" font-bold  lg:text-sm"> What features are included in your website plans? </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-700 group-focus:-rotate-180"
          />
        </div>
        <div className=" lg:text-sm invisible h-auto max-h-0 items-center opacity-0 duration-700 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-[1000ms]">
          Our website plans include a variety of features such as customizable
          templates, domain registration, hosting services, e-commerce
          capabilities, SEO tools, analytics, and customer support. The specific
          features vary depending on the plan you choose.
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded-lg bg-[#4EA8DB] p-5 text-black w-[90%]  "
        tabindex="2"
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span className=" font-bold lg:text-sm ">How do I get started with purchasing a website plan?</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-700  group-focus:-rotate-180"
          />
        </div>
        <div className=" lg:text-sm invisible h-auto max-h-0 items-center opacity-0 duration-700 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-[1000ms]">
          Getting started is easy! Simply explore our website plans on our
          website, select the plan that best fits your needs, and follow the
          prompts to complete your purchase securely. If you have any questions
          or need assistance, our customer support team is here to help.
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded-lg bg-[#4EA8DB] p-5 text-black w-[90%]  "
        tabindex="3"
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span  className=" font-bold lg:text-sm "> What services are included in a typical SMM package? </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-700 group-focus:-rotate-180"
          />
        </div>
        <div className=" lg:text-sm invisible h-auto max-h-0 items-center opacity-0 duration-700 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-[1000ms]">
          A typical SMM package may include services such as social media
          account setup and optimization, content creation and posting,
          community management, social media advertising, analytics and
          reporting, and strategy development.
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded-lg bg-[#4EA8DB] p-5 text-black w-[90%] "
        tabindex="4"
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span  className=" font-bold lg:text-sm">
            How do I determine which social media platforms are right for my
            business?
          </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
          />
        </div>
        <div className=" lg:text-sm invisible h-auto max-h-0 items-center opacity-0 duration-700 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-[1000ms]">
          The choice of social media platforms depends on your target audience
          and business goals. Conduct research to identify where your target
          audience spends their time online and which platforms are most
          relevant to your industry.
        </div>
      </div>

      <div
        className="group flex flex-col gap-2 rounded-lg bg-[#4EA8DB] p-5 text-black w-[90%] "
        tabindex="5"
      >
        <div className="flex cursor-pointer items-center justify-between">
          <span  className=" font-bold lg:text-sm ">
            How long does it take to see results from social media marketing?{" "}
          </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            className="h-2 w-3 transition-all duration-700 group-focus:-rotate-180"
          />
        </div>
        <div className=" lg:text-sm invisible h-auto max-h-0 items-center opacity-0 duration-700 group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-[1000ms]">
          The timeline for seeing results from social media marketing can vary
          depending on factors such as the quality of your content, frequency of
          posting, engagement with your audience, and the effectiveness of your
          advertising campaigns. 
        </div>
      </div>
    </div>  


          
          </div>
        </div>
        <div className=" flex justify-center items-center sm:w-[95%] w-full ">
          <div className=" lg:ml-12 xl:w-[459px] xl:h-[553px]  lg:w-[400px] lg:h-[553px] md:w-[91%]  lg:mt-20 md:h-[450px] md:mt-10 sm:w-[90%]  sm:mt-6 sm:h-[480px] w-[90%] mt-4 h-[440px]  bg-[#FFFFFF] shadow-[0_3px_10px_rgb(0,0,0,0.2)] border  rounded-3xl flex  flex-col  justify-center items-center   gap-5  ">
            <h1 className="   text-[#F89316] font-bold text-[20px]">
              ENQUIRY FORM
            </h1>
            <form action="" className=" w-full flex flex-col  justify-center items-center gap-8 ml-5">
              <div className=" w-[90%] flex flex-col gap-1 ">
                <input
                  placeholder="Name"
                  type="text"
                  className="border-b    xl:w-[360px] xl:h-[45px]  lg:w-[300px] lg:h-[45px]  md:w-[90%] md:h-8 sm:w-[90%] sm:h-[40px] w-[90%] h-[40px] text-black outline outline-0  placeholder-shown:border-black placeholder-black focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-1 focus:placeholder:opacity-100  rounded-sm"
                />
              </div>
              <div className="  w-[90%]   flex flex-col gap-1">
              <input
                  placeholder="Mobile Number"
                  type="text"
                  className="border-b  xl:w-[360px] xl:h-[45px]  lg:w-[300px] lg:h-[45px]  md:w-[90%] md:h-8 sm:w-[90%] sm:h-[40px] w-[90%] h-[40px] text-black outline outline-0  placeholder-shown:border-black placeholder-black focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  focus:placeholder:opacity-100  rounded-sm"
                />
              </div>
              <div className="  w-[90%]   flex flex-col gap-1">
              <input
                  placeholder="Email"
                  type="text"
                  className="border-b    xl:w-[360px] xl:h-[45px]  lg:w-[300px] lg:h-[45px]   md:w-[90%] md:h-8 sm:w-[90%] sm:h-[40px] w-[90%] h-[40px] text-blue-gray-700 outline outline-0  placeholder-shown:border-black placeholder-black focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  focus:placeholder:opacity-100  rounded-sm"
                />
              </div>
              <div className="  w-[90%]  flex flex-col gap-1">
                
                <select className=" border-b border-black focus:outline-0  xl:w-[360px] xl:h-[45px] lg:w-[300px] lg:h-[45px]   md:w-[90%] md:h-8 sm:w-[90%] sm:h-[40px]  w-[90%] h-[40px]   rounded-sm">
                <option className=" text-">Select Your Plan</option>
                  <option>Websites</option>
                  <option>SEO</option>
                  <option>SMM</option>
                </select>
              </div>
              <div className=" flex justify-center gap-2 mt-2">
                <button
                  type="Submit"
                  className=" bg-[#F89316]  border  rounded-sm  xl:w-20   xl:h-10  lg:w-20   lg:h-10  md:w-[100px]  md:h-8 sm:w-[70px] sm:h-[40px]  w-20 h-10 text-white"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Enquiry;
