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
                <div className=' absolute 2xl:top-0 top-16  left-[10%] lg:block hidden'>
                    <Sky/>
                </div>
                <div className=' absolute top-[20%] right-[9%] lg:block hidden'>
                    <SmallStar/>

                </div>
                <div className=' absolute top-[30%] right-[13%]   xlg:block hidden'>
                    <Thunder/>

                </div>
                <div className=' absolute 2xl:top-0 md:top-16 top-12 md:right-[10%] right-[35%]'>
                    <Snake2/>
                </div>
               
                

                <h1 className=' xlg:text-[48px] md:text-[34px] text-[24px] text-peraColor font-[400] '>ROADMAP TO THE <span className='text-[#32B4FF] font-[900]'> FUTURE</span></h1>


                <div className=' mt-16 px-2 grid place-items-center  lg:grid-cols-3 lg:place-items-start gap-5  max-w-[1300px] mx-auto'>
                    {/* box-1 */}
                    <div className='  px-3 w-[250px] xlg:w-[300px] xl:w-[323px] py-16 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>
                        <h2 className='text-[18px] font-[900] text-peraColor'>PHASE</h2>
                        <div>
                            <Image src={image1} alt='image' />
                        </div>
                        <div className='flex flex-col gap-2 text-center'>

                            <p className=' text-[18px] font-[600] text-peraColor'> Launch trading & sniping tools.</p>

                        </div>
                        <div className=' absolute xl:top-[100%] top-80 right-52 lg:top-[116%] xl:left-[90%] lg:left-[80%] transform lg:rotate-0 rotate-90 '>
                    <Arrow2/>
                </div>


                    </div>
                    {/* box-2 */}
                    <div className=' lg:mt-10 w-[250px]  px-3 xlg:w-[300px] xl:w-[323px] py-16 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>
                        <h2 className='text-[18px] font-[900] text-peraColor'>PHASE</h2>
                        <div>
                            <Image src={image2} alt='image' />
                        </div>
                        <div className='flex flex-col gap-2 text-center'>

                            <p className=' text-[18px] font-[600] text-peraColor'> Introduce trending token insights and advanced bridging.</p>

                        </div>


                    </div>
                    {/* box-3 */}
                    <div className=' w-[250px]  lg:mt-20  px-3 xlg:w-[300px] xl:w-[323px] py-16 flex flex-col justify-center items-center text-center relative gap-4 border-[2px] border-b-[#B2E5F9] bg-[#E8F9FF] rounded-[16px] shadow-custom2 '>
                        <h2 className='text-[18px] font-[900] text-peraColor'>PHASE</h2>
                        <div>
                            <Image src={image3} alt='image' />
                        </div>
                        <div className='flex flex-col gap-2 text-center'>

                            <p className=' text-[18px] font-[600] text-peraColor'> <span className=' text-[#32B4FF] font-[900]'>$SURF</span> staking and ecosystem integrations.</p>

                        </div>

                        <div className=' absolute lg:-top-[20%] lg:right-[85%] transform lg:rotate-0 rotate-[70deg] -top-16 md:-right-14 -right-3 '>
                    <Arrow1/>
                </div>


                    </div>


                </div>

            </div>

        </div>
    )
}

export default Future