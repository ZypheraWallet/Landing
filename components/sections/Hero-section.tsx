'use client'

import React from 'react';
import StarsBackground from '../background/StarsBackground';
import { useTranslations } from 'next-intl';

import { usePreloaderStore } from "@/store/preloaderStore";
import { useOpenWalletModal } from '@/store/modalStore';

import Preloader from '@/components/props/Preloader';

import { Button } from '../ui/button';
import { Wallet } from 'lucide-react';

const Section = () => {
    const t = useTranslations('HomePage.Herosection');
    const { loaded } = usePreloaderStore();
    const { open } = useOpenWalletModal();
    return (
        <>
            <Preloader />

            <StarsBackground className='-z-10' />
            <section className='min-h-screen flex max-lg:flex-col items-center justify-center container mx-auto relative'>
                <div className='w-full lg:w-2/3 space-y-8 text-center'>
                    <p className='px-4 py-1.5 bg-card rounded-xl w-max mx-auto text-sm font-light max-lg:mx-auto'>
                        {t('tg')}
                    </p>

                    <h1
                        className={`max-lg:text-center py-2 text-4xl lg:text-7xl duration-1000 relative z-50 font-bold lg:leading-16 bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                        {t('title')}
                    </h1>

                    <h2 className={`text-xl lg:text-3xl xl:text-4xl font-medium text-foreground duration-2000 relative z-50 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                        {t('title2')}
                    </h2>

                    <h2 className={`text-muted-foreground lg:max-w-xl max-lg:text-center max-lg:text-sm mx-auto duration-3000 relative z-50 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                        {t('subtitle')}
                    </h2>

                    <div className='flex gap-4 justify-center'>
                        <Button size={'xl'} onClick={open}>
                            <Wallet />
                            {t('buttons.wallet')}
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section;
