import React, { useState } from 'react'
import disableScroll from 'disable-scroll';

import { Link } from 'react-scroll';


export const Cover = () => {
    const [scroll, setScroll] = useState(disableScroll.on())
    const startScroll = () => {
        setScroll(disableScroll.off())
    }
    
    return (
        <div className="cover-container title h-screen w-full flex items-center justify-center md:justify-start bg-set2-fifth">
            <Link to="disc-container" smooth={true}>
                <div className="title lg:text-set2-primary text-set2-fourth hover:text-set2-fourth md:ml-16 text-9xl text-center cursor-pointer transition-all duration-300 ease-linear">
                    <div className="overlay rounded-2xl" onClick={startScroll}>Staff Party</div>
                </div>
            </Link>
        </div>
    )
}
