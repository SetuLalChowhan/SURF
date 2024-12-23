import React from 'react'
import Logo from './svg/Logo'
import CommonButton from './button/CommonButton'
import ButtonArrow from './svg/ButtonArrow'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=' fixed z-50 top-0 bg-[#F3FCFF] py-[20px] lg:py-[41px] px-[20px] lg:px-[40px] w-full flex justify-between items-center  z-40'>
       <Link href={'/'}> <Logo/></Link>
        <CommonButton name={`Open SURF Telegram bot`} id={1} svg={<ButtonArrow/>} address={`#`}/>

    </header>
  )
}

export default Header