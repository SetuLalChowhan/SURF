import React from 'react'
import LineShadow2 from "@/public/images/LineShadow2.png"
import Image from 'next/image'
import group1 from '@/public/images/Group-1.png'
import group2 from '@/public/images/group-2.png'
import Star1 from '../svg/Star1'
import Sky from '../svg/success/Sky'
import Star2 from '../svg/Star2'

const ToolBox = () => {
    return (
        <div className='bg-[#F5FDFF] pt-14 pb-24 relative'>
            <div className=' absolute 2xl:top-[20%] top-80 left-[10%]'>
                <Star1/>

            </div>

            <div className=' absolute md:hidden block top-6 right-16'>
            <Image src={group1} alt='image' className=' w-32'/>
            </div>
            <div className=' absolute 2xl:top-[20%] top-80 right-[10%]'>
                <Star1/>

            </div>

            <div className=' absolute 2xl:top-[28%] top-2 left-[20%]'>
                <Sky/>

            </div>
            <div className=' md:block hidden absolute 2xl:top-[28%] top-2 right-[20%]'>
                <Sky/>

            </div>
            <div className=' absolute 2xl:top-[40%] top-96 left-[10%]'>
                <Star2/>

            </div>
            <div className=' absolute 2xl:top-[40%] top-96  right-[10%]'>
                <Star2/>

            </div>
            

            <div className=' max-w-[973px] mx-auto flex flex-col gap-5 justify-center items-center text-center'>
                <div className=' lg:py-3 py-2 lg:px-6 px-3 rounded-[100px] flex justify-center gap-[6px] border-2 border-customBlue items-center bg-white '>
                    <p className=' text-[#32B4FF] font-[900] text-[10px] md:text-[14px] '>SURF</p>
                    <p className='text-[14px] font-medium'>-</p>
                    <p className='md:text-[14px] text-[10px] font-[500] text-peraColor uppercase'>isn’t just about utility; it’s about unity.</p>

                </div>

                <h1 className=' text-[#32B4FF] xl:text-[52px] md:text-[35px] text-[28px] font-[900]'>MORE THAN A TOOL</h1>

                <div className="relative -mt-4">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image src={LineShadow2} alt="image" className="h-auto -z-10 xl:w-32 md:w-24 w-16" />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10">
                        <p className="text-peraColor xl:text-[32px] md:text-[24px] text-base italic font-[400]">
                            A <span className="font-[700]">HOME</span> FOR THE SWELLCHAIN COMMUNITY
                        </p>
                    </div>
                </div>

                <p className=' text-peraColor text-[12px] md:text-[18px] md:pb-0 pb-28 font-medium px-8'>Our mission is to build a thriving community hub where Swellchain fans can come together, connect, and collaborate. This is your central space for discussions, decisions, and driving the future of the $SURF ecosystem forward!</p>


            </div>

            <div className=' container md:flex justify-between mt-40  hidden'>
                <Image src={group1} alt='image' className=''/>
                <Image src={group2} alt='image' className=' '/>

            </div>

        </div>
    )
}

export default ToolBox