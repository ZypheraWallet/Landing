'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

import { ShieldCheck, Zap, Users, QrCode } from 'lucide-react';

type ItemsCard = {
    id: number;
    title: string;
    subTitle: string;
    closePos: string;
    color?: string;
    icon: React.ReactNode;
}

const Section = () => {
    const t = useTranslations('HomePage.Featuresection.cards');

    const [currentCard, setCurrentCard] = useState<number>(0)

    const handleChangeCard = (id: number) => {
        setCurrentCard(id)
    }

    const items: ItemsCard[] = [
        {
            id: 0,
            title: t("0.title"),
            subTitle: t("0.subtitle"),
            closePos: 'lg:-translate-x-130 -translate-x-200',
            color: 'bg-purple-600/5',
            icon: <ShieldCheck className='w-full h-full' />
        },
        {
            id: 1,
            title: t("1.title"),
            subTitle: t("1.subtitle"),
            closePos: 'lg:translate-y-130 translate-y-200',
            color: 'bg-indigo-600/5',
            icon: <Zap className='w-full h-full' />
        },
        {
            id: 2,
            title: t("2.title"),
            subTitle: t("2.subtitle"),
            closePos: 'lg:translate-x-130 translate-x-200',
            color: 'bg-pink-600/5',
            icon: <Users className='w-full h-full' />
        },
        {
            id: 3,
            title: t("3.title"),
            subTitle: t("3.subtitle"),
            closePos: 'lg:-translate-x-130 -translate-x-200',
            color: 'bg-blue-600/5',
            icon: <QrCode className='w-full h-full' />
        }
    ]

    return (
        <section className='container mx-auto min-h-screen relative flex gap-8 justify-center items-center max-lg:flex-col max-lg:mt-20'>
            <div className='lg:w-1/2 w-full flex justify-center'>
                <div className='absolute w-42 h-42 bg-primary top-82 rounded-full blur-[150px] -z-10'></div>
                <Image src={'/assets/images/3d/ton.png'} width={512} height={512} alt='ton' className='absolute w-52 h-52 top-12 rotate-45 max-lg:hidden left-0 z-10 pointer-events-none'/>

                <div className='lg:w-2/3 w-full aspect-square rounded-xl bg-gradient-to-br from-background/80 to-card/60 overflow-hidden relative'>
                    {items.map((item, index) => (
                        <div key={index} className={`w-full top-0 absolute left-0 rounded-t-xl duration-500 flex justify-center items-end 
                            ${currentCard === item.id ? 'translate-x-0' : item.closePos} ${item.color}`}
                        >
                            <Image src={'/assets/test/Frame14.png'} alt={item.title} width={1200} height={1200} quality={100} className='object-cover'/>
                        </div>
                    ))}
                </div>
            </div>
            <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                <div className='absolute w-42 h-42 bg-primary bottom-42 right-0 rounded-full blur-[150px] -z-10'></div>
                <Image src={'/assets/images/3d/ton.png'} width={512} height={512} alt='ton' className='absolute w-64 h-64 bottom-34 right-0 z-20 pointer-events-none max-lg:hidden'/>

                {items.map((item, index) => (
                    <motion.div             
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        key={index} className={`lg:w-4/5 w-full mx-auto min-h-20 p-4 flex items-center gap-4 rounded-xl duration-500 cursor-pointer bg-gradient-to-br from-card/80 to-accent/80
                        ${currentCard === item.id ? 'ring-2 ring-primary hover:shadow-md shadow-primary' : 'hover:ring-2 hover:ring-border'}`}
                        onClick={() => { handleChangeCard(item.id) }}
                    >
                        <div className={`w-14 h-14 rounded-md p-3 duration-500
                            ${currentCard === item.id ? 'bg-primary text-background' : 'bg-card text-muted-foreground'}`}>
                            {item.icon}
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <h4 className='text-sm max-w-xs lg:max-w-lg'>{item.subTitle}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Section;