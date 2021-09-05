import React from "react";

interface InputProps {
    id: string,
    label: string,
    type: string,
    placeholder?: string,
    value: string,
    callBackValue: any
}

export default function Input({ id, label, type, placeholder, value, callBackValue }: InputProps): any {
    return (
        <>
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={id}>
                { label }
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id={id} type={type} placeholder={placeholder} value={value} onChange={(event:any) => callBackValue(event.target.value)}/>
        </>
    )
}