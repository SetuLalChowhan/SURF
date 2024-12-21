import Image from 'next/image'
import React from 'react'
import box from '@/public/images/panguinBox.png'
import Snake from '../svg/meme/Snake'
import Join from '../svg/meme/Join'
import TalkBox from '../svg/meme/TalkBox'
import emoji from '@/public/images/penguinEmoji.png'
import StarBold from '../svg/meme/StarBold'
const Meme = () => {
  return (
    <div className=' mt-20 bg-[linear-gradient(180deg,_#FFF_38.61%,_#F5FDFF_100%)] relative'>
        <div className=' absolute top-0 right-[37%]'>
            <StarBold/>
        </div>

        <div className=' container flex justify-between '>
            {/* left side */}

            <div className=' absolute top-[5%] left-[25%]'>
                <div className=' relative'>
                <TalkBox/>

                 <div className=' absolute top-[20%] left-[8%] flex flex-col  transform rotate-[8deg] text-center '>
                    <div className=' flex items-center text-[14px]'>
                    <p className='text-[14px] '>Meet</p>
                    <Image src={emoji} alt='image' />
                    <p className='font-[900] text-[14px]'>SWOLLOW</p>
                    <p className='text-[14px] ' > , your</p>
                    </div>
                    <p className=' -mt-2 text-[14px]'>degenerate mascot of success.</p>

                 </div>
                </div>

            </div>
            <div className=' pt-[100px]'>
                <Image src={box} alt='image' />

            </div>
            {/* rightside */}
            <div className='  max-w-[700px] mr-36'>
                <div className=' flex flex-col gap-6'>
                  <div className=' flex flex-col gap-2'>
                  <div className=' flex justify-between gap-24 items-center'>
                    <p className='text-[#32B4FF] text-[64px] font-[900]'>$SURF</p>
                    <div className=''>
                        <Snake/>

                    </div>
                        

                    </div>
                    <p className='text-[40px] text-peraColor font-[500]'>THE UTILITY MEME YOU DESERVE.</p>

                  </div>
                  <p className=' text-[18px] text-peraColor font-medium'>$SURF combines meme energy with real utility, unlocking everything from faster snipes to premium analytics and governance.</p>


                </div>

                <div className=' flex gap-44 mt-24 -ml-20 relative'>
                    {/* box-1 */}
                    <div className='border-2 text-center w-[253px] border-[#B2E5F9] rounded-md bg-[#E8F9FF] shadow-custom3 transform -rotate-[5deg] px-4 py-3 flex-col flex gap-2'>
                        <p className='text-[14px] font-medium text-peraColor'>Swaps executed with SURF Bot</p>

                        <div className='h-[2px] bg-[#B2E5F9]'></div>
                        <p className=' text-[37px] font-bold text-peraColor'>1,120</p>


                    </div>

                    {/* box-2 */}
                    <div className='border-2 w-[254px] mt-5 rounded-md text-center border-[#B2E5F9]  shadow-custom3 transform rotate-[4deg] px-4 py-3 flex-col flex gap-2'>
                        <p className='text-[14px] font-medium text-peraColor'>Total swap value</p>

                        <div className='h-[2px] bg-[#B2E5F9]'></div>
                        <p className=' text-[37px] font-bold text-peraColor'>$12,391</p>


                    </div>

                    {/* join */}
                    <div className='absolute top-[40%] left-[32%]'>
                        <Join/>

                    </div>

                </div>
                

            </div>

        </div>

    </div>
  )
}

export default Meme