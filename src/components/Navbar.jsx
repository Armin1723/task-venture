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
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M0 0h24v24h-24z" fill="none"/>
                        <path d="M14.26 6.47l1.77 1.77c.19.2.19.51 0 .71l-1.77 1.77c-.2.2-.51.2-.71 0l-1.77-1.77c-.2-.2-.2-.51 0-.71l1.77-1.77c.2-.2.51-.2.71 0zM17.71 15.29c.2-.2.2-.51 0-.71l-1.77-1.77c-.2-.2-.51-.2-.71 0l-1.77 1.77c-.2.2-.51.2-.71 0l1.77 1.77c.2.2.51.2.71 0l1.77-1.77zM8.54 6.47c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77c-.2.2-.51.2-.71 0l-1.77-1.77c-.2-.2-.2-.51 0-.71l1.77-1.77zm-4.24 8.82l1.77-1.77c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77c-.2.2-.51.2-.71 0l-1.77-1.77c-.2-.2-.2-.51 0-.71zm8.85-4.24l-1.77 1.77c-.2.2-.51.2-.71 0l-1.77-1.77c-.2-.2-.2-.51 0-.71l1.77-1.77c.2-.2.51-.2.71 0l1.77 1.77c.19.2.19.51 0 .71z"/>
                    </svg>
                    ) : (
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-.59-8-3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M0 0h24v24h-24z" fill="none"/>
                        <path d="M18.364 5.636c-3.896-3.896-10.243-3.896-14.14 0s-3.896 10.243 0 14.14 10.243 3.896 14.14 0 3.896-10.243 0-14.14zm-1.414 12.728c-3.294 3.294-8.66 3.294-11.955 0-3.294-3.294-3.294-8.66 0-11.955 3.294-3.294 8.66-3.294 11.955 0 3.294 3.295 3.294 8.661 0 11.955z"/>
                        <circle cx="12" cy="12" r="5"/>
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
