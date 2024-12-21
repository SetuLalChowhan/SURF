import React from 'react'
import ThreeYellow from '../svg/feature/ThreeYellow'
import YellowPlus from '../svg/feature/YellowPlus'

import SmallStar from '../svg/success/SmallStar'
import SmallPlus from '../svg/feature/SmallPlus'
import Sniper from '../svg/feature/Sniper'
import SmallYellowStar from '../svg/success/SmallYellowStar'
import Star2 from '../svg/Star2'
import penguine from '@/public/images/penguine.png'
import Image from 'next/image'
import FIrstLine from '../svg/feature/FIrstLine'
import Token from '../svg/feature/Token'
import Stalking from '../svg/feature/Stalking'
import SecondLine from '../svg/feature/SecondLine'
import Thunder from '../svg/feature/Thunder'

const featureData = [

]

const Feature = () => {
  return (
    <div className=' pt-28 relative mt-72 '>

      <div className=' absolute top-[30%] left-[5%]'>
        <SmallStar />

      </div>

      <div className=' absolute top-[30%] right-[5%]'>
        <YellowPlus />

      </div>
      <div className=' absolute top-[20%] right-[15%]'>
        <SmallPlus />

      </div>

      <div className=' max-w-[746px] mx-auto flex-col flex gap-5 justify-center items-center text-center relative '>
        <div className=' absolute -top-[10%] -right-[5%]'>
          <ThreeYellow />

        </div>
        <h1 className=' text-[48px] text-peraColor font-normal'>FEATURES THAT PUT YOU <span className=' text-[#32B4FF] font-[900]'>AHEAD</span> </h1>
        <p className='text-[18px] font-medium text-peraColor'>More than a bot—it’s your passport to the Swell Layer 2 ecosystem.</p>

      </div>

      <div className='   mt-16 max-w-[1450px] mx-auto grid grid-cols-3 gap-24 place-items-start   '>

        {/* 1st card */}

        <div className='  mt-16 px-6 py-20 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>

          <div className=' absolute -top-[11%] -left-[4%]'>
            <Star2 />

          </div>
          <div className=' absolute -top-[30%]'>
            <Image src={penguine} alt='penguine' />


          </div>
          <div className='absolute -bottom-[8%] -left-[10%]'>
            <FIrstLine />

          </div>

          <div>
            <Sniper />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-[28px] font-[600] text-peraColor'>Trading & Sniping</h2>
            <p className=' text-base font-normal text-peraColor'> Be the first to act on new opportunities with instant token snipes.</p>

          </div>


        </div>
        {/* 2nd card */}

        <div className='  px-6 py-20 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>
          <div>
            <Token />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-[28px] font-[600] text-peraColor'>Trading & Sniping</h2>
            <p className=' text-base font-normal text-peraColor'> Be the first to act on new opportunities with instant token snipes.</p>

          </div>


        </div>
        {/* 3rd card */}
        <div className=' mt-12 px-6 py-20 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>

          <div className=' absolute -top-[7%] -right-[8%]'>
            <Thunder />

          </div>
          <div className=' absolute -top-[30%]'>
            <Image src={penguine} alt='penguine' />


          </div>
          <div className='absolute -bottom-[5%] -right-[15%]'>
            <SecondLine />

          </div>

          <div>
            <Stalking />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-[28px] font-[600] text-peraColor'>Trading & Sniping</h2>
            <p className=' text-base font-normal text-peraColor'> Be the first to act on new opportunities with instant token snipes.</p>

          </div>


        </div>

      </div>



    </div>
  )
}

export default Feature