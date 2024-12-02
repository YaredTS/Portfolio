import React from 'react'
import yared from '../assets/yared.png' 

const Home = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-16 max-w-[1200px] md:h-[70vh] mx-auto py-[100px]' id='home'>

        <div className='col-span-1 my-auto mx-auto w-[250px] sm:w-[250px] md:w-[250px] h-auto lg:w-[300px]'>
                <img src={yared} alt="MySelf"/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-1xl sm:text-2xl lg:text-3xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                Frontend Developer &<br />
                UI/UX Designer
            </h1>

            <p className=' text-white sm:text-lg my-6 lg:text-xl'>
            Hi, my name is Yared Tesfaye.
            I’m thrilled to share my web development journey with you! <br />Explore my work, skills, and the projects that reflect my passion for creating intuitive and responsive web applications.
            </p>

            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>Download CV
                </a>
                <a href='#contact ' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>
     
            </div>
        </div>
      
    </div>
  )
}

export default Home
