import React from 'react'

import { Link } from 'react-scroll';
import { IconContext } from 'react-icons/lib';

import { FiMonitor } from 'react-icons/fi';
import { GiTatteredBanner } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { FaCompactDisc } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { IoMdShirt } from 'react-icons/io';

export const NavBar = () => {
    return (
        <div className="nav-container flex justify-end fixed h-auto w-full text-orange-default top-5 justify-self-end pr-44 ">
            <div className="nav-bar bg-black h-14 w-80 rounded-lg">
                <ul className="nav-list h-full list-none flex justify-evenly items-center">
                    <IconContext.Provider value={{ size: "40"}}>
                        <Link to="cover-container" smooth={true}><li className="nav-item inline cursor-pointer"><FiMonitor /></li></Link>
                        <Link to="banner-container" smooth={true}><li className="nav-item inline cursor-pointer"><GiTatteredBanner /></li></Link>
                        <Link to="crew-container" smooth={true}><li className="nav-item inline cursor-pointer"><IoIosPeople /></li></Link>
                        <Link to="disc-container" smooth={true}><li className="nav-item inline cursor-pointer"><FaCompactDisc /></li></Link>
                        <Link to="vibe-container" smooth={true}><li className="nav-item inline cursor-pointer"><MdDashboard /></li></Link>
                        {/* <Link to="banner-container" smooth={true}><li className="nav-item inline"><IoMdShirt /></li></Link> */}
                    </IconContext.Provider>
                </ul>
            </div>
        </div>
    )
}
