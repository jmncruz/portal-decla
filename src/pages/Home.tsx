import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Section } from "../components/Section";
import { Sidebar } from "../components/SideBar";
import { SideDrawer } from "../components/SideDrawer/SideDrawer";

export function Home() {
    const [isOpen, setValue] = useState(false)
    const { param } = useParams<{ param: string }>()

    return (
        <main className="flex min-h-screen">
            <Sidebar />
            <SideDrawer isOpen={isOpen} />
            {
                param == "clients" ? <button
                    data-tooltip-target="tooltip-default"
                    className="h-1 mt-20"
                    type="button"
                    onClick={() => {
                        setValue(!isOpen);
                    }}> {isOpen == false ? 
                        <FontAwesomeIcon icon={["fas", "angles-right"]}  className={ "w-2.5 h-2.5 rounded-full p-1.5 border-gray-200 border-2 absolute -ml-4 bg-white hover:bg-gray-100 active:border-gray-200"} /> 
                        : 
                        <FontAwesomeIcon icon={["fas", "angles-left"]}  className={ "w-2.5 h-2.5 rounded-full p-1.5 border-gray-200 border-2 absolute -ml-4 bg-white hover:bg-gray-100 active:border-gray-200"} /> 
                    }
                </button> : ""
            }
            <Section />
        </main>
    )
}