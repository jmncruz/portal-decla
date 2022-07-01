import { ReactNode } from "react";

interface Tooltip{
    message: string, 
    children: ReactNode 
}

export function Tooltip(props:Tooltip) {
    return (
        <div className="relative flex flex-col items-center group">
          {props.children}
          <div className="absolute bottom-0 flex flex-col items-center mb-6 group-hover:flex">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">{props.message}</span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
          </div>
        </div>
      );
}
