import React, { useState } from 'react';
import LogoBank from '../assets/logo.svg'
import { List } from '@phosphor-icons/react';
import Hamburger from 'hamburger-react'

export function Header() {

    const [isBurger, setIsBurger] = useState(false)

    function OpenBurger() {
        setIsBurger(!isBurger)
        console.log(isBurger)
    }

    return (
        <header className='absolute top-0 h-20 w-full z-30'>
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <a href="">
                        <img className='h-32 w-32' src={LogoBank} />
                    </a>
                    <button onClick={OpenBurger} className={`text-white z-30 ${isBurger == true ? "absolute  left-4" : ""} hidden max-md:block`}>
                        <Hamburger toggled={isBurger} toggle={setIsBurger} />
                    </button>
                    {isBurger &&
                        <nav className="absolute right-0 top-0 z-20 flex h-screen w-full flex-col items-end justify-start  bg-black">
                            {[
                                ['Home', '/Home'],
                                ['Team', '/About'],
                                ['Projects', '/About'],
                                ['Reports', '/Solution'],
                            ].map(([title, url]) => (
                                <a href={url} className="rounded-lg px-3 py-2 text-white/60 font-medium hover:text-white transition-all">{title}</a>
                            ))}
                        </nav>
                    }
                    <nav className="flex sm:justify-center space-x-4 z-20 max-md:hidden">
                        {[
                            ['Home', '/Home'],
                            ['Team', '/About'],
                            ['Projects', '/About'],
                            ['Reports', '/Solution'],
                        ].map(([title, url]) => (
                            <a href={url} className="rounded-lg px-3 py-2 text-white/60 font-medium hover:text-white transition-all">{title}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}