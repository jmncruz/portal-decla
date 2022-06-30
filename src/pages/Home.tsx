import { useState } from "react";
import { useParams } from "react-router-dom";
import { DrawerClose } from "../assets/DrawerClose";
import { DrawerOpen } from "../assets/DrawerOpen";
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
                    className="h-1 mt-20"
                    type="button"
                    onClick={() => {
                        setValue(!isOpen);
                    }}> {isOpen == false ? <DrawerClose /> : <DrawerOpen />}
                </button> : ""
            }

            <Section />
        </main>
    )
}