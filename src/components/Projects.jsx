import React from 'react'
import proj1 from '../assets/weather.jpg'
import proj2 from '../assets/crypto.png'
import proj3 from '../assets/responsive.png'
import proj4 from '../assets/registration.png'
import proj5 from '../assets/design.png'


const Projects = () => {
  return (
    <div className='pt-[100px] '  id='projects'>

    <div className='sm:text-2xl md:text-3xl lg:text-5xl font-bold primary-color mx-80 pb-8'>
      <p>MY PROJECTS:</p>
    </div>

  <div className="text-white max-w-[1200px] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-3 justify-items-center items-center">

  <div className=" flex-1 bg-secondary  text-center  transition-transform duration-500 hover:border-primary hover:scale-105">
    <h2 className="text-2xl font-bold mb-4 text-white hover:">Weather App</h2>
    <img src={proj1} width={300} height={300} className='rounded-3xl' alt="" />
  </div>

  <div className="flex-1 bg-secondary  text-center  transition-transform duration-500 hover:border-primary hover:scale-105">
    <h2 className="text-xl font-bold mb-4 text-white">Crypto Price Tracker</h2>
    <img src={proj2} width={300} height={300} className='rounded-3xl' alt="" />
  </div>

  <div className="flex-1 bg-secondary  text-center  transition-transform duration-500 hover:border-primary hover:scale-105">
    <h2 className="text-xl font-bold mb-4 text-white">Responsive Landing Page</h2>
    <img src={proj3} width={300} height={300} className='rounded-3xl' alt="" />
  </div>

  <div className="flex-1 bg-secondary  text-center  transition-transform duration-500 hover:border-primary hover:scale-105">
    <h2 className="text-xl font-bold mb-4 text-white">Registration Form</h2>
    <img src={proj4} width={300} height={300} className='rounded-3xl' alt="" />
  </div>

  <div className="flex-1 bg-secondary  text-center  transition-transform duration-500 hover:border-primary hover:scale-105">
    <h2 className="text-xl font-bold mb-4 text-white">UI/UX Design</h2>
    <img src={proj5} width={300} height={300} className='rounded-3xl' alt="" />
  </div>
</div>
</div>
  )
}

export default Projects
