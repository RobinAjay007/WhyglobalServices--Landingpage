// import React from "react";

// const VoiceOfVictory = () => {


//     const Head = [
//       {
//           head:" Voices of victory ✌️️",
//           headPara:" Revel in the firsthand experiences of businesses that scaled skyward with Profitcast at their side."
//       }
//   ]
  
//   const Details = [
//       {
//           heading:"Abhinesh. M",
//           sub_heading:'',
//           paragraph:`"Impressed with the expertise and professionalism of this IT company. They provided effective solutions that improved our productivity and security."`,
//           colorControl:'#4EA8DB'
//       },
//       {
//           heading:"Karthick. R",
//           sub_heading:'',
//           paragraph:`"Reliable and knowledgeable IT support.This company has been a valuable partner in managing our technology infrastructure." `
//       },
//       {
//           heading:"Mathan. R",
//           sub_heading:'',
//           paragraph:`"Professionalism, expertise, and exceptional service - that's what you can expect from [Why global services]. Highly recommended."`
//       },
//       {
//           heading:"Akash",
//           sub_heading:'',
//           paragraph:`"Excellent IT services from this company. Their proactive approach and quick response time have been instrumental in our success."`
//       }
      
//     ]
  
  
//   const colors = [ '#4EA8DB','#EBA24B','#FF7E45','#58BA8D' ]
  
//     return (
   
//       <div className='flex justify-center mt-[5rem] h-full shadow-xl'>
//       <div className='bg-gray-100 rounded-2xl w-full p-6 md:max-w-4xl lg:max-w-5xl' >
//           {   
//              Head.map((value,index)=>(
//                   <div key={index} className="text-center ">
//                       <h2 className=' font-bold text-[25px] mb-2 md:text-[40px]'>{value.head}</h2>
//                       <p className=' text-[16px] '>{value.headPara}</p>
//                   </div>
//              ))    
//           }
  
//           <div className='pt-[48px] grid grid-cols-1 sm:grid-cols-2 gap-[30px]'>
//               {
//                   Details.map((data,index)=>(
//                       <div key={index} > 
//                           <div style={{backgroundColor:colors[index % colors.length]}} className='text-white  rounded-lg shadow-2xl shadow-gray-500 text-center p-5 md:p-8 lg:p-10 sm:text-start h-[180px]'>
//                               <h2  className='text-[19.2px] mb-[8px] font-bold'>{data.heading}</h2>
//                               <p className='text-[16px]'>{data.paragraph}</p>
//                           </div>
//                      </div>
//                   ))
//               }
//           </div>
          
//               <div className= 'pt-[48px] flex justify-center text-white'>
//                  <button className='px-5 py-1 mx-[12px] text-center text-[22.4px] font-semibold bg-[#f7931e]  rounded-md shadow-xl shadow-[#FF6826]/50  ' >Schedule A Call</button>
//               </div>
          
//       </div>     
//   </div>
//   );
// };

// // export default VoiceOfVictory;