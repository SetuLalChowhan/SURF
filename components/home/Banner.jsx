import React from 'react'
import Star1 from '../svg/Star1'
import Star2 from '../svg/Star2'
import SVG1 from '../svg/banner-svg/SVG1'
import penguine from '@/public/images/image.png'
import rectangle from '@/public/images/rectangle.png'
import arrow from '@/public/images/arrowpng.png'
import Image from 'next/image'
import Barrow1 from '../svg/banner-svg/banner-arrow/Barrow1'
import Barrow2 from '../svg/banner-svg/banner-arrow/Barrow2'
import wave from '@/public/images/Wave.png'
import blueLine from '@/public/images/blueLine.png'

const Banner = () => {
    return (
        <div className=' pt-[100px] lg:pt-[132px]  -z-10 bg-[#F3FCFF]  relative'>
            <div className=''>
                <div className=' absolute lg:top-[25%] lg:left-[15%] top-[40%] left-[3%] '><Star1 /></div>
                <div className=' absolute top-[25%] right-[15%] lg:block hidden '><Star1 /></div>
                <div className=' absolute 2xl:top-[40%] lg:top-[50%] 2xl:left-[30%] lg:block hidden '><Star2 /></div>
                <div className=' absolute 2xl:top-[40%] 2xl:right-[20%] lg:right-[6%] lg:top-[3%]   top-[22%] right-[3%] '><Star2 /></div>

                {/* first row */}
                <div className=' max-w-[1058px] mx-auto flex gap-6 flex-col justify-center text-center items-center '>

                    <div className=' py-2 lg:py-3 lg:px-6 px-3 rounded-[100px] flex justify-center lg:gap-[6px] border-2 border-customBlue lg:items-center bg-white '>
                        <p className=' text-[#32B4FF] font-[900] text-[10px] lg:text-[14px] '>SURF</p>
                        <p className='text-[10px] lg:text-[14px] font-medium'>-</p>
                        <p className='text-[10px] lg:text-[14px] font-[500] text-peraColor'>The best Telegram trading bot on the <span className='font-[900]'> Swellchain</span></p>

                    </div>

                    <p className=' z-10 xl:text-[72px] px-3 lg:text-[50px] text-[40px] text-peraColor font-[400] italic relative'><span className='absolute top-3 -z-10 inset-0 lg:left-0 md:left-0 sm:left-8 left-6 sm:right-4   md:right-0 right-4 px-4 '><Image src={blueLine} alt='blueline ' className='xl:w-[550px] lg:w-[340] md:w-[300px] w-[300px] '   /></span> Simple interface,<span className='text-[#32B4FF] font-[700]'> Powerful tools</span></p>
                    <p className='text-peraColor px-4 text-[15px] lg:text-[20px] text-center font-[500]'>Every blockchain deserves a bot that simplifies life for traders. SURF is your all-in-one solution for trading, sniping, staking, and bridging, accessible directly through Telegram.</p>


                </div>

                {/* second row */}

                <div className='max-w-[950px] mx-auto mt-20  relative'>
                    <div className=' absolute lg:top-[5%] lg:left-[20%] md:left-[39%] sm:left-[42%] left-[40%] -top-[40%] transform lg:rotate-0 rotate-45'>
                        <Barrow1 />
                    </div>
                    <div className=' absolute lg:top-[45%] top-[20%] md:right-[35%] sm:right-[32%]  lg:right-[25%] right-[26%] transform lg:rotate-0 -rotate-45'>
                        <Barrow2 />
                    </div>
                    <div className='  flex lg:gap-[220px] lg:justify-start justify-center gap-10 md:gap-20 px-8 '>
                        <div className=' lg:mt-9 -mt-16 '>
                        <Image src={arrow} alt='arrow' className=' w-[75px]  lg:w-[160px]' />
                        </div>
                        <div className=' lg:mt-3 mt-6 lg:-ml-0 -ml-10'>
                            <Image src={penguine} alt='penguine' className=' w-[75px]  lg:w-[160px]'  />
                        </div>
                        <div className=' lg:-mt-3 -mt-16 lg:-ml-0 -ml-7'>
                            <Image src={rectangle} alt='rectangle' className=' w-[75px]  lg:w-[160px]'  />
                        </div>

                    </div>
                </div>

                {/* 3rd row */}

                <div className=' mt-6  '>
                    <Image src={wave} alt='wave' className=' w-full' />

                </div>

            </div>

        </div>

    )
}

export default Banner