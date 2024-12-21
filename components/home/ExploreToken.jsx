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
        <div className=' pt-8 px-4 mt-20 flex flex-col justify-center items-center text-center gap-8 border-[1px] border-[#9DDCF5] bg-[#F3FCFF] rounded-[24px] max-w-[1600px] mx-auto  relative'>

            <div className=' absolute top-[10%] left-[10%]'>
                <Sky/>

            </div>
            <div className=' absolute top-[30%] left-[5%]'>
                <Star1/>

            </div>
            <div className=' absolute top-[30%] right-[5%]'>
                <Star1/>

            </div>
            <div className=' absolute top-[10%] right-[10%]'>
                <Sky/>

            </div>
            <div className=' absolute top-[60%] left-[4%]'>
                <SmallYellowPlus/>

            </div>
            <div className=' absolute top-[60%] right-[4%]'>
                <YellowPlus/>

            </div>

            <p className=' border-2 border-customBlue px-6 py-3 bg-white text-[14px] rounded-[100px]'>JOIN THE DISCUSSION - JOIN THE MOVEMENT </p>

          
           <div className=' flex gap-4 items-center relative'>
                <div className=' absolute top-[50%] left-[24%]'>
                    <Image src={lineShadow} alt='line-shadow ' className=' '/>

                </div>
                <div className=' absolute -top-[20%] -left-[10%]'>
                    <ThreeBlue/>

                </div>
                <h1 className='text-[56px] text-peraColor font-normal z-20'>WHY</h1>
                <div className=' z-30'>
                <SkyDrive />
                </div>
                <h1 className='text-[56px] text-peraColor  z-20 font-bold'>SURF</h1>
                <h1 className='text-[56px] text-peraColor  z-20 '> ?</h1>
            </div>
      
           <p className=' text-[#32B4FF] text-[24px] font-[600] -mt-2'>Explore tokens. Share alpha. Build the future of Swell.</p>
           <p className=' text-peraColor text-[18px] font-[600] -mt-2 max-w-[1100px] '>SURF isn’t just another trading tool. It’s a community-driven platform tailored for Swell’s fast-growing blockchain. Connect with degens like yourself, trade smarter, and discover the latest projects—all from the comfort of your Telegram.</p>

           <button className=' bg-[#32B4FF] items-center flex gap-[10px] py-3 px-6 shadow-custom rounded-[8px] transition-all duration-300 hover:opacity-85 '>
            <span className='text-base text-[#FFF] font-bold'>Join our</span>
            <span><Telegram/></span>
            <span className='text-base text-[#FFF] font-bold'>Telegram</span>
            <span><ButtonArrow/></span>
        </button>

        <div className=' px-80 w-full flex justify-between '>
            <Image src={Circle1} alt='penguin1'/>
            <Image src={Circle1} alt='penguin2'/>

        </div>

        <div className=' w-full'>
            <FullLine/>

        </div>

        </div>

   


  
  )
}

export default ExploreToken