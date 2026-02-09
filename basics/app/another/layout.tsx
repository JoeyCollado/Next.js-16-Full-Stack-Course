import { ReactNode } from "react";

//nested layout like this means the scope only for it's parent folder and is separated from the root layout outside 
export default function AnotherLayout({children}: {children: ReactNode}){
    return (
        <div>
            This is another nested layout
            {children}
        </div>
    )
}