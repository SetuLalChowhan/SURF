import React from 'react'
import Logo from './svg/Logo'
import telegram from '@/public/images/telegram1.png'
import twitter from '@/public/images/twitter.png'
import new1 from '@/public/images/New.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='   py-[30px] px-[40px] w-full flex items-center justify-between z-40 '>
    <Logo/>

    <div className=' flex gap-2'>
        <div className=' cursor-pointer'>
            <Image src={telegram} alt='telegram' />
        </div>
        <div className=' cursor-pointer'>
            <Image src={twitter} alt='twitter' />
        </div>
        <div className=' cursor-pointer'>
            <Image src={new1} alt='new1' />
        </div>
       

    </div>
</footer>
  )
}

export default Footer