import React from 'react'

export const Banner = () => {
    return (
        <div className="banner-container h-screen w-full bg-orange-default">
            <h1 className="title mx-16 py-10 text-8xl text-white">Out Now</h1>
            <div className="banner h-xxl mx-16 flex justify-center items-center bg-black rounded-2xl">
                <div className="flex justify-center items-center h-full w-full">
                    <h1 className="title text-white">Poster</h1>
                </div>
            </div>
        </div>
    )
}
