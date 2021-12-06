import React, { useState } from 'react'
import disableScroll from 'disable-scroll';

import { Link } from 'react-scroll';


export const Cover = () => {
    const [scroll, setScroll] = useState(disableScroll.on())
    const startScroll = () => {
        setScroll(disableScroll.off())
    }
    
    return (
        <div className="cover-container title h-screen w-full flex items-center justify-center 2xl:justify-start  bg-set2-fifth">
            <Link to="disc-container" smooth={true}>
                <div className="title 2xl:text-set2-primary text-set2-fourth hover:text-set2-fourth ml-16 text-9xl cursor-pointer transition-all duration-300 ease-linear">
                    {/* <h1 className="">Staff Party</h1> */}
                    <div className="overlay rounded-2xl" onClick={startScroll}>Staff Party</div>
                </div>
            </Link>
        </div>
    )
}
