import React from 'react';
import SuccessImage from '@/public/images/success.png';
import Image from 'next/image';
import YellowLine from '../svg/success/YellowLine';
import CommonButton from '../button/CommonButton';
import ButtonArrow from '../svg/ButtonArrow';
import Sky from '../svg/success/Sky';
import rectangle1 from "@/public/images/Rectangle-1.png"
import Three from '../svg/success/Three';
import SmallYellowStar from '../svg/success/SmallYellowStar';
import Fly from '../svg/success/Fly';
import SmallStar from '../svg/success/SmallStar';

const Success = () => {
    return (
        <div
           
            className="w-full pt-28 relative "
        >
            <div className=' absolute top-[5%] left-[5%] '>
                    <Sky/>
                </div>

            <div className=' absolute top-[5%] left-[20%]'>
                <Three/>

            </div>
            <div className=' absolute top-[10%] left-[20%] '>
                    <Image src={rectangle1} alt='rectangle' />
                </div>
            <div className=' absolute top-[20%] left-[33%] '>
                    <SmallYellowStar />
                </div>

                <div className=' absolute top-[25%] left-[40%] '>
                    <Sky/>
                </div>
                <div className=' absolute top-[5%] right-[5%] '>
                    <Fly/>
                </div>
                <div className=' absolute top-[40%] right-[5%] '>
                    <SmallStar/>
                </div>

            {/* left side */}

            <div className='container '>
                
                <div className=' flex flex-col gap-10 max-w-[542px] relative items-start'>
                    <div className=' absolute top-[20%] left-[47%]'>
                        <YellowLine/>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className=' text-[52px] font-normal'>SURF THE<span className='text-[#2042CA] font-[900]'> SWELL</span> OF SUCCESS </h1>
                        <p className=' text-peraColor text-[18px] font-[500]'>Effortlessly interact with tokens launched on the Swellchain. Anytime. Anywhere.</p>

                    </div>
                    <CommonButton name={`Open SURF Telegram bot`} svg={<ButtonArrow/>}/>


                </div>

            </div>

            {/* //right side */}
            <div className=' absolute top-[15%]  w-full'>
                <Image quality={100} priority  src={SuccessImage} alt='image' className='  w-full ' />

            </div>
        </div>
    );
};

export default Success;
