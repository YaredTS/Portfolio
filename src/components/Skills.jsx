import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
const Skills = () => {
  return ( 
    <div className='border border-gray-400 rounded-3xl bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='primary-color text-2xl md:text-4xl font-bold m-4'>
            My <br /> Skills
        </h2>

        <div className='flex flex-col item-center m-4 sm-my-0 w-[30px] md:w-[100px] text-center'>
            <img src={html} alt="HTML" />
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[30px] md:w-[100px] text-center'>
            <img src={css} alt="CSS" />
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[30px] md:w-[100px] text-center'>
            <img src={javascript} alt="Javascript" />
            <p className='mt-2'>Javascript</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[30px] md:w-[100px] text-center'>
            <img src={react} alt="REACT" />
            <p className='mt-2'>REACT</p>
        </div>
        <div className='flex flex-col item-center m-4 sm-my-0 w-[30px] md:w-[100px] text-center'>
            <img src={tailwind} alt="TAILWIND" />
            <p className='mt-2'>TAILWIND</p>
        </div>
    </div>
  )
}

export default Skills
