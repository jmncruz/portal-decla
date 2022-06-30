import { useParams } from "react-router-dom"

interface Action{
    isOpen: boolean
}

export function SideDrawer(props: Action) {
    const { param } = useParams<{ param: string }>()
    return (

        <div className={props.isOpen == true && param == "clients" ? "open p-6 h-screen overflow-y-auto" : "close"}>
            <span className=" text-black text-3xl font-bold">Clientes</span>
        </div>

    )
}