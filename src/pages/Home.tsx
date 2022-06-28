import { Section } from "../components/Section";
import { Sidebar } from "../components/Sidebar";

export function Home(){
    return (
        <main className="flex min-h-screen">
            <Sidebar />
            <Section />
        </main>

    )
}