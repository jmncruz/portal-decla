import { Link } from "react-router-dom";
import { More } from "../assets/More";

export function Table() {
    return (
        <>
        <header className="min-w-full p-6 border-b">
            <nav className="flex gap-4 relative">
                <span className="p-2 rounded bg-emerald-100 text-emerald-500 text-xs">Asset</span>
                <h2 className=" font-bold text-lg">All</h2>
                <span>
                    <Link to="/">
                        <More />
                    </Link>
                    
                </span>
                <div className="absolute right-0 mb-4 gap-4 flex">
                    <button className="p-2 bg-emerald-500 rounded text-gray-100">Upload</button>
                    <button className="p-2 bg-emerald-500 rounded text-gray-100">+ Create entry</button>
                </div>
            </nav>
        </header>
        <table className="min-w-full">
            <thead className="border-b">
                <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        First
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Last
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Handle
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mark
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Otto
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                    </td>
                </tr>
                <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jacob
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Thornton
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @fat
                    </td>
                </tr>
                <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Larry
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Wild
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @twitter
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}