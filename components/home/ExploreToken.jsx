import Image from 'next/image'
import React from 'react'
import lineShadow from '@/public/images/lineShadow.png'
import SkyDrive from '../svg/explore/SkyDrive'
import ThreeBlue from '../svg/explore/ThreeBlue'
import Telegram from '../svg/Telegram'
import ButtonArrow from '../svg/ButtonArrow'
import Circle1 from '@/public/images/circleP1.png'
import Circle2 from '@/public/images/circleP2.png'
import FullLine from '../svg/explore/FullLine'
import Sky from '../svg/success/Sky'
import Star1 from '../svg/Star1'
import SmallYellowPlus from '../svg/explore/SmallYellowPlus'
import YellowPlus from '../svg/feature/YellowPlus'

const ExploreToken = () => {
    return (
        <div className='md:pt-8 pt-24 px-4 mt-20 flex flex-col justify-center items-center text-center gap-8 border-[1px] border-[#9DDCF5] bg-[#F3FCFF] rounded-[24px] max-w-[1600px] mx-auto  relative'>

            <div className=' absolute md:top-[10%] -top-2 left-[10%] md:pt-0 pt-10'>
                <Sky/>

            </div>
            <div className=' absolute md:top-[30%] lg:top-10 top-44 left-[5%]'>
                <Star1/>

            </div>
            <div className=' absolute md:top-[30%] lg:top-10 top-44 right-[5%] '>
                <Star1/>

            </div>
            <div className=' absolute md:top-[10%] -top-2 right-[10%] md:pt-0 pt-10'>
                <Sky/>

            </div>
            <div className=' absolute top-[60%] left-[4%]'>
                <SmallYellowPlus/>

            </div>
            <div className=' absolute top-[60%] right-[4%]'>
                <YellowPlus/>

            </div>

            <p className=' border-2 border-customBlue lg:px-6 px-3 lg:py-3 py-2 bg-white text-[10px] lg:text-[14px] rounded-[100px]'>JOIN THE DISCUSSION - JOIN THE MOVEMENT </p>

          
           <div className=' flex lg:gap-4 gap-2 items-center relative md:-mt-0 -mt-6'>
                <div className=' absolute top-[50%] left-[24%]'>
                    <Image src={lineShadow} alt='line-shadow ' className=' '/>

                </div>
                <div className=' absolute -top-[20%] -left-4 md:-left-[10%]'>
                    <ThreeBlue/>

                </div>
                <h1 className='xl:text-[56px] lg:text-[40px] text-[32px] text-peraColor font-normal z-20'>WHY</h1>
                <div className=' z-30'>
                <SkyDrive />
                </div>
                <h1 className='xl:text-[56px] lg:text-[40px] text-[32px] text-peraColor  z-20 font-bold'>SURF</h1>
                <h1 className='text-[56px] text-peraColor  z-20 '> ?</h1>
            </div>
      
           <p className=' text-[#32B4FF] lg:text-[24px] text-base font-[600] md:-mt-2 -mt-10'>Explore tokens. Share alpha. Build the future of Swell.</p>
           <p className=' text-peraColor md:text-[18px] text-[12px] font-[600] -mt-2 max-w-[1100px] '>SURF isn’t just another trading tool. It’s a community-driven platform tailored for Swell’s fast-growing blockchain. Connect with degens like yourself, trade smarter, and discover the latest projects—all from the comfort of your Telegram.</p>

           <button className=' bg-[#32B4FF] items-center flex gap-[10px] py-3 px-6 shadow-custom rounded-[8px] transition-all duration-300 hover:opacity-85 '>
            <span className='text-base text-[#FFF] font-bold'>Join our</span>
            <span><Telegram/></span>
            <span className='text-base text-[#FFF] font-bold'>Telegram</span>
            <span><ButtonArrow/></span>
        </button>

        <div className=' lg:w-[780px]  w-44   flex lg:justify-between   gap-7'>
            <Image src={Circle1} alt='penguin1' className=' w-[84px]'/>
            <Image src={Circle2} alt='penguin2' className=' w-[84px]'/>

        </div>

        <div className=' w-full'>
            <FullLine/>

        </div>

        </div>

   


  
  )
}

export default ExploreToken