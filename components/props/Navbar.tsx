'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from "next/link";
import { Github, Timer } from "lucide-react";
import { smoothScrollTo } from '@/lib/scroll';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={`fixed w-full flex items-center z-30 duration-1500 ${scrolled? 'lg:h-20': 'lg:h-16'}`}>
            <nav className={`mx-auto flex justify-between items-center duration-1500 h-16 ${scrolled? 'w-200 bg-card/30 lg:rounded-xl backdrop-blur px-2': 'w-full px-4'}`}>
                <div>
                    <Link href={"/"}>
                        <Image src={'/logo.png'} width={'256'} height={'256'} alt='logo' className={`w-16 h-16 mt-1`}/>
                    </Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <Button size={'lg'} variant={'ghost'} className='max-lg:hidden' onClick={() => smoothScrollTo('timeline-section', 0)}><Timer/> Таймлайн</Button>
                    {/* <Button size={'lg'} variant={'ghost'} className='max-lg:hidden' onClick={() => smoothScrollTo('showcase-section', 80)}><TvMinimalPlay/> Showcase</Button> */}
                    <Link href={'https://github.com/ZypheraWallet'}>
                        <Button size={'lg'} className='shadow shadow-primary'><Github/> GitHub</Button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;