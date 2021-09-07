import React from "react";

import IPropsInput from "../../data/@types/IPropsInput";

export default function Input(props: IPropsInput): any {
    const { id, label, type, placeholder, value, callBackValue } = props;

    return (
        <>
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id={id} type={type} placeholder={placeholder} value={value} onChange={(event: any) => callBackValue(event.target.value)} />
        </>
    )
}