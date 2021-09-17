import React from "react";

import IPropsInput from "../../data/types/IPropsInput";

const Input = (props: IPropsInput): any => {
    return (
        <div className="mb-2 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute text-white bottom-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>

            <input
                className="bg-purple-900 py-2 border-b-2 border-gray-600 outline-none focus:border-green-400 w-full text-white pl-10"
                id={props.id}
                type={props.type}
                value={props.value}
                name={props.id}
                placeholder={props.placeholder}
                onChange={(event: any) => props.callBackValue(event.target.value)} />
        </div>
    )
}

export default Input;