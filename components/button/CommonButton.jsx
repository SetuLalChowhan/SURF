import Link from 'next/link'
import React from 'react'

const CommonButton = ({ name, svg,id,address }) => {
    return (
        <Link href={`${address}`} className=' z-40 bg-[#32B4FF] cursor-pointer flex gap-[10px] py-3 lg:px-6 px-4 shadow-custom rounded-[8px] transition-all  duration-300 hover:opacity-85 '>
            <span className={`md:text-base text-[14px] text-[#FFF] font-bold ${(name==`Open SURF Telegram bot` && id) && `lg:block hidden`} `}>{name}</span>
            <span>{svg}</span>
        </Link>
    )
}

export default CommonButton