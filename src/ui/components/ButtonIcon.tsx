import React from "react";

import Image from "next/dist/client/image";
import IPropsButtonIcon from "../../data/types/IPropsButtonIcon";

const ButtonIcon = (props: IPropsButtonIcon): any => {
    return (
        <Image className="rounded-full" src={props.urlLogo} alt="Avatar" width={45} height={45} />
    )
}

export default ButtonIcon;