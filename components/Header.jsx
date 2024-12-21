import React from 'react'
import Logo from './svg/Logo'
import CommonButton from './button/CommonButton'
import ButtonArrow from './svg/ButtonArrow'

const Header = () => {
  return (
    <header className=' fixed top-0 bg-[#F3FCFF] py-[41px] px-[40px] w-full flex justify-between z-40'>
        <Logo/>
        <CommonButton name={`Open SURF Telegram bot`} svg={<ButtonArrow/>}/>

    </header>
  )
}

export default Header