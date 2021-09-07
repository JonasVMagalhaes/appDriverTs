import React from "react";

import IPropsButton from "../../data/@types/IPropsButton";

export default function Button(props: IPropsButton): any {
    const { callBackFunction, textBtn } = props;

    return (
        <div className="bg-blue-400 grid place-items-center">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={callBackFunction}>
                {textBtn}
            </button>
        </div>
    )
}