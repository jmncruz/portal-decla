import { Link } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { Users } from "../assets/Users";


export function Sidebar() {

    return (
        <aside className="w-[65px] bg-white p-3 border-r border-gray-200">
            <Logo />
            <Link to="/home/clients" >
                <Users />
            </Link>
        </aside>
    )
}