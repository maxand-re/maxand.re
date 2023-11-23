"use client";

import {useEffect, useState} from "react";
import AppButton from "@/components/ui/AppButton/AppButton";
import gsap from "gsap";

export default function Home() {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

    useEffect(() => {

        const handleMouseMove = (event: any) => {
            setMousePos({ x: event.clientX, y: event.clientY })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <header className="h-screen flex flex-col justify-center items-center">
            <div className="-z-50">
                <div className="rounded-[100%] bg-purple-500 h-[50%] w-[50%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px]"/>
                <div className="rounded-[100%] bg-purple-500 h-[120px] w-[120px] fixed -translate-x-1/2 -translate-y-1/2 blur-[40px]"
                     style={{left: mousePos.x, top: mousePos.y}}
                />
            </div>

            <div className="max-w-xl">
                <h1 className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl font-serif">
                    Maxandre
                </h1>
                <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-l font-light">
                    <span className="font-bold">Software Engineering</span> Student.
                </h2>
                <div className="flex gap-3 mt-3">
                    <AppButton>Discord</AppButton>
                    <AppButton>LinkedIn</AppButton>
                    <AppButton>Mail</AppButton>
                </div>
            </div>
        </header>
    )
}
