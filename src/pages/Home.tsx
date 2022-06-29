import { useState } from "react";
import { DrawerClose } from "../assets/DrawerClose";
import { DrawerOpen } from "../assets/DrawerOpen";
import { Section } from "../components/Section";
import { Sidebar } from "../components/SideBar";
import { SideDrawer } from "../components/SideDrawer/SideDrawer";

export function Home(){
    const [isOpen, setValue] = useState(false);
    return (
        <main className="flex min-h-screen">
            <Sidebar />
            <SideDrawer isOpen={isOpen} />
            <button
                type="button"
                onClick={() => {
                    setValue(!isOpen);
                }}> { isOpen == false ? <DrawerClose /> : <DrawerOpen />}
            </button>
            <Section />
        </main>
    )
}