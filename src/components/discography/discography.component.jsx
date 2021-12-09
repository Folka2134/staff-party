import React from 'react'

import rockbottom from "./rockbottom_record.jpg"
import steam from "./steam_record.jpg"
import endisnigh from "./endisnigh_record.jpg"

export const Discography = () => {
    return (
        <div>
            <div className="h-4 bg-set2-fourth"></div>
            <div className="disc-container h-full w-full ">
                <h1 className="title text-center md:text-left md:mx-16 pt-12 md:py-12 md:text-8xl text-7xl text-set2-sixth">Discography</h1>
                <div className="banner h-auto my-16 md:flex grid justify-center">
                    <div className="flex p-4 justify-center items-center h-full w-full scale-75">
                        <img src={rockbottom} className="record-img" width="700rem" height="auto" alt="rockbottom"/>
                    </div>
                    <div className="grid p-4 justify-start h-full w-full">
                        <h1 className="title p-4 text-white text-4xl">Rock Bottom (2021)</h1>
                        <p className="text-white">Released August 27, 2021</p>
                        <p className="text-white">Engineered by Paul 'Win' Winstanley at Brighton Electric/PW Studio</p>
                        <p className="text-white">Mastered by Alan Douches at West West Side Music</p>
                        <button className="bg-set2-fifth hover:bg-set2-third w-24 m-6 transition-all duration-300 ease-linear shadow-2xl rounded-md"><a href="https://staffpartyband.bandcamp.com/track/rock-bottom" target="_blank" rel="noreferrer">LISTEN/BUY</a></button>
                    </div>
                </div>
                <div className="banner h-auto my-16 md:flex grid justify-center">
                    <div className="flex p-4 justify-center items-center h-full w-full">
                        <img src={steam} className="record-img" width="700rem" height="auto" alt="steam"/>
                    </div>
                    <div className="grid p-4 justify-start h-full w-full">
                        <h1 className="title p-4 text-white text-4xl">Steam (2021)</h1>
                        <p className="text-white">released May 30, 2021</p>
                        <p className="text-white">Engineered by Paul 'Win' Winstanley at Brighton Electric/PW Studio</p>
                        <p className="text-white">Mastered by Alan Douches at West West Side Music </p>
                        <button className="bg-set2-fifth hover:bg-set2-third w-24 m-6 transition-all duration-300 ease-linear shadow-2xl rounded-md"><a href="https://staffpartyband.bandcamp.com/track/steam" target="_blank" rel="noreferrer">LISTEN/BUY</a></button>
                    </div>
                </div>
                <div className="banner h-auto my-16 md:flex grid justify-center">
                    <div className="flex p-4 justify-center items-center h-full w-full">
                        <img src={endisnigh} className="record-img" width="700rem" height="auto" alt="endisnigh"/>
                    </div>
                    <div className="grid p-4 justify-start h-full w-full">
                        <h1 className="title p-4 text-white text-4xl">The End is Nigh (2020)</h1>
                        <p className="text-white">Released April 3, 2020 </p>
                        <p className="text-white">Engineered by Paul 'Win' Winstanley at Brighton Electric/PW Studio</p>
                        <p className="text-white">Mastered by Alan Douches at West West Side Music </p>
                        <button className="bg-set2-fifth hover:bg-set2-third w-24 m-6 transition-all duration-300 ease-linear shadow-2xl rounded-md"><a href="https://staffpartyband.bandcamp.com/track/the-end-is-nigh" target="_blank" rel="noreferrer">LISTEN/BUY</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
