import React, {ComponentProps} from "react";
import {Squircle} from "@squircle-js/react";

type Link = ComponentProps<"a">;

export default function AppLinkButton({children, icon, ...props}: {children: React.ReactNode, icon?: React.ReactNode } & Link) {
    return (
        <Squircle
            asChild
            cornerRadius={12}
            cornerSmoothing={1}>
            <a {...props} className={`flex justify-center items-center gap-2 lg:p-3 md:p-2 p-2 bg-white text-black text-center font-bold lg:text-[1em] md:text-s text-xs ${props.className}`}>
                <span className="pl-4">{icon}</span>
                <span className="flex-auto mr-4">{children}</span>
            </a>
        </Squircle>
    );
}