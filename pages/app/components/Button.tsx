import React from "react";

import PropsButton from "../interfaces/PropsButton";

export default function LoginPage({ callBackFunction, textBtn }: PropsButton): any {
    return (
        <div className="bg-blue-400 grid place-items-center">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={callBackFunction}>
                { textBtn }
            </button>
        </div>
    )
}