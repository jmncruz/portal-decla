import { Banner } from "../assets/Banner";

export function Section(){
    return (
        <section className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center">
                <Banner />
                <span className="text-2xl font-bold">Create your first model to get started</span>
                <button className="w-25 h-10 pr-5 pl-5 text-xs font-medium rounded text-white bg-indigo-600">+ Create Client</button>
            </div>
        </section>
    )
}