// import React from "react";
// import blackdoor from '../images/blackdoor-03_nswlln.png'
// import Art from '../images/art-venue-02_rod2e9.webp'
// import Lustra from '../images/lusture-02_yqlbna.png'
// import TRP from '../images/tpr-02_agvhx1.webp'
// import craash from '../images/craash-01_qozj0w.webp'


// // w-[45px] h-[45px]  bg-no-repeat min-[526px]:left-[6.5rem] min-[526px]:top-4 min-[581px]:left-[8.6rem] min-[992px]:left-[15rem] min-[1280px]:left-[32.5rem]
// const VoiceOfVictory = () => {



//   const Head = [
//     {
//         head:" Voices of victory ✌️️",
//         headPara:" Revel in the firsthand experiences of businesses that scaled skyward with Profitcast at their side."
//     }
// ]

// const Details = [
//     {
//         heading:"Abhinesh. M",
//         sub_heading:'',
//         paragraph:`"Impressed with the expertise and professionalism of this IT company. They provided effective solutions that improved our productivity and security."`,
//         colorControl:'#4EA8DB'
//     },
//     {
//         heading:"Karthick. R",
//         sub_heading:'',
//         paragraph:`"Reliable and knowledgeable IT support.This company has been a valuable partner in managing our technology infrastructure." `
//     },
//     {
//         heading:"Mathan. R",
//         sub_heading:'',
//         paragraph:`"Professionalism, expertise, and exceptional service - that's what you can expect from [Why global services]. Highly recommended."`
//     },
//     {
//         heading:"Akash",
//         sub_heading:'',
//         paragraph:`"Excellent IT services from this company. Their proactive approach and quick response time have been instrumental in our success."`
//     }
    
// ]

//   return (
 
//     <div className='flex justify-center font-sans mt-[5rem]'>
//     <div className='bg-gray-100 rounded-[20px] shadow-sm shadow-gray-200 w-[68%] p-10 ' >
//         {   
//            Head.map((value,index)=>(
//                 <div key={index}>
//                     <h2 className='text-center font-bold text-[25px] mb-[8px] w-full font-sans md:text-[40px] '>{value.head}</h2>
//                     <p className='flex justify-center text-center text-[16px] font-[400] w-full md:w-[412px] md:mx-[100px] lg:mx-[290px] xl:mx-[250px]'>{value.headPara}</p>
//                 </div>
//            ))    
//         }

//         <div className='pt-[48px] grid grid-cols-1 md:grid-cols-2 gap-[30px]  '>
//             {
//                 Details.map((data,index)=>(
//                     <div key={index}> 
//                         <div className='bg-[#4EA8DB] text-white p-8 rounded-lg shadow-2xl shadow-gray-500 text-center md:text-start'>
//                             <h2  className=' pb-2 text-[19.2px] mb-[8px] font-bold'>{data.heading}</h2>
//                             <p className='text-[16px] font-[400]'>{data.paragraph}</p>
//                         </div>
//                    </div>
//                 ))
//             }
//         </div>
        
//             <div className= 'pt-[48px] flex justify-center text-white'>
//                <button className='px-5 py-1 mx-[12px] text-center text-[22.4px] font-semibold bg-[#f7931e]  rounded-md shadow-xl shadow-[#FF6826]/50  ' >Schedule A Call</button>
//             </div>
        
//     </div>     
// </div>
      









//       // {/* <div className=''><img src="../images/orange-glit-01_vqcbzx.webp" alt="" /></div> */}
//       /* <div className="mt-12">
//         <h1 className=" text-center text-[31.7143px] font-[650] font-sans font-Rubik min-[526px]:text-[25px] min-[769px]:text-[40px]">
//           Voices of victory ✌️️
//         </h1>
//         <p className="text-center w-[80%] pl-[4rem] mt-2 text-[16px] min-[526px]:px-[4rem] min-[526px]:w-full min-[581px]:px-[6rem] min-[769px]:text-[20px] min-[992px]:px-[9rem] min-[1280px]:px-[30rem]">
//           Revel in the firsthand experiences of businesses that scaled skyward
//           with Profitcast at their side.
//         </p>
//       </div>



//       <div className='flex justify-center font-sans '>
//         <div className='bg-gray-100 rounded-[40px] shadow-sm shadow-gray-200 w-[85%] p-10 ' >
//             <div className=' text-center font-bold text-[25px] mb-[8px] w-full font-sans md:text-[40px]'>
//                 {/* <img src={designImage} alt="#" className=''/> */
//         //         <h2 >Who are we?</h2>
//         //     </div>
     
//         //     <div className='pt-[48px] grid grid-cols-1 md:grid-cols-2 gap-[30px]  '>

//         //         <div className='bg-[#4EA8DB] text-white p-8 rounded-lg shadow-2xl shadow-gray-500 text-center md:text-start'>
//         //             <h2  className=' pb-2 text-[19.2px] mb-[8px] font-bold'>The Business Guru:</h2>
//         //             <h3  className='pb-2 text-xl'>"Meet The Business Guru:</h3>
//         //             <p className='text-[16px] font-[400]'>Anchoring our team with practical wisdom and strategic vision. As a cohesive unit, we navigate the digital realm, sculpting solutions that propel our collective success forward!"</p>
//         //         </div>
//         //         <div className='bg-[#EBA24B] text-white p-8 rounded-lg  shadow-2xl shadow-gray-500 text-center md:text-start'  >
//         //             <h2 className=' pb-2  text-[19.2px] mb-[8px] font-bold'>The Digital Alchemist:</h2>
//         //             <h3  className='pb-2 text-xl '>"Greet our Digital Alchemist:</h3>
//         //             <p className='text-[16px] font-[400]'>Our approach isn't about magic potions, but it's pretty close. Collaboratively, we convert pixels and data into impactful campaigns, turning your marketing aspirations into measurable achievements!"</p>        
//         //         </div>
//         //         <div className='bg-[#FF7E45]  text-white p-8 rounded-lg  shadow-2xl shadow-gray-500  text-center  md:text-start' >
//         //             <h2 className=' pb-2  text-[19.2px] mb-[8px] font-bold'>The SEO Maverick:</h2>
//         //             <h3  className='pb-2 text-xl  '>"Meet The SEO Maverick: </h3>
//         //             <p className='text-[16px] font-[400]'>Our trailblazing leader in the realm of digital optimization, pioneering new strategies and driving transformative results. Together, as a cohesive team, we navigate the ever-changing landscape of SEO, propelling our collective success to new heights!"</p>
//         //         </div>  
//         //         <div className='bg-[#58BA8D] text-white p-8 rounded-lg  shadow-2xl shadow-gray-500  text-center  md:text-start' >
//         //             <h2 className=' pb-2  text-[19.2px] mb-[8px] font-bold'>The Tech Titan:</h2>
//         //             <h3  className='pb-2 text-xl '>"Meet The Business Guru:</h3>
//         //             <p className='text-[16px] font-[400]'> The driving force behind our digital prowess. With a visionary mindset and unmatched technical expertise, they lead our team to new heights, shaping innovative solutions and paving the way for digital success."</p>
//         //         </div>     
//         //     </div>
//         //        <div className= 'pt-[48px] flex justify-center text-white'>
//         //            <button className='px-5 py-1 mx-[12px] text-center text-[22.4px] font-semibold bg-[#f7931e]  rounded-md shadow-xl shadow-[#FF6826]/50  ' >Schedule A Call</button>
//         //         </div>
            
//         // </div>
        
//     // </div> */}
// /* 
//       <div className="grid-rows-5 mt-[3rem] place-content-center">
//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-[1rem] rounded-2xl shadow-2xl shadow-gray-200 min-[526px]:mx-[2rem] min-[526px]:pr-[0.8rem] min-[992px]:h-[30%] min-[1280px]:mx-[10rem]">
//           <div className="min-[581px]:flex min-[581px]:gap-3 min-[1280px]:gap-6">
//             <div className="mx-[5rem]">
//               <p className="w-full h-[40%]  p-[2.61rem]  text-[16px] font-[480] text-center pt-[2rem] min-[526px]:text-start min-[581px]:w-[112%] min-[581px]:font-[400] min-[769px]:text-[20px]">
//                 I collaborated with Profitcast Agency, led by Balaji, for our
//                 wedding photography marketing campaign. Their digital expertise
//                 and lead generation skills were truly remarkable. Balaji's team
//                 was responsive, understanding our business vision and crafting a
//                 strategy just for us. Their dedication shone through, and I
//                 can't recommend them enough.
//               </p>
//               <div className="mt-[-0.6rem] min-[526px]:text-left min-[526px]:ml-[3rem] min-[526px]:mt-[2rem] min-[581px]:mt-[6rem] min-[769px]:mt-[8rem] min-[992px]:mt-[4rem]">
//                 <p className="font-bold text-[16px] mb-4 min-[769px]:text-[20px]">
//                   Mohammed Fahim
//                 </p>
//                 <p className="text-[#10A2CA] mb-4 min-[769px]:text-[20px]">
//                   Blackdoor Photography | Founder
//                 </p>
//               </div>
//             </div>
//             <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2 min-[526px]:justify-start min-[526px]:mt-5 min-[581px]:w-[200%] min-[581px]:mt-[3rem] min-[581px]:mr-[0.3rem] min-[769px]:w-[100%] min-[992px]:w-[98%] min-[1280px]:w-[98%] min-[1280px]:ml-[6rem]">
//               <img
//                 src={blackdoor}
//                 alt=""
//                 className="w-[72.96px] h-[72.85] min-[526px]:w-[98.58px] min-[526px]:h-[98.43px] min-[581px]:w-[137.68px] min-[581px]:h-[137.46px] min-[769px]:w-[85.04px] min-[769px]:h-[84.9px] min-[992px]:w-[122.64px] min-[992px]:h-[122.45px] min-[1280px]:w-[150.74px] min-[1280px]:h-[159.49px]"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-[1rem] rounded-2xl shadow-2xl shadow-gray-200 min-[526px]:mx-[2rem] min-[526px]:pr-[0.8rem] min-[992px]:h-[30%] min-[1280px]:mx-[10rem]">
//           <div className="min-[581px]:flex  min-[581px]:gap-3 ">
//             <div className="mx-[5rem]">
//               <p className="w-full h-[40%]  p-[2.61rem]  text-[16px] font-[480] text-center pt-[2rem] min-[526px]:text-start min-[581px]:w-[112%] min-[581px]:font-[400] min-[769px]:text-[20px]">
//                 To begin, I have known Mr. Balaji for two years and Profitcast
//                 is the go-to agency for all of our business promotions.
//                 Everything was amazing, from understanding our needs to
//                 communicating and delivering on time. Profitcast has currently
//                 been referred to my known circle, and they are pleased with the
//                 results as well.
//               </p>
//               <div className="mt-[-0.6rem] min-[526px]:text-left min-[526px]:ml-[3rem] min-[526px]:mt-[2rem] min-[581px]:mt-[6rem] min-[769px]:mt-[8rem] min-[992px]:mt-[4rem]">
//                 <p className="font-bold text-[16px] mb-4 min-[769px]:text-[20px]">
//                   Vigneshwar
//                 </p>
//                 <p className="text-[#10A2CA] mb-4 min-[769px]:text-[20px]">
//                   Art Venue | Founder
//                 </p>
//               </div>
//             </div>
//             <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2 min-[526px]:justify-start min-[526px]:mt-5 min-[581px]:w-[200%] min-[581px]:mt-[3rem] min-[581px]:mr-[0.3rem] min-[769px]:w-[100%] min-[992px]:w-[98%] min-[1280px]:w-[98%]">
//               <img
//                 src={Art}
//                 alt=""
//                 className="w-[72.96px] h-[72.85] min-[526px]:w-[98.58px] min-[526px]:h-[98.43px] min-[581px]:w-[137.68px] min-[581px]:h-[137.46px] min-[769px]:w-[85.04px] min-[769px]:h-[84.9px] min-[992px]:w-[122.64px] min-[992px]:h-[122.45px] min-[1280px]:w-[150.74px] min-[1280px]:h-[159.49px]"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-[1rem] rounded-2xl shadow-2xl shadow-gray-200 min-[526px]:mx-[2rem] min-[526px]:pr-[0.8rem] min-[992px]:h-[30%] min-[1280px]:mx-[10rem]">
//           <div className="min-[581px]:flex min-[581px]:gap-3 min-[1280px]:gap-6">
//             <div className="mx-[5rem]">
//               <p className="w-full h-[40%]  p-[2.61rem]  text-[16px] font-[480] text-center pt-[2rem] min-[526px]:text-start min-[581px]:w-[112%] min-[581px]:font-[400] min-[769px]:text-[20px]">
//                 "One of the best marketing agencies to address all your
//                 marketing needs. I truly appreciate how they keep you informed
//                 about ongoing activities and upcoming steps. Especially Mr.
//                 Balaji, the MD of Profitcast Growth - he is exceptionally
//                 helpful in explaining everything and always steers you in the
//                 right direction.
//               </p>
//               <div className="mt-[-0.6rem] min-[526px]:text-left min-[526px]:ml-[3rem] min-[526px]:mt-[2rem] min-[581px]:mt-[6rem] min-[769px]:mt-[8rem] min-[992px]:mt-[4rem]">
//                 <p className="font-bold text-[16px] mb-4 min-[769px]:text-[20px]">
//                   Mahaveer Ashra
//                 </p>
//                 <p className="text-[#10A2CA] mb-4 min-[769px]:text-[20px]">
//                   Lustre Detailing Studio | Owner
//                 </p>
//               </div>
//             </div>
//             <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2 min-[526px]:justify-start min-[526px]:mt-5 min-[581px]:w-[200%] min-[581px]:mt-[3rem] min-[581px]:mr-[0.3rem] min-[769px]:w-[100%] min-[992px]:w-[98%] min-[1280px]:w-[98%]">
//               <img
//                 src={Lustra}
//                 alt=""
//                 className="w-[72.96px] h-[72.85] min-[526px]:w-[98.58px] min-[526px]:h-[98.43px] min-[581px]:w-[137.68px] min-[581px]:h-[137.46px] min-[769px]:w-[85.04px] min-[769px]:h-[84.9px] min-[992px]:w-[122.64px] min-[992px]:h-[122.45px] min-[1280px]:w-[150.74px] min-[1280px]:h-[159.49px]"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-[1rem] rounded-2xl shadow-2xl shadow-gray-200 min-[526px]:mx-[2rem] min-[526px]:pr-[0.8rem] min-[992px]:h-[30%] min-[1280px]:mx-[10rem]">
//           <div className="min-[581px]:flex min-[581px]:gap-3 min-[1280px]:gap-6">
//             <div className="mx-[5rem]">
//               <p className="w-full h-[40%]  p-[2.61rem]  text-[16px] font-[480] text-center pt-[2rem] min-[526px]:text-start min-[581px]:w-[112%] min-[581px]:font-[400] min-[769px]:text-[20px]">
//                 Balaji has been a great partner for our racing team's Instagram
//                 ad management. Not only has their performance been top-notch,
//                 but they have also been able to provide us with invaluable
//                 insights that allow us to optimize and maximize the
//                 effectiveness of our campaigns. All in all, Profitcast has been
//                 a great asset for us and we look forward to continuing to work
//                 with them.
//               </p>
//               <div className="mt-[-0.6rem] min-[526px]:text-left min-[526px]:ml-[3rem] min-[526px]:mt-[2rem] min-[581px]:mt-[6rem] min-[769px]:mt-[8rem] min-[992px]:mt-[4rem]">
//                 <p className="font-bold text-[16px] mb-4 min-[769px]:text-[20px]">
//                   Manivannan
//                 </p>
//                 <p className="text-[#10A2CA] mb-4 min-[769px]:text-[20px]">
//                   TPR | Team Director
//                 </p>
//               </div>
//             </div>
//             <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2 min-[526px]:justify-start min-[526px]:mt-5 min-[581px]:w-[200%] min-[581px]:mt-[3rem] min-[581px]:mr-[0.3rem] min-[769px]:w-[100%] min-[992px]:w-[98%] min-[1280px]:w-[98%]">
//               <img
//                 src={TRP}
//                 alt=""
//                 className="w-[72.96px] h-[72.85] min-[526px]:w-[98.58px] min-[526px]:h-[98.43px] min-[581px]:w-[137.68px] min-[581px]:h-[137.46px] min-[769px]:w-[85.04px] min-[769px]:h-[84.9px] min-[992px]:w-[122.64px] min-[992px]:h-[122.45px] min-[1280px]:w-[150.74px] min-[1280px]:h-[159.49px]"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-[1rem] rounded-2xl shadow-2xl shadow-gray-200 min-[526px]:mx-[2rem] min-[526px]:pr-[0.8rem] min-[992px]:h-[30%] min-[1280px]:mx-[10rem]">
//           <div className="min-[581px]:flex min-[581px]:gap-3">
//             <div className="mx-[5rem]">
//               <p className="w-full h-[40%]  p-[2.61rem]  text-[16px] font-[480] text-center pt-[2rem] min-[526px]:text-start min-[581px]:w-[112%] min-[581px]:font-[400] min-[769px]:text-[20px]">
//                 I tried various agencies, but most were out for quick money and
//                 had no idea how to run ads. Balaji was of a kind that actually
//                 understands the task and gets the job done
//                 beautifully—typically, I never need to remind him on any
//                 responsibility assigned to him - it's a pleasure to deal with
//                 him - our best wishes.
//               </p>
//               <div className="mt-[-0.6rem] min-[526px]:text-left min-[526px]:ml-[3rem] min-[526px]:mt-[2rem] min-[581px]:mt-[6rem] min-[769px]:mt-[8rem] min-[992px]:mt-[4rem]">
//                 <p className="font-bold text-[16px] mb-4 min-[769px]:text-[20px]">
//                 Bhavesh Shah
//                 </p>
//                 <p className="text-[#10A2CA] mb-4 min-[769px]:text-[20px]">
//                 Craash | Founder
//                 </p>
//               </div>
//             </div>
//             <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2 min-[526px]:justify-start min-[526px]:mt-5 min-[581px]:w-[200%] min-[581px]:mt-[3rem] min-[581px]:mr-[0.3rem] min-[769px]:w-[100%] min-[992px]:w-[98%] min-[1280px]:w-[98%]">
//               <img
//                 src={craash}
//                 alt=""
//                 className="w-[72.96px] h-[72.85] min-[526px]:w-[98.58px] min-[526px]:h-[98.43px] min-[581px]:w-[137.68px] min-[581px]:h-[137.46px] min-[769px]:w-[85.04px] min-[769px]:h-[84.9px] min-[992px]:w-[122.64px] min-[992px]:h-[122.45px] min-[1280px]:w-[150.74px] min-[1280px]:h-[159.49px]"
//               />
//             </div>
//           </div>
//         </div> */

//         /* 
//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem]  mx-6 mt-[3rem] rounded-2xl">
//           <p className="w-full h-[40%]  p-[2.3rem]  text-[16px] font-[480] text-center pt-[2rem]">
//             To begin, I have known Mr. Balaji for two years and Profitcast is
//             the go-to agency for all of our business promotions. Everything was
//             amazing, from understanding our needs to communicating and
//             delivering on time. Profitcast has currently been referred to my
//             known circle, and they are pleased with the results as well.
//           </p>
//           <div className="mt-[7rem]">
//             <p className="font-bold text-[16px] mb-4">Vigneshwar</p>
//             <p className="text-[#10A2CA] mb-4">Art Venue | Founder</p>
//           </div>
//           <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2">
//             <img
//               src="/public/images/art-venue-02_rod2e9.webp"
//               alt=""
//               className="w-[72.96px] h-[72.85]"
//             />
//           </div>
//         </div>

//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-6 mt-[3rem] rounded-2xl">
//           <p className="w-full h-[40%]   p-[2.3rem]  text-[16px] font-[480] text-center pt-[2rem]">
//             "One of the best marketing agencies to address all your marketing
//             needs. I truly appreciate how they keep you informed about ongoing
//             activities and upcoming steps. Especially Mr. Balaji, the MD of
//             Profitcast Growth - he is exceptionally helpful in explaining
//             everything and always steers you in the right direction.
//           </p>
//           <div className="mt-[7rem]">
//             <p className="font-bold text-[16px] mb-4">Mahaveer Ashra</p>
//             <p className="text-[#10A2CA] mb-4">
//               Lustre Detailing Studio | Owner
//             </p>
//           </div>
//           <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2">
//             <img
//               src="/public/images/lusture-02_yqlbna.png"
//               alt=""
//               className="w-[72.96px] h-[72.85]"
//             />
//           </div>
//         </div>

//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-6 mt-[3rem] rounded-2xl">
//           <p className="w-full h-[40%]   p-[2.3rem]  text-[16px] font-[480] text-center pt-[2rem]">
//             Balaji has been a great partner for our racing team's Instagram ad
//             management. Not only has their performance been top-notch, but they
//             have also been able to provide us with invaluable insights that
//             allow us to optimize and maximize the effectiveness of our
//             campaigns. All in all, Profitcast has been a great asset for us and
//             we look forward to continuing to work with them.
//           </p>
//           <div className="mt-[7rem]">
//             <p className="font-bold text-[16px] mb-4">Manivannan</p>
//             <p className="text-[#10A2CA] mb-4">TPR | Team Director</p>
//           </div>
//           <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2 pl-10 mt-2">
//             <img
//               src="/public/images/tpr-02_agvhx1.webp"
//               alt=""
//               className="w-[72.96px] h-[72.85]"
//             />
//           </div>
//         </div>

//         <div className="bg-[#EDEDED80] text-center w-auto h-[30rem] mx-6 mt-[3rem] rounded-2xl">
//           <p className="w-full h-[40%]  p-[2.3rem]  text-[16px] font-[480] text-center pt-[2rem]">
//             I tried various agencies, but most were out for quick money and had
//             no idea how to run ads. Balaji was of a kind that actually
//             understands the task and gets the job done beautifully—typically, I
//             never need to remind him on any responsibility assigned to him -
//             it's a pleasure to deal with him - our best wishes.
//           </p>
//           <div className="mt-[7rem]">
//             <p className="font-bold text-[16px] mb-4">Bhavesh Shah</p>
//             <p className="text-[#10A2CA] mb-4">Craash | Founder</p>
//           </div>
//           <div className="w-[315.85px] h-[72.85px] flex justify-center mb-2  pl-10 mt-2">
//             <img
//               src="/public/images/craash-01_qozj0w.webp"
//               alt=""
//               className="w-[72.96px] h-[72.85]"
//             />
//           </div>
//         </div> */
//       /* </div> */
//     // </div>

//     //     <div className=" flex w-full xl:pt-16 lg:pt-10 md:pt-10 sm:pt-6 pt-16">
//     //     <div className=" w-full flex flex-col xl:gap-9 lg:gap-6 md:gap-6 sm:gap-5 gap-6 items-center">
//     //         <img className=" xl:w-64 xl:h-28 lg:w-48 lg:h-20 md:w-48 md:h-20 sm:w-44 sm:h-16 w-48 h-20 "  src="https://res.cloudinary.com/du9rsmpex/image/upload/v1698145373/profitcast/pclogo_axuiuj.svg" alt="" />
//     //         <p className=" xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[17px] font-normal">The performance marketing agency</p>
//     //         <h2 className="  xl:font-extrabold  lg:font-extrabold  md:font-bold sm:font-bold font-bold xl:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[30px] text-[28px] md:w-[70%] text-center">That doubles <span className=" text-[#FF6826]">sales</span>, not your budget</h2>
//     //         <div className=" flex gap-5">
//     //             <div className=" xl:w-60 xl:h-12 lg:w-60 lg:h-12 md:w-44 md:h-10 sm:w-40 sm:h-8 w-32 h-7 bg-gray-200 flex justify-center items-center "><span className=" xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-lg font-medium">Expert Teams</span></div>
//     //             <div className=" xl:w-60 xl:h-12 lg:w-60 lg:h-12 md:w-44 md:h-10 sm:w-40 sm:h-8 w-32 h-7 bg-gray-200 flex justify-center items-center"><span className=" xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-lg  font-medium">Affordable</span></div>
//     //         </div>
//     //         <div className=" xl:w-[48%] lg:w-[48%] md:w-[56%] sm:w-[55%] w-[67%] flex justify-center">
//     //         <p className="xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[17px] text-[17px] font-normal text-center">Join forces with an agency that boosts your pipeline, cash flow, and profits - all with a sprinkle of finesse! 💎</p>
//     //         </div>
//     //         <button className=" xl:w-56 xl:h-12 lg:w-56 lg:h-12 md:w-40 md:h-10 sm:w-40 sm:h-10 w-36 h-9 bg-[#FF6826]  rounded-md shadow-xl shadow-[#FF6826]/50 text-white text-2xl font-semibold ">Let's Talk</button>
//     //         <p className=" xl:text-base lg:text-base md:text-base  sm:text-[15px] text-[16px] text-center   "><span className=" text-[#00A1C7]">35+ </span>Clients | <span className=" text-[#00A1C7]">37,00,000+</span> ₹ in Adspend per month</p>
//     //     </div>
//     // </div>
//   );
// };

// export default VoiceOfVictory;
