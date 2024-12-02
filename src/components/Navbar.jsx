import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    // this function is responsible for toggling the navigation variable
    const handleNav = () => {
        setNav(!nav);
    }

//     const handleLinkClick = () => {
//         setNav(false)
//     };


//       Close the menu when resizing to a larger screen
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setNav(false); // Close the menu for larger screens
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);


  return (
    <div className=' text-gray-400 h-[70px] w-full max-w-[1200px] mx-auto flex justify-between items-center left-0 right-0 px-4'>
    <h1 className='text-3xl font-bold ml-4 primary-color'>Yared.TS</h1>
    {/* Desktop Menu */}
    <ul className='hidden md:flex mr-8'>
      <li className='p-5 hover:text-orange-400'><a href="#home">Home</a></li>
      <li className='p-5  hover:text-orange-400'><a href="#about">About</a></li>
      <li className='p-5   hover:text-orange-400'><a href="#projects">Projects</a></li>
      <li className='p-5 hover:text-orange-400'><a href="#contact">Contact</a></li>
    </ul>
   
    <div onClick={handleNav} className='block md:hidden cursor-pointer mr-6'>
      {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
    </div>
  
    {/* Mobile Menu */}
    <div className={nav ? 'fixed h-[400px] left-0 top-0 w-[40%] bg-[#202121] eas-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
      <h1 className='text-3xl m-4 primary-color'>Yared.TS</h1>
      <ul className='p-8 text-2xl '>
        <li className='p-4 hover:text-orange-400'>
          <a href="#home" >Home</a>
        </li>
        <li className='p-4 hover:text-orange-400'>
          <a href="#about" >About</a>
        </li>
        <li className='p-4 hover:text-orange-400'>
          <a href="#projects">Projects</a>
        </li>
        <li className='p-4 hover:text-orange-400'>
          <a href="#contact" >Contact</a>
        </li>
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar
