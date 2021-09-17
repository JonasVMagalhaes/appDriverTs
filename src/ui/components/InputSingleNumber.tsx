import React from "react";

const InputSingleNumber = (props: any): any => {
    const setInputFocused = (value: any) => {
        if (!value) return;
        props.setInputFocused();
    }

    return (
        <input
            className="border-solid border-4 w-12 h-12 text-center text-4xl"
            id={props.id}
            maxLength={1}
            type={props.type}
            value={props.value}
            name={props.id}
            placeholder={props.placeholder}
            onChange={(event: any) => {
                props.callBackValue(event.target.value);
                setInputFocused(event.target.value);
            }} />
    )
}

export default InputSingleNumber;