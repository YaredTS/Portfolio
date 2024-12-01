import React,{useState,useEffect} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    // this function is responsible for toggling the navigation variable
    const handleNav = () => {
        setNav(!nav);
    }

    const handleLinkClick = () => {
        setNav(false)
    };


      // Close the menu when resizing to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false); // Close the menu for larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
        <div className='fixed top-0 left-0 w-full bg-black/20 backdrop-blur text-white h-[10vh] px-4 z-50 transition-all duration-300s flex justify-between items-center '>
            <h1 className='text-3xl font-bold  ml-8 primary-color'>Yared.TS</h1>
            <ul className='hidden md:flex mr-8'>
                <li className='p-5 text-2xl hover:text-orange-400'><a href="#home">Home</a></li>
                <li className='p-5 text-2xl hover:text-orange-400'><a href="#about">About</a></li>
                <li className='p-5 text-2xl hover:text-orange-400'><a href="#projects">Projects</a></li>
                <li className='p-5 text-2xl hover:text-orange-400'><a href="#contact">Contact</a></li>
            </ul>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>
            
            <div className={nav ? 'fixed h-full left-0 top-0 w-[40%] bg-black rounded-lg ease-in-out duration-500 z-60' : 'fixed left-[-100%] '} >
                <h1 className='text-3xl m-4 primary-color'>Yared.TS</h1>
                <ul className='p-8 text-2xl bg-black rounded-b-lg'>
                    <li className='p-2'>
                    <a href="#home" 
                        onClick={handleLinkClick }>
                            Home
                        </a>
                    </li>
                    <li className='p-2'>
                    <a href="#about" 
                    onClick={handleLinkClick }>
                            About
                        </a>
                    </li>
                    <li className='p-2'>
                    <a href="#projects" 
                    onClick={handleLinkClick }>
                            Projects
                        </a>
                        </li>
                    <li className='p-2'>
                    <a href="#contact" 
                    onClick={handleLinkClick }>Contact
                        </a>
                    </li>
                </ul>

            </div>

        </div>
  )
}

export default Navbar
