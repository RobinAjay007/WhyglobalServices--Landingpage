import React from 'react'
import mercyelectronics from '../images/mercy_electronics.webp'
import snjsoda from "../images/snj_soda.webp"
import brithishempire from '../images/british_empire.webp'
import quant from '../images/quant.webp'
import lotus from '../images/lotus.webp'
import blackdoor from '../images/blackdoor.png'
import verton from '../images/verton.png'
import bettertohandle from '../images/better_to_handle.webp'
import ecareindia from '../images/ecare_india.webp'
import cetus from '../images/cetus_automotive.webp'
import designshop from '../images/design_shop.webp'
import magiklife from '../images/magik_life.png'
import craash from '../images/craash.webp'
import teamperformanceracing from '../images/team_performance_rating.webp'
import thedetailingmafia from '../images/the_detail_mafia.webp'
import carcare from '../images/car_care.webp'
import bluelogo from '../images/blue.webp'


const HallOfFame = () => {
    return (
        <div className='mt-[2rem]'>
            <div className='w-full h-full bg-white'>
                <div className='h-[45%] font-serif text-black p-10 sm:p-8'>
                    {/* <img src={bluelogo}  */}
                    {/* alt='Blue Logo Hall of Fame' */}
                    {/* className='w-10 h-10 ml-4 sm:ml-[9rem] md:ml-[12.5rem] lg:ml-[20rem] xl:ml-[26.5rem]'></img> */}
                    <h1 className='font-bold text-[30px] ml-4  p-1 sm:mb-2 sm:text-[30px] lg:text-[40px] lg:mb-2 text-center'>Truimph Gallery🏆</h1>
                    <p className='text-[14px] p-4 ml-1 sm:w-[80%] sm:text-[16px] sm:p-2 sm:ml-[4rem] sm:mb-2 md:text-[16px] lg:text-[22px] lg:mx-[10rem] lg:px-[10rem]'>Join us in the Triumph Gallery, where we honor businesses of all stages, from budding beginnings to soaring success, as they've progressed together with us.</p>
                </div>
                <div className='w-[80%] mt-[5rem] grid grid-rows-8 grid-cols-2 ml-10 sm:w-[92%] sm:h-[600px] sm:ml-0 sm:mt-4  sm:grid-rows-6 sm:grid-cols-4 sm:p-10 sm:gap-1 lg:w-[90%] lg:ml-6 lg:mt-2 lg:gap-6 xl:w-[75%] xl:ml-40 xl:gap-16 items-center'>
                    <div>
                        <img
                            src={mercyelectronics}
                            alt="Mercy Electronics Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:ml-10 sm:p-4 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={snjsoda}
                            alt="SNJ Soda Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:ml-10 sm:p-4 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={brithishempire}
                            alt="Brithish Empire Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:ml-10 sm:p-4 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={quant}
                            alt="Quant Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:ml-10 sm:p-4 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={lotus}
                            alt="Lotus Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:ml-10 sm:p-4 sm:mt-6 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={blackdoor}
                            alt="Black Door Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-6 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={verton}
                            alt="Verton Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-6 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={bettertohandle}
                            alt="Better to Handle Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-6 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={ecareindia}
                            alt="E Care India Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={cetus}
                            alt="Cetus Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={designshop}
                            alt="Design Shop Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img
                            src={magiklife}
                            alt="MagikLife Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img src={craash}
                            alt="craash Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img src={teamperformanceracing}
                            alt="Team Performance Racing Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img src={thedetailingmafia}
                            alt="The Detailing Mafia Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                    <div>
                        <img src={carcare}
                            alt="Car Care Logo"
                            className='w-[100px] h-[70px] mt-2 p-4 mx-auto sm:w-[125px] sm:h-[80px] sm:p-4 sm:ml-10 sm:mt-10 sm:mx-auto xl:w-[120px] xl:h-[80px] xl:p-2 xl:ml-16' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HallOfFame
