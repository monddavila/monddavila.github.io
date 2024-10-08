import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo2.png';
import {Link} from 'react-scroll';

/*const handleLinkClick = (url) => {
    window.open(url, '_blank');
  }; */

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed z-[1000] w-full h-[80px] flex justify-between items-center px-4 bg-opacity-95 border-b border-gray-600 border-opacity-25 bg-gray-900 text-white '>
        <div>
            <img src={Logo} alt="Logo" style={{width: '100px'}} />
        </div>
        {/* menu */}

        <ul className='hidden md:flex justify-center items-center'>
            <li className='text-[18px] hover:inline border-b-2 border-transparent hover:border-yellow-600 hover:scale-110'>
                <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='text-[18px] hover:inline border-b-2 border-transparent hover:border-yellow-600 hover:scale-110'>
                <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className='text-[18px] hover:inline border-b-2 border-transparent hover:border-yellow-600 hover:scale-110'>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='text-[18px] hover:inline border-b-2 border-transparent hover:border-yellow-600 hover:scale-110'>
                <Link to="analytics" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='text-[18px] hover:inline border-b-2 border-transparent hover:border-yellow-600 hover:scale-110'>
                <Link to="certifications" smooth={true} duration={500}>Certifications</Link>
            </li>
            <li className='text-[18px] hover:inline border-b-2 border-transparent hover:border-yellow-600 hover:scale-110'>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
            <li>
                <a href='/Raymond-Davila-Resume.pdf' download>
                <button className='text-[18px] border-2 border-grey-600 rounded-2xl hover:border-yellow-600 hover:scale-110 px-2 py-1 shadow-md bg-gray-500 hover:bg-yellow-600'>
                    My Resume
                </button>
                </a>
            </li>
        </ul>


        {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
                {/* Mobile menu */}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                <   Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="analytics" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="certifications" smooth={true} duration={500}>Certifications</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

        {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-blue-600 '>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/raymond-luna-davila/" target="_blank" rel="noopener noreferrer">LinkedIn <FaLinkedin size={25} /></a>
                </li>
                <li className='w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#333333] '>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/monddavila" target="_blank" rel="noopener noreferrer">GitHub <FaGithub size={25} /></a>
                </li>
                <li className='w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#080808] '>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://medium.com/@raymonddavila" target="_blank" rel="noopener noreferrer">Medium <FaMedium size={25} /></a>
                </li>
                <li className='w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/' ><Link to="contact" smooth={true} duration={500}>Contact</Link> <HiOutlineMail size={25} /></a>
                </li>
                
                <li className='w-[130px] h-[50px] flex justify-between items-center ml-[-80px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/Raymond-Davila-Resume.pdf' download>Resume <BsFillPersonLinesFill size={25} /></a>
                </li>
            </ul>
            </div>
    </div>
  );
};

export default Navbar;