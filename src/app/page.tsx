"use client";

import {useEffect, useRef, useState} from "react";
import AppButton from "@/components/ui/AppButton/AppButton";
import cellSvg from '@/assets/images/cell.svg'
import anime from "animejs"
import {FaDiscord, FaEnvelope, FaLinkedin, FaMailchimp} from "react-icons/fa6";
import {FaMailBulk} from "react-icons/fa";

export default function Home() {
    const title = useRef<HTMLHeadingElement>(null);
    const subtitle = useRef<HTMLHeadingElement>(null);
    const light = useRef<HTMLHeadingElement>(null);
    const pointerLight = useRef<HTMLHeadingElement>(null);

    const [mousePos, setMousePos] = useState({x: -1000, y: -1000});

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            setMousePos({x: event.clientX, y: event.clientY})
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Background movements
        anime({
            targets: ".background-grid",
            loop: true,
            duration: 8000,
            backgroundPosition: '128px 128px',
            easing: "linear"
        });

        // Header animation
        anime.timeline()
            .add({
                targets: title.current!.querySelectorAll('.char'),
                translateY: ["1em", 0],
                opacity: [0, 1],
                duration: 1000,
                delay: (el, i) => 60 * i,
                endDelay: -300
            })
            .add({
                targets: subtitle.current,
                translateY: ["-2em", 0],
                opacity: [0, 1],
                duration: 800,
                endDelay: -700
            })
            .add({
                targets: '.button-container button',
                translateY: ["-1.5em", 0],
                opacity: [0, 1],
                duration: 800,
                delay: (el, i) => 60 * i,
                endDelay: -600,
            })
            .add({
                targets: [light.current, pointerLight.current],
                opacity: [0, 1, 0, 1, 1, 0, 1],
                easing: "easeInOutBounce",
                duration: 300,
                endDelay: -250
            })
            .add({
                targets: ".background-grid",
                opacity: [0, 0.5],
                duration: 1000,
                easing: "easeInCubic"
            })

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
                <div className="rounded-[100%] bg-purple-500 h-[30%] w-[30%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[80px] opacity-0" ref={light}/>
                <div
                    className="rounded-[100%] bg-purple-500 h-[15vw] w-[15vw] fixed -translate-x-1/2 -translate-y-1/2 blur-[40px] opacity-0"
                    ref={pointerLight}
                    style={{
                        top: `${mousePos.y}px`,
                        left: `${mousePos.x}px`,
                    }}/>

                <div className="h-full w-full fixed top-0 left-0 background-grid opacity-0" style={{
                    backgroundImage: `url(${cellSvg})`,

                    WebkitMaskImage: `
                        radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,1) 0%, rgba(255,255,255, 1) 0%, rgba(0,0,0,.03) 10%, rgba(0,0,0,.03) 100%),
                        radial-gradient(at center, rgba(255,255,255,1) 0%, rgba(255,255,255, 1) 10%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%)
                    `,
                    maskImage: `
                        radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,1) 0%, rgba(255,255,255, 1) 0%, rgba(0,0,0,.03) 10%, rgba(0,0,0,.03) 100%),
                        radial-gradient(at center, rgba(255,255,255,1) 0%, rgba(255,255,255, 1) 10%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 100%)
                    `,
                }}/>
            </div>
            <div className="max-w-xl">
                <h1 className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl font-serif flex" ref={title}>
                    {
                        "Maxandre"
                            .split("")
                            .map((char, i) => <div key={char+i} className="char opacity-0">{char}</div>)
                    }
                </h1>
                <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-l font-light opacity-0" ref={subtitle}>
                    <span className="font-bold">Software Engineering</span> Student.
                </h2>
                <div className="flex gap-3 mt-3 button-container">
                    <AppButton className="opacity-0" icon={<FaDiscord/>}>Discord</AppButton>
                    <AppButton className="opacity-0" icon={<FaLinkedin/>}>LinkedIn</AppButton>
                    <AppButton className="opacity-0" icon={<FaEnvelope/>}>Mail</AppButton>
                </div>
            </div>
        </header>
    )
}
