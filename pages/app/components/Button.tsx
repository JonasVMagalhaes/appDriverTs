import React from "react";

interface LoginProps {
    callBackFunction: any,
    textBtn: string
}

export default function LoginPage({ callBackFunction, textBtn }: LoginProps): any {
    return (
        <div className="bg-blue-400 grid place-items-center">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={callBackFunction}>
                { textBtn }
            </button>
        </div>
    )
}