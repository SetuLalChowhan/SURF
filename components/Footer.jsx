import React from 'react'
import Logo from './svg/Logo'
import telegram from '@/public/images/telegram1.png'
import twitter from '@/public/images/twitter.png'
import new1 from '@/public/images/New.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='   py-[20px] lg:py-[41px] px-[20px] lg:px-[40px] w-full flex items-center justify-between z-40 '>
   <Link href={'/'}> <Logo/></Link>

    <div className=' flex gap-2'>
        <Link href={`#`} className=' cursor-pointer transition-all duration-300 hover:opacity-80'>
            <Image src={telegram} alt='telegram' className=' lg:w-[50px] w-[32px]' />
        </Link>
        <Link href={`#`} className=' cursor-pointer transition-all duration-300 hover:opacity-80'>
            <Image src={twitter} alt='twitter' className=' lg:w-[50px] w-[32px]' />
        </Link>
        <Link href={`#`} className=' cursor-pointer transition-all duration-300 hover:opacity-80'>
            <Image src={new1} alt='new1' className=' lg:w-[50px] w-[32px]'/>
        </Link>
       

    </div>
</footer>
  )
}

export default Footer