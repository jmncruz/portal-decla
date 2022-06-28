import { Logo } from "../assets/Logo";
import { Settings } from "../assets/Settings";
import { Users } from "../assets/Users";

export function Sidebar() {

    return (
        <aside className="w-[65px] bg-white p-3 border-r border-gray-200">
            <Logo />
            <a href="">
                <Users />
            </a>
            
            <Settings />
        </aside>
    )
}