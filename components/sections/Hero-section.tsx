
import React from 'react';
import StarsBackground from '../background/StarsBackground';
import { getTranslations } from 'next-intl/server';

const Section = async () => {
    const t = await getTranslations('HomePage.Herosection');

    return (
        <>
            <StarsBackground className='-z-10' />
            <section className='min-h-screen flex max-lg:flex-col items-center justify-start container mx-auto'>
                <div className='w-full lg:w-2/3 space-y-8'>
                    <div className='px-4 py-1.5 bg-card rounded-xl w-max text-sm font-light max-lg:mx-auto'>Присоединяйся в тг: <span className='font-mono'>@ZypheraWallet</span></div>
                    <h1 className='max-lg:text-center py-2 text-4xl lg:text-7xl font-bold lg:leading-16 bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent'>{t('title')}<br /><span className='text-xl lg:text-3xl xl:text-4xl font-medium text-foreground'>{t('title2')}</span></h1>
                    <h2 className='text-muted-foreground lg:max-w-xl max-lg:text-center max-lg:text-sm'>{t('subtitle')}</h2>
                </div>
            </section>
        </>
    );
};

export default Section;