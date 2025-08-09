import React from 'react';
import StarsBackground from '../background/StarsBackground';

const Section = () => {
    return (
        <>
            <StarsBackground />
            <section className='h-screen flex items-center justify-center container mx-auto'>
                <div className='w-64 h-64 bg-primary absolute right-50 blur-[200px] bottom-20 opacity-10'></div>
                <div className='w-64 h-64 bg-secondary absolute left-50 blur-[200px] top-20 opacity-50'></div>
                <div className='w-1/2 space-y-8'>
                    <h1 className='text-7xl font-semibold leading-16'>Web3 - это просто<br /><span className='text-4xl font-medium'>— даже бабушка поймёт с Zyphera!</span></h1>
                    <h2 className='text-muted-foreground text-sm max-w-xl'>Zyphera - простой и надёжный криптокошелёк, который сделает управление цифровыми активами лёгким и понятным для всех.</h2>
                </div>

                <div className='w-1/2'>

                </div>

            </section>
        </>
    );
};

export default Section;