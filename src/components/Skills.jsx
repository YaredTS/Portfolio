import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import figma from '../assets/figma.png'

const Skills = () => {
  return ( 
    <div className='h-[40vh]'>
    <h2 className='primary-color text-2xl md:text-4xl font-bold mx-14 my-8'>
    Here are my main skills:
 </h2>

    <div className='border border-gray-600 rounded-3xl bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>

        <div className='flex flex-col item-center m-4 sm-my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt="HTML" />
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt="CSS" />
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[40px] md:w-[100px]'>
            <img src={javascript} alt="Javascript" />
            <p className='mt-2'>Javascript</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="REACT" />
            <p className='mt-2'>REACT</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[40px] md:w-[100px]'>
            <img src={tailwind} alt="TAILWIND" />
            <p className='mt-2'>TAILWIND</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[40px] md:w-[100px]'>
            <img src={figma} alt="UI/UX Design" />
            <p className='mt-2'>UI/UX Design</p>
        </div>
    </div>
    </div>
  )
}

export default Skills
