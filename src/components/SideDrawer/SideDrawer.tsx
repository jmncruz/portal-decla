interface Action{
    isOpen: boolean
}

export function SideDrawer(props: Action) {

    return (

        <div className={props.isOpen == true ? "open p-6 h-screen overflow-y-auto" : "close"}>
            <span className=" text-black text-3xl font-bold">Clientes</span>
        </div>

    )
}