import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import { HighlightText } from "@/components/animate-ui/text/highlight";
import { StackCard } from "@/components/props/Stackcard";
import { Button } from "@/components/ui/button";
import Timeline from "@/components/props/Timeline";

import { Github, Timer } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <StarsBackground className="absolute inset-0 -z-10" />

      <section className="relative flex items-center justify-center h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="py-1 px-3 bg-card/50 border rounded-full w-max">
              <p className="font-light text-muted-foreground">Эта страница - тестовая, для отображения этапов разработки 🔧</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-8">
              <HighlightText text="Zyphera" /><span className=""> — кошелёк нового поколения</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Без лишнего шума, только то, что нужно: мгновенные переводы, понятный интерфейс и полное ощущение контроля.
            </p>
            <div className="flex gap-4">
              <Link href={'https://github.com/ZypheraWallet'}>
                <Button size="xl" className="text-base px-6 py-4">
                  <Github/> GitHub
                </Button>
              </Link>
              <Link href={'/#timeline-section'}>
                <Button variant="outline" size="xl" className="text-base px-6 py-4 backdrop-blur-[2px]">
                  <Timer/> Таймлайн
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
                <Image src={'/testcard.png'} width={'512'} height={'512'} alt='card' className="hover:scale-98 duration-500"/>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center px-4 py-16" id="timeline-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
          <div className="h-full">
            <Timeline/>
          </div>
          <div>
            <StackCard/>
          </div>
        </div>
      </section>
    </>
  );
}