import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far)

import { Link, useParams } from "react-router-dom";
import { Logo } from "../assets/Logo";

export function Sidebar() {
    const { param } = useParams<{ param: string }>()
    
    return (
        <aside className="w-[65px] bg-white p-4 border-r border-gray-200">
            <div className="h-4/5 w-full gap-4 text-center flex flex-col">
                <div>
                    <Link to={'/home'}>
                        <Logo className="w-8 mb-10 mt-4" />
                    </Link>
                </div>
                

                <Link to="/home/clients" >
                    <FontAwesomeIcon icon={["far", "building"]} className={param == "clients" ? "text-emerald-500 bg-emerald-100 p-2 rounded" : "text-black p-2"}/>
                </Link>
            </div>
            <div className="w-full flex flex-col-reverse h-1/5 gap-4 text-center">
                <Link to="/home/user">
                    <FontAwesomeIcon icon={["far", "user"]}  className={param == "user" ? "text-emerald-500 bg-emerald-100 p-2 rounded" : "text-black p-2"} />
                </Link>
                <Link to="/home/settings">
                    <FontAwesomeIcon icon={["far", "sun"]}  className={param == "settings" ? "text-emerald-500 bg-emerald-100 p-2 rounded" : "text-black p-2"} />
                </Link>
            </div>
        </aside>
    )
}