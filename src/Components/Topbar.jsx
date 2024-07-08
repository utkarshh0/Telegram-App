import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import Sidebar from "./Sidebar";
import Button from "./Button";
import { SidebarContext, ThemeContext } from "../context";

export default function Topbar(){

    const { theme } = useContext(ThemeContext)
    const { toggleSidebar } = useContext(SidebarContext)

    return(
        <>
            <div className={`w-full ${theme === `dark` ? `bg-dark-primary` : `bg-light-primary`} text-dark-text flex items-center gap-8 p-2 fixed top-0`}>
                <Button Icon={GiHamburgerMenu} onClick={toggleSidebar}/>
                <p className="flex-grow">Telegram</p>
                <Button Icon={IoSearch} onClick={() => console.log('clicked')}></Button>
            </div>
            <Sidebar/>
        </>
    )
}