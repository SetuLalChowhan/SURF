import React from 'react'
import bgImage1 from '@/public/images/bgImage.png'
import penguine from '@/public/images/penguineHand.png'
import ButtonArrow2 from '../svg/ButtonArrow2'
import Sky from '../svg/success/Sky'
import Sky2 from '../svg/bot/Sky2'
import WhiteStar from '../svg/bot/WhiteStar'
import WhiteSnake1 from '../svg/bot/WhiteSnake1'
import WhiteSnake2 from '../svg/bot/WhiteSnake2'
import Image from 'next/image'
import vector from "@/public/images/Vector1.png"
import BlueStar from '../svg/bot/BlueStar'
import SmallBlueButton from '../svg/bot/SmallBlueButton'

const SurfBot = () => {
  return (
    <div
    style={{
        backgroundImage: `url(${bgImage1.src})`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className=" w-full h-[372px]   rounded-lg pt-24 relative -z-20 mt-24 "
  >

<div className=' absolute -top-[30%] right-[1%]'>
        <Image src={vector} alt='image' />
    </div>
<div className=' absolute -top-[20%] left-[50%] '>
       <BlueStar/>
    </div>
<div className=' absolute -top-[30%] left-[40%] '>
       <SmallBlueButton/>
    </div>

 

   <div className=' container'>
   <div className=' absolute top-[20%] left-[10%]'>
        <Sky2/>
    </div>
    <div className=' absolute top-[80%] left-[10%]'>
        <WhiteSnake1
        />
    </div>
    <div className=' absolute top-[20%] right-[10%]'>
        <WhiteStar/>
    </div>
    <div className=' absolute top-[60%] right-[10%]'>
        <WhiteSnake2/>
    </div>

    <div className=' absolute -top-[55%] left-[10%]'>
        <Image src={penguine} alt='image' />
    </div>
    

    <div className=' max-w-[750px] mx-auto flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-white text-[56px] font-[700] uppercase'>SURF the tide of Swell. </h1>
        <p className=' italic text-white text-[36px] font-[400] uppercase -mt-4'>The next wave of trading starts here.</p>

        <button className=' bg-[#FFF] flex gap-[10px] py-3 px-6 shadow-custom rounded-[8px] transition-all duration-300 hover:opacity-85 '>
            <span className='text-base text-[#49BCFF] font-bold'>Use SURF Bot now</span>
            <span><ButtonArrow2/></span>
        </button>

    </div>

   </div>
   
  </div>
  )
}

export default SurfBot