import React from 'react'
import image1 from '@/public/images/image-1.png'
import image2 from '@/public/images/image-2.png'
import image3 from '@/public/images/image-3.png'
import Image from 'next/image'
import Arrow1 from '../svg/future/Arrow1'
import Arrow2 from '../svg/future/Arrow2'
import Sky from '../svg/success/Sky'
import Snake2 from '../svg/future/Snake2'
import SmallStar from '../svg/success/SmallStar'
import Thunder from '../svg/feature/Thunder'

const Future = () => {
    return (
        <div className=' py-20 '>
          <div>

          </div>


            <div className=' text-center relative'>
                <div className=' absolute top-0 left-[10%]'>
                    <Sky/>
                </div>
                <div className=' absolute top-[20%] right-[9%]'>
                    <SmallStar/>

                </div>
                <div className=' absolute top-[30%] right-[13%]'>
                    <Thunder/>

                </div>
                <div className=' absolute top-0 right-[10%]'>
                    <Snake2/>
                </div>
                <div className=' absolute top-[25%] right-[35%]'>
                    <Arrow1/>
                </div>
                <div className=' absolute top-[85%] left-[30%]'>
                    <Arrow2/>
                </div>

                <h1 className=' text-[48px] text-peraColor font-[400]'>ROADMAP TO THE <span className='text-[#32B4FF] font-[900]'> FUTURE</span></h1>


                <div className=' mt-16 grid grid-cols-3 place-items-start gap-2  max-w-[1300px] mx-auto'>
                    {/* box-1 */}
                    <div className='  px-3 w-[323px] py-16 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>
                        <h2 className='text-[18px] font-[900] text-peraColor'>PHASE</h2>
                        <div>
                            <Image src={image1} alt='image' />
                        </div>
                        <div className='flex flex-col gap-2 text-center'>

                            <p className=' text-[18px] font-[600] text-peraColor'> Launch trading & sniping tools.</p>

                        </div>


                    </div>
                    {/* box-2 */}
                    <div className=' mt-10  px-3 w-[323px] py-16 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>
                        <h2 className='text-[18px] font-[900] text-peraColor'>PHASE</h2>
                        <div>
                            <Image src={image2} alt='image' />
                        </div>
                        <div className='flex flex-col gap-2 text-center'>

                            <p className=' text-[18px] font-[600] text-peraColor'> Introduce trending token insights and advanced bridging.</p>

                        </div>


                    </div>
                    {/* box-3 */}
                    <div className='  mt-20  px-3 w-[323px] py-16 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>
                        <h2 className='text-[18px] font-[900] text-peraColor'>PHASE</h2>
                        <div>
                            <Image src={image3} alt='image' />
                        </div>
                        <div className='flex flex-col gap-2 text-center'>

                            <p className=' text-[18px] font-[600] text-peraColor'> <span className=' text-[#32B4FF] font-[900]'>$SURF</span> staking and ecosystem integrations.</p>

                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default Future