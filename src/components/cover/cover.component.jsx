import React from 'react'

import { Link } from 'react-scroll';


export const Cover = () => {
    return (
        <div  className="cover-container title h-screen w-full flex justify-center items-center bg-black">
            
            <Link to="banner-container" smooth={true}>
                <div className="title text-orange-default text-5xl cursor-pointer">
                    {/* <h1 className="">Staff Party</h1> */}
                    <div className="overlay rounded-2xl">Staff Party</div>
                </div>
            </Link>
        </div>
    )
}
