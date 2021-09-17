import React from "react";

import IPropsButton from "../../data/types/IPropsButton";

const Button = (props: IPropsButton): any => {
    return (
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={props.callBackFunction}>
            {props.textBtn}
        </button>
    )
}

export default Button;