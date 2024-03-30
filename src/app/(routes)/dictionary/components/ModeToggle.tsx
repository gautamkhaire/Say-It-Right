"use client"

// import * as React from "react"
import { MoonStar,Sun  } from 'lucide-react';
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    function toggleButton() {
        if (resolvedTheme === "light") {
            setTheme("dark");
        }
        if (resolvedTheme === "dark") {
            setTheme("light")
        }
    }

    return (
        <>
            <div className="flex">
                <div>
                    <div className="toggle-container flex w-[70px] justify-between items-center mr-[10px]">
                        {/* click is on the icon 
                while switching click on icon and not the button */}
                        <Button className="border-none" variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("dark")} />
                            <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("light")} />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        {/* light and dark button */}
                        <div
                            onClick={toggleButton}
                            className={`w-[40px] h-[20px] bg-gray-400 rounded-full flex justify-start p-[3px] mr-[5px] ${resolvedTheme === "dark" ? "bg-purple-700" : ""}`}
                        >
                            <div className={`w-[14px] h-[14px] rounded-full bg-neutral-950 flex flex-wrap content-center justify-center  transition-all duration-150 ${resolvedTheme === "dark" ? "transform translate-x-[16px]" : ""
                                }`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}