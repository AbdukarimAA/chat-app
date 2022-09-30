import './App.css';
import {MessageSender} from "./components/SenderMessage";
import {MessageList} from "./components/MessageList";
import {BorderBottom, ChatTemplate, GlobalTemplate, TemplateBorder } from './styles/Global.styles';
import {useEffect, useState} from "react";
import * as io from "socket.io-client";

function App() {

    const [socket, setSocket] = useState<any>()

    useEffect(() => {
        setSocket(io.connect('http://localhost:3001'))
    }, [])

  return (
    <GlobalTemplate >
        <ChatTemplate>
            <MessageList socket={socket} />
            <MessageSender socket={socket} />
            <TemplateBorder>
                <BorderBottom />
            </TemplateBorder>
        </ChatTemplate>
    </GlobalTemplate>
  );
}

export default App;
