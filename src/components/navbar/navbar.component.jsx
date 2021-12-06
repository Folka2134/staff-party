import React, { useState, useEffect } from 'react'

import { Link } from 'react-scroll';
import { IconContext } from 'react-icons/lib';

import { FiMonitor } from 'react-icons/fi';
// import { GiTatteredBanner } from 'react-icons/gi';
// import { IoIosPeople } from 'react-icons/io';
import { FaCompactDisc } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
// import { IoMdShirt } from 'react-icons/io';


export const NavBar = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 850)
      })
    }, [])

    return (
        <div className={scroll ? "nav-container flex pt-12" : "opacity-0 absolute"}>
            <div className="nav-bar bg-set2-primary h-14 w-80 border-2 border-set2-fourth rounded-lg">
                <ul className="nav-list h-full list-none flex justify-evenly items-center">
                    <IconContext.Provider value={{ size: "40"}}>
                        <Link to="cover-container" smooth={true}><li className="nav-item"><FiMonitor /></li></Link>
                        {/* <Link to="banner-container" smooth={true}><li className="nav-item"><GiTatteredBanner /></li></Link>
                        <Link to="crew-container" smooth={true}><li className="nav-item"><IoIosPeople /></li></Link> */}
                        <Link to="disc-container" smooth={true}><li className="nav-item"><FaCompactDisc /></li></Link>
                        <Link to="vibe-container" smooth={true}><li className="nav-item"><MdDashboard /></li></Link>
                        {/* <Link to="banner-container" smooth={true}><li className="nav-item inline"><IoMdShirt /></li></Link> */}
                    </IconContext.Provider>
                </ul>
            </div>
        </div>
    )
}
