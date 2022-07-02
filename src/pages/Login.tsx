import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Logo } from "../assets/Logo";

library.add(fas)

export function Login() {
    return (
        <main className="flex min-h-screen">
            <article className="w-2/5  bg-emerald-600 text-white flex justify-center items-center">
                <aside className=" text-center">
                    <h1 className="font-bold text-2xl">Welcome Portal Decla!</h1>
                    <p>To keep connected with us</p>
                </aside>
            </article>
            <section className="w-3/5 bg-white flex justify-center items-center ">
                <aside className="w-1/3 flex flex-col gap-4">
                    <header className="text-center">
                        <span className="flex justify-center">
                            <Logo className={"w-12"}  />
                        </span>
                        <p className="p-5 text-gray-400">With your credentials </p>
                        <form className="flex flex-col gap-2">
                            <label className="relative text-gray-400 focus-within:text-gray-600 block ">
                                <FontAwesomeIcon icon={["fas", "envelope"]} className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
                                <input type="email" name="email" id="email" placeholder="email@kemuscorp.com" className="rounded form-input  py-3 px-4 bg-gray-100 placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none" />
                            </label>
                            <label className="relative text-gray-400 focus-within:text-gray-600 block">
                                <FontAwesomeIcon icon={["fas", "key"]} className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3" />
                                <input type="password" name="password" id="password" placeholder="password" className="rounded form-input  py-3 px-4 bg-gray-100 placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none" />
                            </label>
                            <div className="p-5" >
                                <Link to={"/home"}>
                                    <button className="bg-emerald-600 w-40 p-1 rounded text-white font-bold ">sing in</button>
                                </Link>
                            </div>
                        </form>

                    </header>
                </aside>
            </section>
        </main>
    )

}