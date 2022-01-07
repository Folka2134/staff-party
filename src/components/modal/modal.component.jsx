import React, { useState ,useEffect } from 'react'

export const Modal = () => {
    const [scroll, setScroll] = useState(false)
    const [active, setActive] = useState(false)
    const [closed, setClosed] = useState(true)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 850)
        setActive(true)
      })
    }, [])

    return (
        <div className={(scroll && active && closed) ? "h-auto w-full grid fixed top-screen bottom-0 z-50 bg-black text-white justify-center transition-all duration-700 ease-in-out" : "opacity-0 absolute" }>
            <p className="text-2xl">Subscribe to our news-letter <button className="p-3" onClick={() => setClosed(false)}>X</button></p> 
            <div className="pb-10">
                <input className="text-black w-full" type="text" placeholder="Enter email"/>
            </div>
        </div>
    )
}

