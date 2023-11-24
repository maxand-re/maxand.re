import React, {ComponentProps} from "react";
import {Squircle} from "@squircle-js/react";

type Button = ComponentProps<"button">;

export default function AppButton({children, icon, ...props}: { children: React.ReactNode, icon?: React.ReactNode } & Button) {
    return (
        <Squircle
            asChild
            defaultHeight={45}
            defaultWidth={150}
            cornerRadius={12}
            cornerSmoothing={1}>
            <button {...props} className={`flex justify-center items-center gap-2 h-full w-full bg-white text-black font-bold ${props.className}`}>
                <span className="pl-4">{icon}</span>
                <span className="flex-auto mr-4">{children}</span>
            </button>
        </Squircle>
    );
}