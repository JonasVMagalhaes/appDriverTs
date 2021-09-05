import React from "react";

interface InputProps {
    id: string,
    label: string,
    type: string,
    placeholder?: string
}

export default function Input({ id, label, type, placeholder }: InputProps): any {
    return (
        <>
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                { label }
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type={type} placeholder={placeholder} />
        </>
    )
}