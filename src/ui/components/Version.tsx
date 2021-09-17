import React from "react";

import IVersion from "../../data/types/IVersion";

const Version = (props: IVersion): any => {
    return (
        <span className="absolute bottom-1 right-1 text-white opacity-20">{props.version}</span>
    )
}

export default Version;