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

const Banner = () => {
    return (
        <div className=' pt-[132px] -z-10 bg-[#F3FCFF]  relative'>
            <div className=''>
                <div className=' absolute top-[25%] left-[15%] '><Star1 /></div>
                <div className=' absolute top-[25%] right-[15%] '><Star1 /></div>
                <div className=' absolute top-[40%] left-[20%] '><Star2 /></div>
                <div className=' absolute top-[40%] right-[20%] '><Star2 /></div>

                {/* first row */}
                <div className=' max-w-[1058px] mx-auto flex gap-6 flex-col justify-center items-center '>

                    <div className=' py-3 px-6 rounded-[100px] flex justify-center gap-[6px] border-2 border-customBlue items-center bg-white '>
                        <p className=' text-[#32B4FF] font-[900] text-[14px] '>SURF</p>
                        <p className='text-[14px] font-medium'>-</p>
                        <p className='text-[14px] font-[500] text-peraColor'>The best Telegram trading bot on the <span className='font-[900]'> Swellchain</span></p>

                    </div>

                    <p className='new'>Simple interface,<span> Powerful tools</span></p>
                    <p className='text-peraColor text-[20px] text-center font-[500]'>Every blockchain deserves a bot that simplifies life for traders. SURF is your all-in-one solution for trading, sniping, staking, and bridging, accessible directly through Telegram.</p>


                </div>

                {/* second row */}

                <div className='max-w-[950px] mx-auto mt-20  relative'>
                    <div className=' absolute top-[5%] left-[20%]'>
                        <Barrow1 />
                    </div>
                    <div className=' absolute top-[45%] right-[25%]'>
                        <Barrow2 />
                    </div>
                    <div className='  flex gap-[220px]'>
                        <div className=' mt-9'>
                        <Image src={arrow} alt='arrow' />
                        </div>
                        <div className=' mt-3'>
                            <Image src={penguine} alt='penguine' />
                        </div>
                        <div className=' -mt-3'>
                            <Image src={rectangle} alt='rectangle' />
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