"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { usePreloaderStore } from "@/store/preloaderStore";

const Preloader = () => {
    const t = useTranslations('HomePage.Herosection');
    const { loaded, compliteLoad } = usePreloaderStore();
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            compliteLoad();
        }, 2000);
        return () => clearTimeout(timer);
    }, [compliteLoad]);

    useEffect(() => {
        if (loaded) {
            const timer = setTimeout(() => setHide(true), 500);
            return () => clearTimeout(timer);
        }
    }, [loaded]);

    return (
        <div className={`fixed inset-0 z-40 flex items-center justify-center duration-1000 bg-white dark:bg-black ${hide ? 'opacity-0 pointer-events-none' : ''}`}>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: loaded ? 0 : [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: loaded ? 0.5 : 1.5,
                    repeat: loaded ? 0 : Infinity,
                    ease: "easeInOut",
                }}
                className="w-24 h-24 absolute rounded-full bg-gradient-to-r from-primary to-indigo-500 shadow-[0_0_40px_rgba(139,92,246,0.8)]"
            />
        </div>
    );
};

export default Preloader;
