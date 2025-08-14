'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { CodeXml, Github, Smartphone } from 'lucide-react';
import { IconCloud } from "@/components/magicui/icon-cloud";
import { Globe } from "@/components/magicui/globe";
import { useOpenWalletModal } from '@/store/modalStore';

const slugs = [
    "typescript",
    "javascript",
    "react",
    "android",
    "html5",
    "css3",
    "express",
    "vercel",
    "git",
    "github",
    "nextdotjs",
    "ios",
    "expo",
    "trpc",
    "telegram",
    "shadcnui",
    "tailwindcss",
    "mongodb",
    "redis",
    "ton"
];

const Section = () => {
    const { open } = useOpenWalletModal();
    return (
        <section className="min-h-screen container mx-auto space-y-16 lg:space-y-32 py-16">
            <motion.div
                className="flex flex-wrap items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="lg:w-1/2 space-y-4">
                    <h2 className="text-4xl max-lg:text-center font-bold max-w-max bg-gradient-to-r from-foreground to-primary text-transparent bg-clip-text">
                        Открытый код
                    </h2>
                    <p className="text-muted-foreground">
                        Мы верим в прозрачность и открытые технологии. Исходный код Zyphera доступен на GitHub — ты можешь изучить его, внести свои изменения или даже форкнуть и создать собственный кошелёк. Кроме того, мы предоставляем удобное API для разработчиков, чтобы интегрировать функционал Zyphera в приложения, сервисы и ботов.
                    </p>
                    <div className='flex gap-6'>
                        <Button variant="link" className="px-0 has-[>svg]:px-0"><Github /> GitHub</Button>
                        <Button variant="link" className="px-0 has-[>svg]:px-0"><CodeXml /> API для разработчиков</Button>
                    </div>
                    
                </div>

                <div className="flex justify-center w-full lg:w-1/2 lg:scale-130 relative">
                    <div className='w-32 h-32 bg-primary absolute left-3/7 top-1/3 blur-[100px] -z-10'></div>
                    <IconCloudCode />
                </div>
            </motion.div>
            <motion.div
                className="flex flex-wrap-reverse items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex justify-center w-full lg:w-1/2 lg:scale-130 relative">
                    <div className='w-32 h-32 bg-primary absolute left-3/7 top-1/3 blur-[100px] -z-10'></div>
                    <Globe />
                </div>
                <div className="lg:w-1/2 space-y-4 text-center lg:text-end">
                    <h2 className="text-4xl font-bold w-full bg-gradient-to-r from-foreground to-primary text-transparent bg-clip-text">
                        Простота и удобство
                    </h2>
                    <p className="text-muted-foreground">
                        Zyphera создана так, чтобы любому пользователю было легко начать — без лишних настроек и сложных терминов. 
                        Мы предлагаем только минимально необходимый, но при этом мощный набор функций: быстрые переводы, мгновенный доступ к балансу, простое управление контактами и безопасное хранение средств. 
                        Всё, что нужно для повседневного использования.
                    </p>
                    <div className='flex justify-end gap-6'>
                        <Button variant="link" className="px-0 has-[>svg]:px-0" onClick={ open }><Smartphone /> Начать пользоваться</Button>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Section;

export function IconCloudCode() {
    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}