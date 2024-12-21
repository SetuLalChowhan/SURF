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
            <div className=' absolute top-[20%] left-[10%]'>
                <Star1/>

            </div>
            <div className=' absolute top-[20%] right-[10%]'>
                <Star1/>

            </div>

            <div className=' absolute top-[28%] left-[20%]'>
                <Sky/>

            </div>
            <div className=' absolute top-[28%] right-[20%]'>
                <Sky/>

            </div>
            <div className=' absolute top-[40%] left-[10%]'>
                <Star2/>

            </div>
            <div className=' absolute top-[40%] right-[10%]'>
                <Star2/>

            </div>
            

            <div className=' max-w-[973px] mx-auto flex flex-col gap-5 justify-center items-center text-center'>
                <div className=' py-3 px-6 rounded-[100px] flex justify-center gap-[6px] border-2 border-customBlue items-center bg-white '>
                    <p className=' text-[#32B4FF] font-[900] text-[14px] '>SURF</p>
                    <p className='text-[14px] font-medium'>-</p>
                    <p className='text-[14px] font-[500] text-peraColor uppercase'>isn’t just about utility; it’s about unity.</p>

                </div>

                <h1 className=' text-[#32B4FF] text-[52px] font-[900]'>MORE THAN A TOOL</h1>

                <div className="relative -mt-4">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image src={LineShadow2} alt="image" className="h-auto -z-10" />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10">
                        <p className="text-peraColor text-[32px] italic font-[400]">
                            A <span className="font-[700]">HOME</span> FOR THE SWELLCHAIN COMMUNITY
                        </p>
                    </div>
                </div>

                <p className=' text-peraColor text-[18px] font-medium'>Our mission is to build a thriving community hub where Swellchain fans can come together, connect, and collaborate. This is your central space for discussions, decisions, and driving the future of the $SURF ecosystem forward!</p>


            </div>

            <div className=' container flex justify-between mt-40'>
                <Image src={group1} alt='image'/>
                <Image src={group2} alt='image'/>

            </div>

        </div>
    )
}

export default ToolBox