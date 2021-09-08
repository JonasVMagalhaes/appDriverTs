import React from "react";

import IPropsInput from "@types/IPropsInput";

const Input = (props: IPropsInput): any => {
    return (
        <>
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={props.id}>
                {props.label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} onChange={(event: any) => props.callBackValue(event.target.value)} />
        </>
    )
}

export default Input;