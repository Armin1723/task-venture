import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Navbar = ({darkMode, setDarkMode}) => {
    const [isOpen, setIsOpen] = useState(false)

    //To handle hamburger menu
    const handleHam = () => {
        document.querySelector('.navHeadings').style.display = isOpen ? 'none' : 'flex'
        setIsOpen(!isOpen)
    }

    // To toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle('darkMode')
    }

    //Navbar Links
    const navLinks = [
        {
            name: 'PDF Report',
            path: '/'
        },
        {
            name: 'Data Fetch',
            path: '/data-fetch'
        }
    ]

    const location = useLocation();
    const pathname = location.pathname;

  return (

    <div className={`navbar sticky top-0 backdrop-blur-md max-w-full shadow-md ${darkMode ? 'shadow-gray-800': 'shadow-gray-400'} flex justify-between items-center min-h-[7vh] md:px-4`}>
        <div className="navLeft flex max-sm:flex-col max-sm:w-full">
            <Link to='/' className=' font-bold md:mr-4 max-sm:border-b-2 border-purple-900 max-sm:w-[100vw] p-2 py-3 '>
                <img src={logo} alt='logo' width={48} height={48} className=' rounded-md border-1 border-gray-500 max-sm:ml-2'></img>
            </Link>
            <div className="navHeadings max-sm:hidden flex items-center justify-start gap-4 max-sm:flex-col py-2 ">
                {navLinks.map((navLink,index) => {
                    const isActive = pathname === navLink.path;
                    return (
                        <Link to={navLink.path} key={index} className={`text-sm ${isActive && 'font-bold'}`}>{navLink.name}</Link>
                    )
                })}
            </div>
        </div>

        <div className="max-sm:absolute right-2 top-1 navRight flex items-center justify-center gap-2 ">
            <button onClick={toggleDarkMode} className={`text-${darkMode ? 'white' : 'gray-800'} focus:outline-none`}>
                {darkMode ? (
                    <svg width="30" height="30">
                        <circle cx="15" cy="15" r="6" fill="currentColor" />
                    
                        <line
                        id="ray"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        x1="15"
                        y1="1"
                        x2="15"
                        y2="4"
                        ></line>
                    
                        <use href="#ray" transform="rotate(45 15 15)" />
                        <use href="#ray" transform="rotate(90 15 15)" />
                        <use href="#ray" transform="rotate(135 15 15)" />
                        <use href="#ray" transform="rotate(180 15 15)" />
                        <use href="#ray" transform="rotate(225 15 15)" />
                        <use href="#ray" transform="rotate(270 15 15)" />
                        <use href="#ray" transform="rotate(315 15 15)" />
                    </svg>
                    ) : (
                    <svg width="30" height="30">
                        <path
                          fill="currentColor"
                          d="
                            M 23, 5
                            A 12 12 0 1 0 23, 25
                            A 12 12 0 0 1 23, 5"
                        />
                    </svg>
                )}
            </button>
            <button className='hamburger rounded-full p-2 py-3 transition-all 300ms font-semibold w-8 max-sm:block hidden' onClick={()=>handleHam()}>
                {isOpen ? <>X</> : <p className='rotate-90 '>|||</p>}
            </button>
        </div>
    </div>
  )
}

export default Navbar
