import React, {ChangeEvent, useEffect, useState} from "react";
import {Socket} from "socket.io-client";
import axios from 'axios'
import * as io from "socket.io-client";
import {AddIcon, CustomImage, MessageSenderBlock, MessageSenderInput, SendMessageIcon} from "../styles/MessageSender.styles";
import { IoIosAddCircle } from "react-icons/io";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {Modal} from "./Modal";

interface IMessageSender {
    socket: Socket
}

export const MessageSender: React.FC<IMessageSender> = ({socket}) => {
    const [value, setValue] = useState<string>('')
    const [file, setFile] = useState<any>(null)
    const [modalConst, setModalConst] = useState<any>(false)
    const [object, setObject] = useState<any>(null)

    const functionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const FC = async () => {
        if(!file && value.trim()) {
            await axios.post('http://localhost:3001/messages/write', {
                message: value
            })
            socket?.emit('send', value)
            console.log('value', value)
            setValue('')
        } else if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename);
            data.append("file", file);
            try {
                await axios.post("http://localhost:3001/upload", data);
                await axios.post("http://localhost:3001/messages/addimage", {
                    image: filename,
                    message: ''
                });
                window.location.reload()
            } catch (err) {
                console.log(err)
            }
        }
    }

    const KC = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(!file && e.key === 'Enter' && value.trim()) {
            await axios.post('http://localhost:3001/messages/write', {
                message: value
            })
            socket?.emit('send', value)
            setValue('')
        }
    }

    return (
        <MessageSenderBlock>
            {file && <Modal object={file} FC={FC} setModalConst={setFile} />}
            <label htmlFor="fileInput">
                <AddIcon>
                    <IoIosAddCircle size={31} color={'#3889e7'} />
                </AddIcon>
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e: any) => setFile(e.target.files![0])}
            />
            <MessageSenderInput
                onKeyPress={KC}
                placeholder={'Сообщение'}
                value={value}
                onChange={functionChange}
                disabled={!!file}
            />
            <SendMessageIcon onClick={FC}>
                <BsFillArrowUpCircleFill size={26} color={'#3889e7'}/>
            </SendMessageIcon>
        </MessageSenderBlock>
    )
}