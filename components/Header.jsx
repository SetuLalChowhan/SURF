import React from 'react'
import Logo from './svg/Logo'
import CommonButton from './button/CommonButton'
import ButtonArrow from './svg/ButtonArrow'

const Header = () => {
  return (
    <header className=' fixed top-0 bg-[#F3FCFF] py-[20px] lg:py-[41px] px-[20px] lg:px-[40px] w-full flex justify-between items-center  z-40'>
        <Logo/>
        <CommonButton name={`Open SURF Telegram bot`} id={1} svg={<ButtonArrow/>}/>

    </header>
  )
}

export default Header