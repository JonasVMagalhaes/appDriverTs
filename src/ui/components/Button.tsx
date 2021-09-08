import React, { useState } from "react";

import IPropsButton from "@types/IPropsButton";

const Button = (props: IPropsButton): any => {
    return (
        <div className="bg-blue-400 grid place-items-center">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.callBackFunction}>
                {props.textBtn}
            </button>
        </div>
    )
}

export default Button;