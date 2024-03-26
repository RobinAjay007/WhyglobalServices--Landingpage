import { MdVerified } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {  Pagination } from "swiper/modules";

export const Plans = ({ web }) => {
  const {
    website,
    website1,
    website2,
    seo,
    seo1,
    seo2,
    seo3,
    seo4,
    smm,
    smm1,
    smm2,
    smm3,
    smm4,
  } = web;
  

  return (
    <div className=" w-full m-auto">
      <div className=" w-full m-auto  md:hidden lg:hidden my-4 ">
        <div className=" w-full  m-auto">
          <Swiper 
            spaceBetween={30}
           
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            
            className="mySwiper"
            
          >
              <SwiperSlide>
                <div className=" w-full grid place-content-center mb-10">
                  <div className=" w-4/5 m-auto flex  justify-center">
                  <h2 className=" font-rubik capitalize font-semibold text-3xl ">
                    website plans
                  </h2>
                  </div>
                  <div className=" w-full flex justify-between my-3 m-auto  ">
                    {website1?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto  rounded-xl bg-slate-100 shadow-lg "
                      >
                        <div className=" w-full h-10 flex gap-4   ">
                          <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-xl flex justify-center items-center ">
                            <h2 className=" font-rubik text-white capitalize text-sm ">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-xl"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" flex flex-col gap-1  mx-3 ">
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-lg">
                                {d.feat1}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                          {d.feat9 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat9}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full my-2 flex justify-center items-center">
                          <button className=" capitalize bg-white text-[#f7931e] rounded-lg py-2 px-3   shadow-xl text-black-700">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full grid place-content-center mb-10   ">
                  <div className=" w-4/5 m-auto flex  justify-center">
                  <h2 className=" font-rubik capitalize font-semibold  text-3xl ">
                    website plans
                  </h2>
                  </div>
                  <div className=" w-full flex justify-between my-3 m-auto  ">
                    {website2?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg "
                      >
                        <div className=" w-full h-10 flex gap-4   ">
                          <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-xl flex justify-center items-center ">
                            <h2 className=" font-rubik text-white capitalize text-sm ">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-xl"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" flex flex-col gap-1  mx-3 ">
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-lg">
                                {d.feat1}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                          {d.feat9 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat9}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full my-2 flex justify-center items-center">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3 text-[#f7931e]   shadow-xl text-black-700">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
        <div className=" w-full m-auto my-3">
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
              <SwiperSlide>
                <div className=" w-full grid place-content-center mb-10 ">
                  <div className=" w-4/5 m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    seo
                  </h2>
                  </div>
                  <div className=" w-full m-auto   my-3 ">
                    {seo1?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg"
                      >
                        <div className=" h-10 flex justify-between  rounded-lg ">
                          <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center  items-center ">
                            <h2 className=" font-rubik text-white capitalize  text-xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" grid place-content-center gap-2  mx-3 ">
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                          {d.feat9 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat9}
                              </h2>
                            </div>
                          )}
                          {d.feat10 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat10}
                              </h2>
                            </div>
                          )}
                          {d.feat11 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat11}
                              </h2>
                            </div>
                          )}
                          {d.feat12 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat12}
                              </h2>
                            </div>
                          )}
                          {d.feat13 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat13}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-2">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3 my-3  shadow-xl text-[#f7ab1e]">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full grid place-content-center mb-10  ">
                <div className=" w-full m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    seo
                  </h2>
                  </div>
                  <div className=" w-full m-auto   my-3 ">
                    {seo2?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg"
                      >
                        <div className=" h-10 flex justify-between  rounded-lg ">
                          <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center  items-center ">
                            <h2 className=" font-rubik text-white capitalize  text-xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" grid place-content-center gap-2  mx-3 ">
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                          {d.feat9 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat9}
                              </h2>
                            </div>
                          )}
                          {d.feat10 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat10}
                              </h2>
                            </div>
                          )}
                          {d.feat11 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat11}
                              </h2>
                            </div>
                          )}
                          {d.feat12 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat12}
                              </h2>
                            </div>
                          )}
                          {d.feat13 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat13}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-2">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3 my-3  shadow-xl text-[#f7ab1e]">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full grid place-content-center mb-10  ">
                <div className=" w-full m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    seo
                  </h2>
                  </div>
                  <div className=" w-full m-auto   my-3 ">
                    {seo3?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg"
                      >
                        <div className=" h-10 flex justify-between  rounded-lg ">
                          <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center  items-center ">
                            <h2 className=" font-rubik text-white capitalize  text-xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" grid place-content-center gap-2  mx-3 ">
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                          {d.feat9 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat9}
                              </h2>
                            </div>
                          )}
                          {d.feat10 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat10}
                              </h2>
                            </div>
                          )}
                          {d.feat11 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat11}
                              </h2>
                            </div>
                          )}
                          {d.feat12 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat12}
                              </h2>
                            </div>
                          )}
                          {d.feat13 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat13}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-2">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3 my-3  shadow-xl text-[#f7ab1e]">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full grid place-content-center mb-10  ">
                <div className=" w-full m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    seo
                  </h2>
                  </div>
                  <div className=" w-full m-auto   my-3 ">
                    {seo4?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg"
                      >
                        <div className=" h-10 flex justify-between  rounded-lg ">
                          <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center  items-center ">
                            <h2 className=" font-rubik text-white capitalize  text-xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" grid place-content-center gap-2  mx-3 ">
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                          {d.feat9 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat9}
                              </h2>
                            </div>
                          )}
                          {d.feat10 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat10}
                              </h2>
                            </div>
                          )}
                          {d.feat11 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat11}
                              </h2>
                            </div>
                          )}
                          {d.feat12 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat12}
                              </h2>
                            </div>
                          )}
                          {d.feat13 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat13}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-2">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3 my-3  shadow-xl text-[#f7ab1e]">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            
          </Swiper>
        </div>
        <div className=" w-full m-auto my-3">
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className=" w-full flex ">
              <SwiperSlide>
                <div className=" w-full grid place-content-center my-6  mb-10">
                <div className=" w-full m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    smm
                  </h2>
                  </div>
                  <div className=" w-full m-auto  ">
                    {smm1?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg my-3 "
                      >
                        <div className=" h-10 flex justify-between rounded-lg ">
                          <div className=" w-9/12 bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center items-center ">
                            <h2 className=" font-rubik text-white capitalize  text-xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" grid place-content-center gap-2  mx-3 ">
                          <div className=" flex gap-3">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className="w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.platform}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className="  text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left  text-black-500 text-lg">
                              {d.posts}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.feat}
                            </h2>
                          </div>
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat1}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-2">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3  shadow-xl text-[#f7931e] font-medium">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full grid place-content-center mb-10 my-6 ">
                <div className=" w-full m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    smm
                  </h2>
                  </div>
                  <div className=" w-full   ">
                    {smm2?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg my-3 "
                      >
                        <div className=" h-10 flex justify-between rounded-lg ">
                          <div className=" w-9/12 bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center items-center ">
                            <h2 className=" font-rubik text-white capitalize  text-xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" grid place-content-center gap-2  mx-3 ">
                          <div className=" flex gap-3">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className="w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.platform}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className="  text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left  text-black-500 text-lg">
                              {d.posts}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.feat}
                            </h2>
                          </div>
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat1}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-2">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3  shadow-xl text-[#f7931e] font-medium">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full grid place-content-center my-6 mb-10 ">
                <div className=" w-full m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    smm
                  </h2>
                  </div>
                  <div className=" w-full m-auto   ">
                    {smm3?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg my-2  "
                      >
                        <div className=" h-10 flex justify-between rounded-lg ">
                          <div className=" w-9/12 bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center items-center ">
                            <h2 className=" font-rubik text-white capitalize font-semibold text-2xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" grid place-content-center gap-2  mx-3 ">
                          <div className=" flex gap-3">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className="w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.platform}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className="  text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left  text-black-500 text-lg">
                              {d.posts}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.feat}
                            </h2>
                          </div>
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat1}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-3">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3  shadow-xl text-[#f7931e] font-medium">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-full grid place-content-center my-6 mb-10 ">
                <div className=" w-full m-auto flex  justify-center">
                  <h2 className=" font-rubik uppercase font-semibold  text-3xl ">
                    smm
                  </h2>
                  </div>
                  <div className=" w-full m-auto  ">
                    {smm4?.map((d, index) => (
                      <div
                        key={index}
                        className=" w-11/12 m-auto rounded-xl bg-slate-100 shadow-lg my-3  "
                      >
                        <div className=" h-10 flex justify-between rounded-lg ">
                          <div className=" w-9/12 bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center items-center ">
                            <h2 className=" font-rubik text-white capitalize font-semibold  text-2xl">
                              {d.title}
                            </h2>
                          </div>
                          <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                        </div>
                        <div className=" w-full flex justify-center my-2 ">
                          <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                            {d.title2}
                          </h2>
                        </div>
                        <div className=" w-full grid place-content-center gap-2 px-2  ">
                          <div className=" flex gap-3">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className="w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.platform}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className="  text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left  text-black-500 text-lg">
                              {d.posts}
                            </h2>
                          </div>
                          <div className=" flex gap-3 items-center">
                            <MdVerified className=" text-green-500 w-5 h-5" />
                            <h2 className=" w-fit capitalize font-rubik text-left text-black-500  text-lg">
                              {d.feat}
                            </h2>
                          </div>
                          {d.feat1 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat1}
                              </h2>
                            </div>
                          )}
                          {d.feat2 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat2}
                              </h2>
                            </div>
                          )}
                          {d.feat3 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat3}
                              </h2>
                            </div>
                          )}
                          {d.feat4 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat4}
                              </h2>
                            </div>
                          )}
                          {d.feat5 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat5}
                              </h2>
                            </div>
                          )}
                          {d.feat6 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat6}
                              </h2>
                            </div>
                          )}
                          {d.feat7 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                                {d.feat7}
                              </h2>
                            </div>
                          )}
                          {d.feat8 !== "" && (
                            <div className=" flex gap-3">
                              <MdVerified className="  text-green-500 w-5 h-5" />
                              <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                                {d.feat8}
                              </h2>
                            </div>
                          )}
                        </div>
                        <div className=" w-full flex justify-center my-2">
                          <button className=" capitalize bg-white rounded-lg py-2 px-3  shadow-xl text-[#f7931e] font-medium">
                            lets talk
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className=" w-4/5 m-auto hidden md:block lg:block">
        <div className=" w-full ">
          <h2 className=" font-rubik capitalize text-center font-bold text-4xl ">
            website plans
          </h2>
          <div className=" w-9/12 flex justify-around my-4 m-auto ">
            {website?.map((d, index) => (
              <div
                key={index}
                className=" w-1/3 rounded-xl bg-slate-100 shadow-lg"
              >
                <div className=" h-10 flex justify-between rounded-lg ">
                  <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-xl flex justify-center items-center ">
                    <h2 className=" font-rubik text-white capitalize text-lg ">
                      {d.title}
                    </h2>
                  </div>
                  <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-xl"></div>
                </div>
                <div className=" w-full flex justify-center my-2 ">
                  <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                    {d.title2}
                  </h2>
                </div>
                <div className=" flex flex-col gap-1  mx-3 ">
                  {d.feat1 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat1}
                      </h2>
                    </div>
                  )}
                  {d.feat2 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat2}
                      </h2>
                    </div>
                  )}
                  {d.feat3 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat3}
                      </h2>
                    </div>
                  )}
                  {d.feat4 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat4}
                      </h2>
                    </div>
                  )}
                  {d.feat5 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat5}
                      </h2>
                    </div>
                  )}
                  {d.feat6 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat6}
                      </h2>
                    </div>
                  )}
                  {d.feat7 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat7}
                      </h2>
                    </div>
                  )}
                  {d.feat8 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat8}
                      </h2>
                    </div>
                  )}
                  {d.feat9 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat9}
                      </h2>
                    </div>
                  )}
                </div>
                <div className=" w-full my-2 flex justify-center items-center">
                  <button className=" capitalize bg-white rounded-lg py-2 px-3 text-[#f7931e]   shadow-xl text-black-700">
                    lets talk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full my-8 ">
          <h2 className=" font-rubik uppercase font-bold text-center text-4xl ">
            seo
          </h2>
          <div className=" w-full rounded-lg  my-3 flex justify-around gap-6 my-4 ">
            {seo?.map((d, index) => (
              <div
                key={index}
                className=" w-3/4 rounded-xl bg-slate-100 shadow-lg"
              >
                <div className=" h-10 flex justify-between rounded-lg ">
                  <div className=" w-[78%] bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center  items-center ">
                    <h2 className=" font-rubik text-white capitalize  text-xl">
                      {d.title}
                    </h2>
                  </div>
                  <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                </div>
                <div className=" w-full flex justify-center my-2 ">
                  <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                    {d.title2}
                  </h2>
                </div>
                <div className=" grid place-content-center gap-2  mx-3 ">
                  {d.feat1 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat2}
                      </h2>
                    </div>
                  )}
                  {d.feat2 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat2}
                      </h2>
                    </div>
                  )}
                  {d.feat3 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat3}
                      </h2>
                    </div>
                  )}
                  {d.feat4 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat4}
                      </h2>
                    </div>
                  )}
                  {d.feat5 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat5}
                      </h2>
                    </div>
                  )}
                  {d.feat6 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat6}
                      </h2>
                    </div>
                  )}
                  {d.feat7 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat7}
                      </h2>
                    </div>
                  )}
                  {d.feat8 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat8}
                      </h2>
                    </div>
                  )}
                  {d.feat9 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat9}
                      </h2>
                    </div>
                  )}
                  {d.feat10 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat10}
                      </h2>
                    </div>
                  )}
                  {d.feat11 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat11}
                      </h2>
                    </div>
                  )}
                  {d.feat12 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat12}
                      </h2>
                    </div>
                  )}
                  {d.feat13 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat13}
                      </h2>
                    </div>
                  )}
                </div>
                <div className=" w-full flex justify-center my-2">
                  <button className=" capitalize bg-white rounded-lg py-2 px-3 my-3  shadow-xl text-[#f7ab1e]">
                    lets talk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-full my-8 ">
          <h2 className=" font-rubik uppercase font-bold text-center text-4xl ">
            smm
          </h2>
          <div className=" w-full rounded-lg grid grid-cols-4 gap-6  my-3">
            {smm?.map((d, index) => (
              <div
                key={index}
                className=" w-full rounded-xl bg-slate-100 shadow-lg my-4 "
              >
                <div className=" h-10 flex justify-between rounded-lg ">
                  <div className=" w-9/12 bg-gradient-to-r from-[#f7931e] to-[#f7ab1e] rounded-l-lg flex justify-center items-center ">
                    <h2 className=" font-rubik text-white capitalize  text-xl">
                      {d.title}
                    </h2>
                  </div>
                  <div className=" w-1/5 h-10 bg-[#f7ab1e] rounded-r-lg"></div>
                </div>
                <div className=" w-full flex justify-center my-2 ">
                  <h2 className=" font-rubik text-gray-500 text-4xl font-bold">
                    {d.title2}
                  </h2>
                </div>
                <div className=" grid place-content-center gap-2  mx-3 ">
                  <div className=" flex gap-3">
                    <MdVerified className=" text-green-500 w-5 h-5" />
                    <h2 className="w-fit capitalize font-rubik text-left text-black-500  text-lg">
                      {d.platform}
                    </h2>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <MdVerified className="  text-green-500 w-5 h-5" />
                    <h2 className=" w-fit capitalize font-rubik text-left  text-black-500 text-lg">
                      {d.posts}
                    </h2>
                  </div>
                  <div className=" flex gap-3 items-center">
                    <MdVerified className=" text-green-500 w-5 h-5" />
                    <h2 className=" w-fit capitalize font-rubik text-left text-black-500  text-lg">
                      {d.feat}
                    </h2>
                  </div>
                  {d.feat1 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat1}
                      </h2>
                    </div>
                  )}
                  {d.feat2 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat2}
                      </h2>
                    </div>
                  )}
                  {d.feat3 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat3}
                      </h2>
                    </div>
                  )}
                  {d.feat4 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat4}
                      </h2>
                    </div>
                  )}
                  {d.feat5 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                        {d.feat5}
                      </h2>
                    </div>
                  )}
                  {d.feat6 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat6}
                      </h2>
                    </div>
                  )}
                  {d.feat7 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left  text-black-500 text-lg">
                        {d.feat7}
                      </h2>
                    </div>
                  )}
                  {d.feat8 !== "" && (
                    <div className=" flex gap-3">
                      <MdVerified className="  text-green-500 w-5 h-5" />
                      <h2 className=" w-fit capitalize font-rubik  text-left text-black-500 text-lg">
                        {d.feat8}
                      </h2>
                    </div>
                  )}
                </div>
                <div className=" w-full flex justify-center my-2">
                  <button className=" capitalize bg-white rounded-lg py-2 px-3  shadow-xl text-[#f7931e] font-medium">
                    lets talk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
