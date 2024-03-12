import { useEffect, useState } from "react";
import Message from "./Message";
import { getMessages } from '../functions/requests';

const Chat = () => {
    const [chat, setChat] = useState([]);

    useEffect(() => {
        getMessages()
            .then(data => {
                console.log(data)
                setChat(data)
            })
            .catch(error => console.log(error));
    }, []);
    const user = chat.findLast(c => c.sender_name !== 'bot')?.sender_name;
    return (
        <>
            <h1>Conversation with <span>{user}</span></h1>
            <ul id="chat">
                {chat.map((c, i) => (
                    <Message key={i} msg={c} chat={chat} />
                ))}
            </ul>
        </>
    );
}

export default Chat;