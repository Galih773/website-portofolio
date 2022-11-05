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
        console.log(location)
        if(typeof(location.state) == "string"){
            scroller.scrollTo(location.state, {
                smooth: true,
                duration: 500
            })
        }
        
    })

    const downloadResume = () => {
                // using Java Script method to get PDF file
        fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
                // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Resume.pdf';
        alink.click();
        })
        })
    }

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
            {typeof(location.state) == "string" || location.state === null ? 
                <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-[5]'>

                    <ul>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                            <a className='flex justify-between items-center w-full text-gray-300'
                            href="http://linkedin.com/in/mohamad-galih" target='blank'>
                                LinkedIn <FaLinkedin size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                            <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/Galih773" target='blank'>
                                Github <FaGithub size={30}/>
                            </a>
                        </li>
                        <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <a className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:mohamadgalih16@gmail.com" target='blank'>
                                Email <HiOutlineMail size={30}/>
                            </a>
                        </li>
                        <li onClick={downloadResume} className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <span className='flex justify-between items-center w-full text-gray-300'>
                                Resume <BsFillPersonLinesFill size={30}/>
                            </span>
                        </li>
                    </ul>

                </div>
                :
                <></>
            }
            

    </div>
  )
}

export default Navbar