import React from 'react'
import Image from "next/image"; 

const Header = () => {
  return (
    <>
    <div className='flex bg-black w-full h-20 items-center justify-between md:px-10 px-1 fixed overflow-hidden z-50'>
      <div className="relative w-10 h-10 sm:w-15 sm:h-15 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg">
          <Image
          src="/my-profile.png" 
          alt="Тод-Эрхэс"
          layout="fill" 
          objectFit="cover" 
          priority 
          />
        </div>
        <div className='flex text-white gap-5'>
          <a href="#Hero">Home</a>
          <a href="#skill">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#minigame">Game</a>
          <a href="#contact">Contacts</a>
        </div>
    </div>
    </>
  )
}

export default Header
