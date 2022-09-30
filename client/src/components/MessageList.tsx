import React, {useEffect, useState} from "react";
import axios from "axios";
import {Socket} from "socket.io-client";
import {MessageHandle, MessageListBlock, MessageLists, Msg, Date, MessageBlock} from "../styles/MessageList.styles";
import { CustomImage } from "../styles/MessageSender.styles";
import * as timeago from 'timeago.js';
import {format} from "timeago.js";


interface IMessagesArray {
    message: string
}

type TMessageList = {
    socket: Socket
}

export const MessageList: React.FC<TMessageList> = ({socket}) => {
    const [messages, setMessages] = useState<IMessagesArray[]>([])

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get('http://localhost:3001/messages/all')
            setMessages(res.data)
        }

        fetch()
    }, [])

    useEffect(() => {
        socket?.on('receive', (message) => {
            setMessages(prevState => [...prevState, message])
        })
    }, [socket])

    const PF = "http://localhost:3001/images/"

    return (
        <MessageListBlock>
            <MessageLists>
                {
                    messages.map((m: any, i) => {
                        return (
                            <MessageBlock key={i}>
                                <Msg>
                                    {
                                        m.message ? <MessageHandle>{m.message}</MessageHandle> : <CustomImage src={PF + m.image}/>
                                    }
                                </Msg>
                                <Date>
                                    {format(m.createdAt)}
                                </Date>
                            </MessageBlock>
                        )
                    })
                }
            </MessageLists>
        </MessageListBlock>
    )
}