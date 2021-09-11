import React from "react";

import IPropsChatBody from "@types/IPropsChatBody";

const ChatBody = (props: IPropsChatBody): any => {
    return (
        <div className="bg-white h-full w-full overflow-y-scroll overflow-x-hidden">
            {props.messages.map(message => message.currentUser ?
                <div key={message.id} className="flex justify-end w-full m-1">
                    <div className="buble1 flex flex-col w-60 mr-10 p-3">
                        <p className="leading-5">{message.message}</p>
                        <span className="self-end text-xs">{message.date}</span>
                    </div>
                </div> :
                <div key={message.id} className="flex justify-start w-full m-2">
                    <div className="buble2 w-60 ml-4 p-3">
                        <p className="leading-5">{message.message}</p>
                        <span className="self-end text-xs">{message.date}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatBody;