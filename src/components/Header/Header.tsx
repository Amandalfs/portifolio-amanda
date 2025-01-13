"use client"
import { useState } from "react";
import MenuSection from "@/components/Header/MenuSection/MenuSection";
import MenuIcon from "@/components/icons/MenuIcon";
import MenuIconClose from "@/components/icons/MenuIconClose";

export default function Header() {
    const [onMenu, setOnMenu] = useState(false);

    return (
        <>
            <header className="fixed flex justify-end  bg-surfaceBackground-light dark:bg-surfaceBackground-dark h-[64px] w-[100%] p-2">
               {    
                    onMenu ?
                    <MenuIconClose  
                        className="
                            fill-textPrimary-light 
                            dark:fill-textPrimary-dark"  
                        onClick={() => setOnMenu(!onMenu)}/> :
                    <MenuIcon
                        className="
                            fill-textPrimary-light 
                            dark:fill-textPrimary-dark"  
                        onClick={() => setOnMenu(!onMenu)} />
                }
            </header>
            {
                onMenu && <MenuSection/>
            }
        </>
    );
}