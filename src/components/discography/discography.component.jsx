import React from 'react'

import rockbottom from "./rockbottom_record.jpg"
import steam from "./steam_record.jpg"
import endisnigh from "./endisnigh_record.jpg"

export const Discography = () => {
    return (
        <div>
            <div className="h-4 bg-set2-fourth"></div>
            <div className="disc-container h-full w-full ">
                <h1 className="title text-center md:text-left md:mx-16 py-12 text-8xl text-set2-sixth">Discography</h1>
                <div className="banner h-auto my-16 md:flex grid justify-center">
                    <div className="flex p-4 justify-center items-center h-full w-full">
                        <img src={rockbottom} className="record-img" width="700rem" height="auto" alt="rockbottom"/>
                    </div>
                    <div className="grid p-4 justify-start h-full w-full">
                        <h1 className="title p-4 text-white text-4xl">Rock Bottom (2021)</h1>
                        <p className="text-white">Released August 27, 2021</p>
                        <p className="text-white">Engineered by Paul 'Win' Winstanley at Brighton Electric/PW Studio</p>
                        <p className="text-white">Mastered by Alan Douches at West West Side Music</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
