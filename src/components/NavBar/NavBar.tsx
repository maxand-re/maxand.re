"use client";

import {Squircle} from "@squircle-js/react";
import {useEffect, useRef} from "react";
import anime from "animejs";

export default function NavBar() {
    const sections = ["Home", "About", "Projects", "Contact"]
    const currentSection = "Home";

    const navbar = useRef<HTMLDivElement>(null);


    useEffect(() => {
        anime({
            targets: navbar.current,
            duration: 700,
            top: ['-100%', '24px']
        });
    }, []);

    return (
        <div className="fixed top-6 left-0 flex justify-center w-full" ref={navbar}>
            <Squircle
                asChild
                cornerRadius={16}
                cornerSmoothing={1}>
                <ul className="bg-[#FFFFFF08] px-4 py-3 backdrop-blur-lg shadow-xl flex gap-4">
                    { sections.map((section, i) => <Squircle
                        key={section+i}
                        asChild
                        cornerRadius={12}
                        cornerSmoothing={1} className={`px-4 py-2 ${section === currentSection ? 'bg-[#FFFFFF08]' : ''}`}>
                        <li className="cursor-pointer hover:bg-[#FFFFFF08] transition">{section}</li>
                    </Squircle>)}
                </ul>
            </Squircle>
        </div>
    );
}