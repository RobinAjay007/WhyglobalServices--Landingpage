import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whytab from '../SlideImages/whytab.png'
import abhisoverseas from '../SlideImages/abhisoverseas.png'
import adamscarrybags from '../SlideImages/adamscarrybags.webp'
import bscampus from '../SlideImages/bscampus.png'
import bsga from '../SlideImages/bsga.png'
import sennethotel from '../SlideImages/sennettahotel.jpg'
import senthurvetri from '../SlideImages/senthurvetri.png'


const TruimphGallery = () => {


    // Image Declaration
    const ClientImages = [whytab,abhisoverseas,adamscarrybags,bscampus,bsga,sennethotel,senthurvetri]
    console.log(ClientImages)

    // Image 

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        // prevArrow: <></>, // Empty fragment to hide the previous arrow
        // nextArrow: <></>
      };
      
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        // prevArrow: <></>, // Empty fragment to hide the previous arrow
        // nextArrow: <></>
      };
      const settings3 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        // prevArrow: <></>, // Empty fragment to hide the previous arrow
        // nextArrow: <></>
      };
      const settings4 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        // prevArrow: <></>, // Empty fragment to hide the previous arrow
        // nextArrow: <></>
      };



    console.log(settings)

  return (
    <div className='mt-[4rem]'>
         {/* <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-[1rem] lg:h-[30rem] rounded-2xl shadow-2xl shadow-gray-600 min-[526px]:mx-[2rem] min-[526px]:pr-[0.8rem] min-[992px]:h-[90%] min-[1280px]:mx-[10rem] min-[1290px]:h-[30rem]"> */}
        
                <h1 className='font-bold text-[30px] text-center p-6 ml-4 sm:text-[40px] sm:text-center sm:font-bold md:text-[50px] md:text-center md:font-bold lg:text-[50px] lg:text-center lg:font-bold xl:text-[50px] xl:text-center xl:font-bold'>Truimph Gallery🏆</h1>
                <p className='w-[90%] h-15 mx-auto font-normal text-[15px] text-center p-2 sm:w-[80%] sm:mx-auto sm:text-[15px] sm:text-center sm:font-normal md:w-[70%] md:mx-auto md:text-[15px] md:text-center lg:w-[70%] lg:mx-auto lg:font-normal lg:text-[15px] lg:text-center xl:text-[20px] xl:text-center xl:font-normal text-justify'>Join us in the Triumph Gallery, where we honor businesses of all stages, from budding beginnings to soaring success, as they've progressed together with us.</p>
{/* <div className='mt-[3rem] ml-[1rem]  rounded-2xl shadow-2xl shadow-gray-600 w-[90] hidden xl:block'> */}
                <div className='hidden xl:block'>
                <Slider {...settings} className='w-[100%] mx-[2rem] '> 
          {ClientImages.map((image, index) => (
            <div key={index} className=" h-[150px] mx-5 mt-[3rem] min-[350px]:">
              <img
                src={image}
                className="w-[135px] h-[100px] mt-[1rem]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        </div>
        {/* </div> */}
        {/* <div className='mt-[1rem] ml-[1rem]   rounded-2xl shadow-2xl shadow-gray-600 w-[90] hidden lg:block xl:hidden'> */}
       <div className='hidden lg:block xl:hidden'>
        <Slider {...settings2} className='hidden lg:block xl:hidden'>
          {ClientImages.map((image, index) => (
            <div key={index} className=" h-[150px] ml-[5rem] mt-[3rem] min-[350px]:">
              <img
                src={image}
                className="w-[135px] h-[100px] mt-[1rem]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        </div>
        {/* </div> */}
        {/* <div className='mt-[2rem] mx-[1rem]  rounded-2xl shadow-2xl shadow-gray-600 w-[90] hidden sm:block lg:hidden'> */}
       <div className='hidden sm:block lg:hidden'>
        <Slider {...settings3} className='hidden sm:block lg:hidden'> 
          {ClientImages.map((image, index) => (
            <div key={index} className=" h-[150px] mx-[6rem] mt-[3rem]">
              <img
                src={image}
                className="w-[135px] h-[100px] mt-[1rem]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        </div>
        {/* </div> */}
        {/* <div className='mt-[6rem] mx-[1rem]  rounded-2xl shadow-2xl shadow-gray-600 w-[90] sm:hidden'> */}
        <div className='sm:hidden'>
        <Slider {...settings4} className=''>
          {ClientImages.map((image, index) => (
            <div key={index} className=" h-[150px] mx-[8rem] mt-[3rem]">
              <img
                src={image}
                className="w-[135px] h-[100px] mt-[1rem]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        </div>
        {/* </div> */}
       

            
          {/* </div> */}
    </div>
  )
}

export default TruimphGallery

































// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import whytab from '../SlideImages/whytab.png'
// import abhisoverseas from '../SlideImages/abhisoverseas.png'
// import adamscarrybags from '../SlideImages/adamscarrybags.webp'
// import bscampus from '../SlideImages/bscampus.png'
// import bsga from '../SlideImages/bsga.png'
// import sennethotel from '../SlideImages/sennettahotel.jpg'
// import senthurvetri from '../SlideImages/senthurvetri.png'
// import riofin from '../SlideImages/riofin.jpg'


// const TruimphGallery = () => {


//     // Image Declaration
//     const ClientImages = [whytab,abhisoverseas,adamscarrybags,bscampus,bsga,sennethotel,senthurvetri,riofin]
//     console.log(ClientImages)

//     // Image 

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         prevArrow: <></>, // Empty fragment to hide the previous arrow
//         nextArrow: <></>
//       };
      
//     const settings2 = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         prevArrow: <></>, // Empty fragment to hide the previous arrow
//         nextArrow: <></>
//       };
//       const settings3 = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         prevArrow: <></>, // Empty fragment to hide the previous arrow
//         nextArrow: <></>
//       };
//       const settings4 = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         prevArrow: <></>, // Empty fragment to hide the previous arrow
//         nextArrow: <></>
//       };



//     console.log(settings)

//   return (
//     <div>
//          <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-[1rem] lg:h-[30rem] rounded-2xl shadow-2xl shadow-gray-600 min-[526px]:mx-[2rem] min-[526px]:pr-[0.8rem] min-[992px]:h-[90%] min-[1280px]:mx-[10rem] min-[1290px]:h-[30rem]">
        
//                 <h1 className='font-bold text-[30px] text-center p-6 sm:text-[40px] sm:text-center sm:font-bold md:text-[50px] md:text-center md:font-bold lg:text-[50px] lg:text-center lg:font-bold xl:text-[50px] xl:text-center xl:font-bold'>Truimph Gallery🏆</h1>
//                 <p className='w-full h-15 mx-auto font-normal text-[15px] text-center p-2 sm:w-[80%] sm:mx-auto sm:text-[15px] sm:text-center sm:font-normal md:w-[70%] md:mx-auto md:text-[15px] md:text-center lg:w-[70%] lg:mx-auto lg:font-normal lg:text-[15px] lg:text-center xl:text-[20px] xl:text-center xl:font-normal'>Join us in the Triumph Gallery, where we honor businesses of all stages, from budding beginnings to soaring success, as they've progressed together with us.</p>
// <div className='mt-[3rem] ml-[1rem]  rounded-2xl shadow-2xl shadow-gray-600 w-[90] hidden xl:block'>
//                 <Slider {...settings}> 
//           {ClientImages.map((image, index) => (
//             <div key={index} className=" h-[150px] ml-7 mt-[3rem] min-[350px]:">
//               <img
//                 src={image}
//                 className="w-[135px] h-[100px] mt-[1rem]"
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//         </Slider>
//         </div>
//         <div className='mt-[1rem] ml-[1rem]   rounded-2xl shadow-2xl shadow-gray-600 w-[90] hidden lg:block xl:hidden'>
//         <Slider {...settings2} >
//           {ClientImages.map((image, index) => (
//             <div key={index} className=" h-[150px] ml-[5rem] mt-[3rem] min-[350px]:">
//               <img
//                 src={image}
//                 className="w-[135px] h-[100px] mt-[1rem]"
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//         </Slider>
//         </div>
//         <div className='mt-[2rem] mx-[1rem]  rounded-2xl shadow-2xl shadow-gray-600 w-[90] hidden sm:block lg:hidden'>
//         <Slider {...settings3}>
//           {ClientImages.map((image, index) => (
//             <div key={index} className=" h-[150px] mx-[6rem] mt-[3rem]">
//               <img
//                 src={image}
//                 className="w-[135px] h-[100px] mt-[1rem]"
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//         </Slider>
//         </div>
//         <div className='mt-[3rem] mx-[1rem] h-[11rem]   rounded-2xl shadow-2xl shadow-gray-600 w-[90] sm:hidden'>
//         <Slider {...settings4}>
//           {ClientImages.map((image, index) => (
//             <div key={index} className=" h-[150px] mx-[5rem] mt-[1.5rem]">
//               <img
//                 src={image}
//                 className="w-[135px] h-[100px] mt-[1rem]"
//                 alt={`Slide ${index + 1}`}
//               />
//             </div>
//           ))}
//         </Slider>
//         </div>
       

//             
//           </div>
//     </div>
//   )
// }

// export default TruimphGallery