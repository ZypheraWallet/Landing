import React from 'react';
import StarsBackground from '../background/StarsBackground';
import { getTranslations } from 'next-intl/server';

import { Wallet, BadgeInfo } from 'lucide-react';

import { Button } from '../ui/button';

const Section = async () => {
    const t = await getTranslations('HomePage.Herosection');
    return (
        <>
            <StarsBackground className='-z-10' />
            <section className='min-h-screen flex max-lg:flex-col items-center justify-center container mx-auto'>
                <div className='w-64 h-64 bg-primary absolute right-50 blur-[200px] bottom-20 opacity-10 max-lg:hidden'></div>
                <div className='w-64 h-64 bg-secondary absolute left-50 blur-[200px] top-20 opacity-50 max-lg:hidden'></div>
                <div className='w-full lg:w-2/3 space-y-8'>
                    <h1 className='max-lg:text-center text-4xl lg:text-8xl font-semibold lg:leading-16 bg-gradient-to-br from-black to-neutral-700 dark:from-neutral-400 dark:to-neutral-50 bg-clip-text text-transparent'>{t('title')}<br /><span className='text-xl lg:text-3xl xl:text-4xl font-medium'>{t('title2')}</span></h1>
                    <h2 className='text-muted-foreground lg:max-w-xl max-lg:text-center max-lg:text-sm'>{t('subtitle')}</h2>
                    <div className='flex gap-4 max-lg:flex-col'>
                        <Button size={'xl'}><Wallet />{t('buttons.wallet')}</Button>
                        <Button size={'xl'} variant={'outline'}><BadgeInfo />{t('buttons.details')}</Button>
                    </div>
                </div>

                <div className='w-full lg:w-1/2'>
                    <div className='lg:w-86 lg:h-150 bg-card mx-auto -rotate-y-22 rounded-x-12 border shadow rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800'></div>
                </div>

            </section>
        </>
    );
};

export default Section;