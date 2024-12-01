import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-auto pt-[100px] h-[70vh]' id='about'>
        <div className='md:grid md:grid-cols-2 sm-py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='sm:text-1xl my-6 md:text-xl lg:text-2xl'>
                    I am a Frontend Developer skilled in building responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. Currently, I’m expanding my expertise into Node.js and MongoDB to become a full-stack developer. Always eager to learn and create impactful solutions!
<br />
<br />
                    <span className=''>
                      Feel free to explore my projects and get in touch!
                    </span>
                    </p>
                </div>
            </div>
            <img className='  mx-auto rounded-3xl py-4 md:py-0 w-400 md:w-800 lg:w-920' src={about} alt="Me" width={300} height={300} />
        </div>
    </div>
  )
}

export default About
