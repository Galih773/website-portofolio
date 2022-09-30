import React, {useState} from 'react'
import Logo from '../assets/MyLogo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {scroller} from 'react-scroll'
import {NavLink, useLocation} from 'react-router-dom'
import { useEffect } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    let location = useLocation();
    
    useEffect(() => {
        scroller.scrollTo(location.state, {
            smooth: true,
            duration: 500
        })
    })

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

        <div>
            <img src={Logo} alt="Galih logo" style={{height: '50px'}} />
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    {/* <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link> */}
                    <NavLink to="/" state={"home"} >
                        Home
                    </NavLink>
                </li>
                <li>
                    {/* <Link to="about" smooth={true} duration={500}>
                        About
                    </Link> */}
                    <NavLink to="/" state={"about"} >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" state={"skills"}>
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" state={"portfolio"}>
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" state={"contact"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        

        {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}    
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <NavLink onClick={handleClick} to="/" state={"home"}>
                        Home
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    <NavLink onClick={handleClick} to="/" state={"about"}>
                        About
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    <NavLink onClick={handleClick} to="/" state={"skills"}>
                        Skills
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    <NavLink onClick={handleClick} to="/" state={"portfolio"}>
                        Portfolio
                    </NavLink>
                </li>
                <li className='py-6 text-4xl'>
                    <NavLink onClick={handleClick} to="/" state={"contact"}>
                        Contact
                    </NavLink>    
                </li> 
            </ul>


            {/* Socila icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

                <ul>
                    <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>

            </div>

    </div>
  )
}

export default Navbar