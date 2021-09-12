import React from "react";
import Image from 'next/image';

import IPropsChatHeader from "../../data/types/IPropsChatHeader";

import avatarImg from '@images/avatar.png';

const ChatHeader = (props: IPropsChatHeader): any => {
    return (
        <div className="w-full items-center bg-green-400 h-20 text-white flex justify-between shadow-md">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>

                <Image className="rounded-full" src={avatarImg} alt="Avatar" width={35} height={35} />

                <div className="ml-2 flex flex-col text-green-100 font-bold text-lg tracking-wide">
                    <p>{props.name}</p>
                    <span className="text-sm font-medium -mt-1">{props.profile}</span>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
    )
}

export default ChatHeader;