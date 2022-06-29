interface Action{
    isOpen: boolean
}

export function SideDrawer(props: Action) {

    return (

        <div className={props.isOpen == true ? "open p-6" : "close"}>
            <h1 className=" text-black text-2xl font-bold">Clientes</h1>
        </div>

    )
}