import { useState } from "react";

import ChatHeader from "@components/ChatHeader";
import ChatBody from "@components/ChatBody";
import ChatFooter from "@components/ChatFooter";

import IPropsChatBody from "@types/IPropsChatBody";
import IMessagesChat from "@types/IMessagesChat";

const Chat = (): any => {
    const messages: IMessagesChat[] = [
        {
            id: '1',
            message: "Boa tarde, tudo bem? Tenho algumas sacolas para carregar, o carro tem porta malas?",
            date: "04:11",
            currentUser: false
        },
        {
            id: '2',
            message: "Tem sim, não se preocupe. Já estou chegando",
            date: "04:12",
            currentUser: true
        },
        {
            id: '3',
            message: "Muito obrigado",
            date: "04:13",
            currentUser: false
        },
        {
            id: '4',
            message: "Cheguei, a senhora está saindo?",
            date: "04:19",
            currentUser: true
        },
        {
            id: '5',
            message: "Sim, só mais um instante por gentileza",
            date: "04:19",
            currentUser: false
        },
    ];

    return (
        <>
            <div className="bg-gray-300 flex flex-col h-screen justify-between">
                <ChatHeader name="Avril Lavigne" profile="Cantora"></ChatHeader>
                <ChatBody messages={messages}></ChatBody>
                <ChatFooter></ChatFooter>
            </div>
        </>
    )
}

export default Chat;