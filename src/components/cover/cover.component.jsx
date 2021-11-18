import React from 'react'

import { Link } from 'react-scroll';


export const Cover = () => {
    return (
        <div className="title h-screen w-full flex justify-center items-center bg-black">
            <Link to="banner-container" smooth={true}>
                <h1 className="text-orange-default text-5xl cursor-pointer">Staff Party</h1>
            </Link>
        </div>
    )
}
