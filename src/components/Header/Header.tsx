'use client'
import MenuSection from './MenuSection/MenuSection';
import { useState } from 'react';
import MenuIcon from '@/components/icons/MenuIcon';
import MenuIconClose from '@/components/icons/MenuIconClose';

export default function Header() {
    const [onMenu, setOnMenu] = useState(false);

    return (
        <>
            <div className="flex justify-end  bg-surfaceBackground-light dark:bg-surfaceBackground-dark h-[64px] w-[100%] p-2">
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
            </div>
            {
                onMenu && <MenuSection/>
            }
        </>
    );
}