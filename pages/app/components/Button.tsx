import React from "react";

interface LoginProps {
    textBtn: string
}

export default function LoginPage({ textBtn }: LoginProps): any {
    return (
        <div className="bg-blue-400 grid place-items-center">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                { textBtn }
            </button>
        </div>
    )
}