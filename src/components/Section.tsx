import { useParams } from "react-router-dom";
import { Banner } from "../assets/Banner";
import { Table } from "./Table";

export function Section() {
    const { param } = useParams<{ param: string }>()
    return (
        <section className="w-full">
            {
                param == "settings" ?
                    <div className="flex flex-col items-center">
                        <Banner />
                        <span className="text-2xl font-bold">Create your first model to get started</span>
                        <button className="w-25 h-10 pr-5 pl-5 text-xs font-medium rounded text-white bg-indigo-600">+ Create Client</button>
                    </div> :
                    <Table />
            }

        </section>
    )
}