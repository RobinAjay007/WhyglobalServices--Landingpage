import React from 'react'
// import designImage from '../images/design.webp'




const WhoWeAre = () => {
  return (
    <div className='flex justify-center font-sans '>
        <div className='bg-gray-100 rounded-[40px] shadow-sm shadow-gray-200 w-[85%] p-10 ' >
            <div className=' text-center font-bold text-[25px] mb-[8px] w-full font-sans md:text-[40px]'>
                {/* <img src={designImage} alt="#" className=''/> */}
                <h2 >Who are we?</h2>
            </div>
     
            <div className='pt-[48px] grid grid-cols-1 md:grid-cols-2 gap-[30px]  '>

                <div className='bg-[#4EA8DB] text-white p-8 rounded-lg shadow-2xl shadow-gray-500 text-center md:text-start'>
                    <h2  className=' pb-2 text-[19.2px] mb-[8px] font-bold'>The Business Guru:</h2>
                    <h3  className='pb-2 text-xl'>"Meet The Business Guru:</h3>
                    <p className='text-[16px] font-[400]'>Anchoring our team with practical wisdom and strategic vision. As a cohesive unit, we navigate the digital realm, sculpting solutions that propel our collective success forward!"</p>
                </div>
                <div className='bg-[#EBA24B] text-white p-8 rounded-lg  shadow-2xl shadow-gray-500 text-center md:text-start'  >
                    <h2 className=' pb-2  text-[19.2px] mb-[8px] font-bold'>The Digital Alchemist:</h2>
                    <h3  className='pb-2 text-xl '>"Greet our Digital Alchemist:</h3>
                    <p className='text-[16px] font-[400]'>Our approach isn't about magic potions, but it's pretty close. Collaboratively, we convert pixels and data into impactful campaigns, turning your marketing aspirations into measurable achievements!"</p>        
                </div>
                <div className='bg-[#FF7E45]  text-white p-8 rounded-lg  shadow-2xl shadow-gray-500  text-center  md:text-start' >
                    <h2 className=' pb-2  text-[19.2px] mb-[8px] font-bold'>The SEO Maverick:</h2>
                    <h3  className='pb-2 text-xl  '>"Meet The SEO Maverick: </h3>
                    <p className='text-[16px] font-[400]'>Our trailblazing leader in the realm of digital optimization, pioneering new strategies and driving transformative results. Together, as a cohesive team, we navigate the ever-changing landscape of SEO, propelling our collective success to new heights!"</p>
                </div>  
                <div className='bg-[#58BA8D] text-white p-8 rounded-lg  shadow-2xl shadow-gray-500  text-center  md:text-start' >
                    <h2 className=' pb-2  text-[19.2px] mb-[8px] font-bold'>The Tech Titan:</h2>
                    <h3  className='pb-2 text-xl '>"Meet The Business Guru:</h3>
                    <p className='text-[16px] font-[400]'> The driving force behind our digital prowess. With a visionary mindset and unmatched technical expertise, they lead our team to new heights, shaping innovative solutions and paving the way for digital success."</p>
                </div>     
            </div>
               <div className= 'pt-[48px] flex justify-center text-white'>
                   <button className='px-5 py-1 mx-[12px] text-center text-[22.4px] font-semibold bg-[#f7931e]  rounded-md shadow-xl shadow-[#FF6826]/50  ' >Schedule A Call</button>
                </div>
            
        </div>
        
    </div>
  )
}

export default WhoWeAre






