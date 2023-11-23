import React from "react";

export default function AppButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="rounded-xl h-10 px-10 bg-purple-600 border-2 border-purple-650 font-bold">
            {children}
        </button>
    );
}