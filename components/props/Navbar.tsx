'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useLanguageModal } from '@/store/modalStore';
import { useOpenWalletModal } from '@/store/modalStore';

import { Wallet } from 'lucide-react';

import { Button } from '../ui/button';
import LanguageModal from '@/components/props/LanguageModal';

const Navbar = () => {
    const tConfig = useTranslations('Config');
    const t = useTranslations('HomePage.Herosection');

    const { open } = useLanguageModal();
    const openWallet = useOpenWalletModal((state) => state.open)

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`fixed w-full h-16 z-30 duration-500 
                ${scrolled ? 'px-4' : ''}`}
            >
                <nav className={`container mx-auto p-4 flex justify-between items-center duration-500 bg-card/30 backdrop-blur shadow-md h-full 
                    ${scrolled ? 'mt-4 rounded-xl' : 'rounded-b-xl'}`}
                >
                    <div>
                        <p className='font-mono text-xl'>Zyphera</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Button variant={'ghost'} size={'icon'} onClick={open}>{tConfig('symbol')}</Button>
                        <Button size={'lg'} onClick={openWallet}><Wallet />{t('buttons.wallet')}</Button>
                    </div>
                </nav>
            </header>
            <LanguageModal />
        </>
    );
};

export default Navbar;