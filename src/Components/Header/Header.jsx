import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Header() {
    return (
        <header className='w-full bg-[rgba(255,255,255,0.8)] h-24 flex items-center justify-center text-black text-xl z-10 bg-opacity-50 sticky top-0'>
            <div className=' flex  justify-around w-full'>
                <div>
                    <h1>Logo</h1>
                </div>
                <div className='flex w-xl'>
                    <ul className='flex justify-around w-full'>
                        <li>
                            <NavLink to='/' className={({isActive}) => `${isActive ? "underline": "text-black"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Services' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Gallery' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/About' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        
    )
}

export default Header
