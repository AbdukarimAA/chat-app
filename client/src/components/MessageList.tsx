import React, {useEffect, useState} from "react";
import axios from "axios";
import {Socket} from "socket.io-client";
import {MessageHandle, MessageListBlock, MessageLists, Msg, Date, MessageBlock} from "../styles/MessageList.styles";
import { CustomImage } from "../styles/MessageSender.styles";
import moment from "moment";
import 'moment/locale/ru'

interface IFormat {
    format: any
}

interface IMessagesArray {
    message: string
}

type TMessageList = {
    socket: Socket
}

moment.locale('ru')

export const MessageList: React.FC<TMessageList> = ({socket}) => {
    const [messages, setMessages] = useState<IMessagesArray[]>([])

    moment.locale('ru')


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
                                <>
                                    {
                                        m.message ? <MessageHandle>
                                            <div>{m.message}</div>
                                            <Date>
                                                {moment(m.createdAt).format('LT')}
                                            </Date>
                                        </MessageHandle> : <CustomImage src={PF + m.image}/>
                                    }
                                </>
                            </MessageBlock>
                        )
                    })
                }
            </MessageLists>
        </MessageListBlock>
    )
}