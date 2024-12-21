import React from 'react'

const CommonButton = ({ name, svg }) => {
    return (
        <button className=' bg-[#32B4FF] flex gap-[10px] py-3 lg:px-6 px-4 shadow-custom rounded-[8px] transition-all  duration-300 hover:opacity-85 '>
            <span className={`text-base text-[#FFF] font-bold ${name==`Open SURF Telegram bot` && `lg:block hidden`} `}>{name}</span>
            <span>{svg}</span>
        </button>
    )
}

export default CommonButton