"use client"

import React, { useMemo, useEffect, useState } from 'react';

type Star = {
    left: number;
    top: number;
    size: number;
    delay: number;
    duration: number;
    opacity: number;
};

type Props = {
    count?: number;
    className?: string;
    minSize?: number;
    maxSize?: number;
    maxGlow?: number;
};

export default function StarsBackground({
    count = 60,
    className = '',
    minSize = 1,
    maxSize = 3,
    maxGlow = 8
}: Props) {
    const [effectiveCount, setEffectiveCount] = useState<number>(0);

    useEffect(() => {
        const isSmall = window.innerWidth < 640;
        setEffectiveCount(isSmall ? Math.max(10, Math.floor(count * 0.35)) : count);
    }, [count]);

    const stars = useMemo<Star[]>(() => {
        const arr: Star[] = [];
        for (let i = 0; i < effectiveCount; i++) {
            const left = Math.round(Math.random() * 10000) / 100;
            const top = Math.round(Math.random() * 10000) / 100;
            const size = Math.round((minSize + Math.random() * (maxSize - minSize)) * 100) / 100;
            const delay = Math.round(Math.random() * 1000) / 1000 * 6;
            const duration = Math.round((1.8 + Math.random() * 3.2) * 100) / 100;
            const opacity = Math.round((0.4 + Math.random() * 0.6) * 100) / 100;
            arr.push({ left, top, size, delay, duration, opacity });
        }
        return arr;
    }, [effectiveCount]);

    return (
        <div
            aria-hidden
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            style={{
            }}
        >
            <style>{`
            @keyframes zypheraTwinkle {
                0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
                50% { opacity: 1; transform: translate(-50%, -50%) scale(1.25); }
            }

            .zyphera-star {
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 50%;
                background: var(--primary);
                transform: translate(-50%, -50%);
                will-change: opacity, transform;
                box-shadow: 0 0 6px var(--primary);
            }
      `}</style>

            {stars.map((s, i) => (
                <span
                    key={i}
                    className="zyphera-star"
                    style={{
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        opacity: s.opacity,
                        boxShadow: `0 0 ${Math.max(2, Math.min(maxGlow, s.size * 2))}px var(--primary)`,
                        animation: `zypheraTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
                    }}
                />
            ))}
        </div>
    );
}
