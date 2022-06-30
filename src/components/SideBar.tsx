import { Link } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { Settings } from "../assets/Settings";
import { Users } from "../assets/Users";


export function Sidebar() {

    return (
        <aside className="w-[65px] bg-white p-3 border-r border-gray-200">
            <div>
                <Logo />
                <Link to="/home/clients" >
                    <Users />
                </Link>
            </div>
            <div className="absolute bottom-0 mb-4">
                <Link to="/home/settings" >
                    <Settings />
                </Link>
            </div>
        </aside>
    )
}